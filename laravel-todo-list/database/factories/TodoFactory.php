<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Todo>
 */
class TodoFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            "title" => $this->faker->sentence(),
            "user_id" => User::inRandomOrder()->first()->id,
            "created_at" => $this->faker->dateTimeBetween('-3 months', 'now'),
            "updated_at" => $this->faker->dateTimeBetween('-3 months', 'now')
        ];
    }
}
