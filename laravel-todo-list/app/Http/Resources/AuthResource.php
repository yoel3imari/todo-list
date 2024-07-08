<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Log;

class AuthResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            "id" => $this->id,
            "name" => $this->name,
            "email" => $this->email,
            "email_verified" => $this->email_verified_at,
            "total_pending" => $this->items->where('completed', false)->count(),
            "created_at" => $this->created_at,
            "updated_at" => $this->updated_at,
            "token" => $this->token
        ];
    }
}
