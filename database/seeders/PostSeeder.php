<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class PostSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $posts = [];

        for($i = 1; $i <= 20; $i++) {
            $posts = [
                "user_id" => rand(1, 10),
                "content" => Str::random(30),
                "attachment" => "/uploads/post/img". $i .".jpg",
                "like" => rand(1, 100)
            ];
            DB::table('posts')->insert($posts);
        }


    }
}
