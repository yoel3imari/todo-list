<?php

namespace App\Http\Controllers\Api;

use App\Classes\ApiResponseClass;
use App\Http\Controllers\Controller;
use App\Http\Resources\ItemCollection;
use App\Http\Resources\ItemResource;
use App\Models\Item;
use App\Models\Todo;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ItemController extends Controller
{
    /**
     * get all items of auth user
     */
    public function index(Request $request)
    {
        $user = Auth::user();

        $query = $user->items();

        if ($request->has('content')) {
            $query->where('content', 'like', '%' . $request->input('content') . '%');
        }

        if ($request->has('completed')) {
            $query->where('completed', $request->input('completed'));
        }

        if ($request->has('deadline_from') && $request->has('deadline_to')) {
            $query->whereBetween('deadline', [$request->input('deadline_from'), $request->input('deadline_to')]);
        }

        if ($request->has('created_at_from') && $request->has('created_at_to')) {
            $query->whereBetween('created_at', [$request->input('created_at_from'), $request->input('created_at_to')]);
        }

        if ($request->has('todo_id')) {
            $todo = Todo::find($request->input('todo_id'));
            if ($todo && $todo->user->id == Auth::id()) {
                $query->where('todo_id', $request->input('todo_id'));
            }
        }

        $items = $query->orderBy('items.created_at', 'desc')->paginate(10);
        return new ItemCollection($items);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $user = Auth::user();
        $todo = Todo::findOrFail($request->input("todo_id"));
        if ($todo->user_id != $user->getAuthIdentifier()) {
            return ApiResponseClass::accessDenied();
        }
        $item = new Item([
            "content" => $request->input("content"),
            "deadline" => $request->input("deadline"),
            "todo_id" => $todo->id,
        ]);
        $item->save();
        return ApiResponseClass::sendResponse(new ItemResource($item), "Item created successfully.");
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $item = $this->verify_ownership($id);
        if ($item == null) {
            return ApiResponseClass::accessDenied();
        }
        return ApiResponseClass::sendResponse(new ItemResource($item));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $item = self::verify_ownership($id);
        if ($item == null) {
            return ApiResponseClass::accessDenied();
        }
        $item->update([
            "content" => $request->input("content") ?: $item->content,
            "deadline" => $request->input("deadline") ?: $item->deadline,
            "completed" => $request->input("completed") ?: $item->completed
        ]);
        $item->save();
        return ApiResponseClass::sendResponse(new ItemResource($item), "Item updated successfully.");
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $item = Item::findOrFail($id);
        $item->delete();
        return ApiResponseClass::sendResponse(null, "Item deleted successfully.");
    }

    public function verify_ownership($id): Item|null
    {
        $item = Item::findOrFail($id);
        if ($item->todo->user_id != Auth::id()) {
            return null;
        }
        $item->delete();
        return $item;
    }
}
