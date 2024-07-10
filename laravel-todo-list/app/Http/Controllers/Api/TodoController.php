<?php

namespace App\Http\Controllers\Api;

use App\Classes\ApiResponseClass;
use App\Http\Controllers\Controller;
use App\Http\Controllers\ItemResource;
use App\Http\Resources\ItemCollection;
use App\Http\Resources\TodoCollection;
use App\Http\Resources\TodoResource;
use App\Models\Todo;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class TodoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $user = Auth::user();

        $query = $user->todos();

        if($request->has('title')) {
            $query->where('title', 'like', '%' . $request->input('title') . '%');
        }

        if($request->has('created_at_from') && $request->has('created_at_to')) {
            $query->whereBetween('created_at', [$request->input('created_at_from'), $request->input('created_at_to')]);
        }

        $todos = $query->orderBy("todos.created_at", "desc")->paginate(10);
        return new TodoCollection($todos);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $newTodo = new Todo([
            "title" => $request->input("title"),
            "user_id" => Auth::user()->getAuthIdentifier()
        ]);
        $newTodo->save();
        return ApiResponseClass::sendResponse(new TodoResource($newTodo), "Todo created successfully.", 200);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $todo = Todo::findOrFail($id);
        if( Auth::user()->getAuthIdentifier() != $todo->user_id ) {
            return ApiResponseClass::accessDenied();
        }
        return ApiResponseClass::sendResponse(new TodoResource($todo));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $todo = Todo::findOrFail($id);
        if( Auth::user()->getAuthIdentifier() != $todo->user_id ) {
            return ApiResponseClass::accessDenied();
        }
        $todo->update([
            "title" => $request->input("title"),
        ]);
        return ApiResponseClass::sendResponse(new TodoResource($todo), "Todo updated successfully.");
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $todo = Todo::findOrFail($id);
        if( Auth::user()->getAuthIdentifier() != $todo->user_id ) {
            return ApiResponseClass::accessDenied();
        }
        $todo->delete();
        return ApiResponseClass::sendResponse(null, "Todo deleted successfully.", 200);
    }
}
