<?php

namespace App\Classes;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Support\Facades\Log;
class ApiResponseClass
{
    public static function rollback($e, $message ="Something went wrong! Process not completed"): void
    {
        DB::rollBack();
        self::throw($e, $message);
    }

    public static function throw($e, $message ="Something went wrong! Process not completed"){
        Log::info($e);
        throw new HttpResponseException(response()->json(["message"=> $message], 500));
    }

    public static function sendResponse($result=null , $message="" ,$code=200): \Illuminate\Http\JsonResponse
    {
        $response=[
            'data'    => $result,
            "message" => $message
        ];
        return response()->json($response, $code);
    }

    // not found
    public static function notFound() {
        return self::sendResponse(null, "Not Found", 404);
    }

    // access denied
    public static function accessDenied() {
        return self::sendResponse(null, "Access Denied", 403);
    }
}
