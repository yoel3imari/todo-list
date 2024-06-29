<?php

namespace App\Http\Controllers\Api;

use App\Classes\ApiResponseClass;
use App\Http\Controllers\Controller;
use App\Http\Controllers\Todo;
use App\Http\Resources\ItemResource;
use App\Models\Item;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ItemController extends Controller
{
    /**
     * get all items of auth user
     */
    public function index()
    {
        $user = Auth::user();
        $items = Item::whereHas('todos', function ($query) use ($user) {
            $query->where('user_id', $user->id);
        })->paginate(10);
        return ApiResponseClass::sendResponse(ItemResource::collection($items));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $user = Auth::user();
        $todo = Todo::findOrFail($request->todo_id);
        if ($todo->user != $user) {
            return ApiResponseClass::accessDenied();
        }
        $item = Item::create($request->all());
        return ApiResponseClass::sendResponse(new ItemResource($item), "Item created successfully.");
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $item = $this->verify_ownership($id);
        return ApiResponseClass::sendResponse(new ItemResource($item));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $item = self::verify_ownership($id);
        $item->update($request->all());
        return ApiResponseClass::sendResponse(new ItemResource($item), "Item updated successfully.");
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $item = Item::findOrFail($id);
        $item->delete();
        return ApiResponseClass::sendResponse(new ItemResource($item), "Item deleted successfully.");
    }

    public function verify_ownership($id): Item|JsonResponse
    {
        $user = Auth::user();
        $item = Item::findOrFail($id);
        $todo = $item->todo();
        if ($todo->user() != $user) {
            return ApiResponseClass::accessDenied();
        }
        return $item;
    }
}
