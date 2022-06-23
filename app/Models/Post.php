<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    use HasFactory;

    protected $fillable = ["user_id", "attachment", "content", "like"];

    public function getPostList($limit = 3) {
        $list = Post::orderBy('created_at')
            ->limit($limit)
            ->get();
        return $list;
    }

}
