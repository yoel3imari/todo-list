<?php

namespace App\Http\Controllers;

use App\Classes\ApiResponseClass;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Http;
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
            $token = $user->createToken($this->user_token)->accessToken;

            return ApiResponseClass::sendResponse(
                $user,
                "You logged in!",
            );
        }

        return ApiResponseClass::sendResponse(null, "login failed", ResponseAlias::HTTP_UNAUTHORIZED);
    }

    public function register(Request $request)
    {
        $request->validate([
            "email" => "required|string|email|",
            "password" => "required|string",
            "name" => "required|string"
        ]);


        $user = User::create([
            "email" => $request->email,
            "name" => $request->name,
            "password" => Hash::make($request->password)
        ]);

        $token = $user->createToken($this->user_token)->accessToken;

        return ApiResponseClass::sendResponse(null, "login failed", ResponseAlias::HTTP_UNAUTHORIZED);
    }

    public function logout(Request $request)
    {
        Auth::logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();
        return ApiResponseClass::sendResponse(null, "logged out", ResponseAlias::HTTP_OK);
    }

    public function verify_token(Request $request)
    {
        return ApiResponseClass::sendResponse(Auth::user(), "token verified", 200);
    }
}
