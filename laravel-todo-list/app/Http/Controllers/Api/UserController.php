<?php

namespace App\Http\Controllers\Api;

use App\Classes\ApiResponseClass;
use App\Http\Controllers\Controller;
use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // todo: check if auth::user is admin before
        // non admin users cannot access these data
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

        return ApiResponseClass::sendResponse(new UserResource($user), "User retrieved successfully.", 200);
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
        $user->save();
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
