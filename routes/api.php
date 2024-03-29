<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('post/get/list', [App\Http\Controllers\PostController::class, 'getPostList']);
Route::post('post/create', [App\Http\Controllers\PostController::class, 'store']);
Route::post('post/add/like', [App\Http\Controllers\PostController::class, 'addPostLike']);
Route::post('comment/get/child', [App\Http\Controllers\CommentController::class, 'getChildComments']);
Route::post('comment/get/parent', [App\Http\Controllers\CommentController::class, 'getParentComments']);
Route::post('comment/get/parent/count', [App\Http\Controllers\CommentController::class, 'getParentCommentCount']);
Route::post('comment/add/like', [App\Http\Controllers\CommentController::class, 'addCommentLike']);
Route::post('comment/create', [App\Http\Controllers\CommentController::class, 'store']);

Route::post('post/upload', [App\Http\Controllers\PostController::class, 'updloadFile']);
Route::post('comment/upload', [App\Http\Controllers\CommentController::class, 'updloadFile']);
