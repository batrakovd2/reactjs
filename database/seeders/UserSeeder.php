<?php

namespace Database\Seeders;

use Faker\Generator;
use Illuminate\Container\Container;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class UserSeeder extends Seeder
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
        $users = [];

        for($i = 1; $i <= 20; $i++) {
            $posts = [
                "last_name" => $this->faker->lastName(),
                "name" => $this->faker->firstName(),
                "password" => Str::random(30),
                "email" => Str::random(30).'@mail.ru',
                "logo" => "/uploads/users/img". $i .".jpg"
            ];
            DB::table('users')->insert($posts);
        }
    }
}
