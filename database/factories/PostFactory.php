<?php

namespace Database\Factories;

use App\Models\Post;
use Illuminate\Database\Eloquent\Factories\Factory;

class PostFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {

        return [
            'user_id' => rand(1,10),
            'attacnment' => "",
            'content' => fake()->paragraph(),
            'like' => rand(1,10)
        ];
    }
}
