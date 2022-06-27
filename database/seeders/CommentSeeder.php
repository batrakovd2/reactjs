<?php

namespace Database\Seeders;

use Faker\Generator;
use Illuminate\Container\Container;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CommentSeeder extends Seeder
{
    /**
     * The current Faker instance.
     *
     * @var \Faker\Generator
     */
    protected $faker;

    /**
     * Create a new seeder instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->faker = $this->withFaker();
    }
    /**
     * Get a new Faker instance.
     *
     * @return \Faker\Generator
     */
    protected function withFaker()
    {
        return Container::getInstance()->make(Generator::class);
    }
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $comments = [];

        for($i = 1; $i <= 20; $i++) {
            $posts = [
                "post_id" => rand(1, 20),
                "user_id" => rand(1, 10),
                "parent_id" => 0,
                "content" => $this->faker->realText(),
                "attachment" => "/uploads/comments/img". rand(1, 10) .".jpg",
                "like" => rand(1, 100)
            ];
            DB::table('comments')->insert($posts);
        }
    }
}
