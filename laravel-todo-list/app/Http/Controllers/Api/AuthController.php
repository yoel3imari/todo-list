<?php

namespace App\Http\Controllers\Api;

use App\Classes\ApiResponseClass;
use App\Http\Controllers\Controller;
use App\Http\Resources\AuthResource;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Symfony\Component\HttpFoundation\Response as ResponseAlias;

class AuthController extends Controller
{
    private string $user_token = "user_token";

    /**
     * @param Request $request
     * @return JsonResponse
     */
    public function login(Request $request): JsonResponse
    {
        $request->validate([
            'email' => 'required|string|email',
            'password' => 'required|string'
        ]);

        $credentials = $request->only(['email', 'password']);

        if (Auth::attempt($credentials)) {
            $user = Auth::user();
            $user->token = $user->createToken($this->user_token)->plainTextToken;
            return ApiResponseClass::sendResponse(
                new AuthResource($user),
                "You logged in!",
            );
        }
        return ApiResponseClass::sendResponse(null, "login failed", ResponseAlias::HTTP_UNAUTHORIZED);
    }

    public function register(Request $request)
    {
        $request->validate([
            "name" => "required|string",
            "email" => "required|string|email|",
            "password" => "required|string",
        ]);

        $exists = User::where('email', $request->email)->exists();

        if ($exists) {
            return ApiResponseClass::sendResponse(null, "Email already exists", ResponseAlias::HTTP_BAD_REQUEST);
        }

        $user = User::create([
            "email" => $request->email,
            "name" => $request->name,
            "password" => Hash::make($request->password)
        ]);

        $user->token = $user->createToken($this->user_token)->plainTextToken;
        return ApiResponseClass::sendResponse(new AuthResource($user), "Account created successfully", ResponseAlias::HTTP_OK);
    }

    public function logout(Request $request): JsonResponse
    {
        Auth::logout();
        $request->session()->invalidate();
        $request->user()->currentAccessToken()->delete();
        return ApiResponseClass::sendResponse(null, "logged out", ResponseAlias::HTTP_OK);
    }

    public function     verify_token(): JsonResponse
    {
        return ApiResponseClass::sendResponse(new AuthResource(Auth::user()), "token verified", 200);
    }
}
