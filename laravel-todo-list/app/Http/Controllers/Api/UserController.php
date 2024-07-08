<?php

namespace App\Http\Controllers\Api;

use App\Classes\ApiResponseClass;
use App\Http\Controllers\Controller;
use App\Http\Resources\UserCollection;
use App\Http\Resources\UserResource;
use App\Http\Resources\UserResourceCollection;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // todo: check if auth::user is admin before
        // non admin users cannot access these data
        $users = User::paginate();
        return new UserCollection($users);
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
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users,email,' . $id,
        ]);

        if ($validator->fails()) {
            return ApiResponseClass::sendResponse(null, $validator->errors(), 422);
        }

        $user = User::findOrFail($id);
        if (!$user) {
            ApiResponseClass::sendResponse(null, "User not found.", 404);
        }

        $user->name = $request->input('name');
        $user->email = $request->input('email');
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
