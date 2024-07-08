<?php

namespace Database\Factories;

use App\Models\Todo;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Item>
 */
class ItemFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            "content" => $this->faker->paragraph(),
            "deadline" => $this->faker->dateTime(),
            "completed" => $this->faker->boolean(),
            "todo_id" => Todo::inRandomOrder()->first()->id,
            "created_at" => $this->faker->dateTime(),
            "updated_at" => $this->faker->dateTime()
        ];
    }
}
