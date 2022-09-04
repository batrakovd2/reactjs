<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    use HasFactory;

    protected $fillable = ['post_id', 'user_id', 'parent_id', 'content', 'attachment', 'like', 'created_at', 'updated_at' , "user_name", "user_logo"];

    public function post() {
        return $this->belongsTo(Post::class);
    }

    public function user() {
        return $this->belongsTo(User::class);
    }

    public function getChildComments($id) {
        $comments = !empty($id)
            ? Comment::where('parent_id', $id)->get()
            : [];
//        foreach ($comments as $key => $comment) {
//            $comments[$key]->user = $comment->user;
//        }
        return $comments;
    }

    public static function getParentComments($postId) {
        $comments = !empty($postId)
            ? Comment::where('post_id', $postId)->orderBy('id', 'desc')->paginate(3)
            : [];
        return $comments;
    }

    public static function getParentCommentCount($postId) {
        $comments = !empty($postId)
            ? Comment::where('post_id', $postId)->count()
            : [];
        return $comments;
    }


}
