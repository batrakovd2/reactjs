<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    use HasFactory;

    protected $fillable = ["user_id", "attachment", "content", "like"];

    public function user() {
        return $this->belongsTo(User::class);
    }

    public function getPostList($limit = 3) {
        $list = Post::orderBy('id', 'desc')->paginate($limit);
        foreach ($list as $key=>$post) {
            $list[$key]->user = $post->user;
        }
        return $list;
    }

}
