<?php

namespace App\Http\Controllers\Api;

use App\Classes\ApiResponseClass;
use App\Http\Controllers\Controller;
use App\Http\Controllers\ItemResource;
use App\Http\Resources\TodoResource;
use App\Models\Todo;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class TodoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $user = Auth::user();
        $todos = $user->todos()->paginate(10);
        return ApiResponseClass::sendResponse(TodoResource::collection($todos), "");
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $user = Auth::user();
        if( $user->id != $request->user_id ) {
            return ApiResponseClass::accessDenied();
        }
        $newTodo = Todo::create($request->all());
        return ApiResponseClass::sendResponse(new TodoResource($newTodo), "Todo created successfully.", 200);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $todo = Todo::findOrFail($id);
        if( Auth::user()->id != $todo->user_id ) {
            return ApiResponseClass::accessDenied();
        }
        if (!$todo) {
            ApiResponseClass::sendResponse(null, "Todo not found.", 404);
        }
        return ApiResponseClass::sendResponse($todo);
    }

    /**
     * get all items in this todo
     */
    public function get_items(string $id) {
        $todo = Todo::findOrFail($id);
        if( Auth::user()->id != $todo->user_id ) {
            return ApiResponseClass::accessDenied();
        }
        $items = $todo->items;
        return ApiResponseClass::sendResponse(ItemResource::collection($items));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $todo = Todo::findOrFail($id);
        if( Auth::user()->id != $todo->user_id ) {
            return ApiResponseClass::accessDenied();
        }
        if (!$todo) {
            ApiResponseClass::sendResponse(null, "Todo not found.", 404);
        }
        $todo->update($request->all());
        return ApiResponseClass::sendResponse(new TodoResource($todo), "Todo updated successfully.");
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $todo = Todo::findOrFail($id);
        if( Auth::user()->id != $todo->user_id ) {
            return ApiResponseClass::accessDenied();
        }
        if (!$todo) {
            ApiResponseClass::sendResponse(null, "Todo not found.", 404);
        }
        return ApiResponseClass::sendResponse($todo, "Todo deleted successfully.");
    }
}
