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

    public function comments() {
        return $this->hasMany(Comment::class);
    }

    public function getPostList($limit = 3) {
        $list = Post::orderBy('id', 'desc')->paginate($limit);
        foreach ($list as $key=>$post) {
            $list[$key]->user = $post->user;
            $list[$key]->comments = $post->comments()->where("parent_id", 0)->orderBy('id')->limit(3)->get();
            $list[$key]->commentCount = $post->comments()->count();
            if(!empty($list[$key]->comments)) {
                foreach ($list[$key]->comments as $keyCom => $comment) {
                    $list[$key]->comments[$keyCom]->user = $comment->user;
                }
            }
        }



        return $list;
    }

}
