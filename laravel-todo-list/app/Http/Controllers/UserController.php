<?php

namespace App\Http\Controllers;

use App\Classes\ApiResponseClass;
use App\Http\Resources\UserResource;
use Illuminate\Http\Request;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $users = User::paginate(10);
        return ApiResponseClass::sendResponse(UserResource::collection($users), "users retrieved successfully.", 200);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $user = User::findOrFail($id);
        if (!$user) {
            ApiResponseClass::sendResponse(null, "User not found.", 404);
        }

        return ApiResponseClass::sendResponse($user, "User retrieved successfully.", 200);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $user = User::findOrFail($id);
        if (!$user) {
            ApiResponseClass::sendResponse(null, "User not found.", 404);
        }

        $user->update($request->all());
        return ApiResponseClass::sendResponse($user, "User updated successfully.", 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $user = User::findOrFail($id);

        if (!$user) {
            ApiResponseClass::sendResponse(null, "User not found.", 404);
        }

        $user->delete();
        return ApiResponseClass::sendResponse(null, "User deleted successfully.", 200);
    }
}
