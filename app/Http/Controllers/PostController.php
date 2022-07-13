<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class PostController extends Controller
{
    public function getPostList(Request $request) {
        $limit = $request->input('params');
        $posts = Post::getPostList($limit["limit"]);
        return $posts;
    }

    public function addPostLike(Request $request) {
        $id = $request->input('params');
        $post = Post::find($id['id']);
        $result = $post->like;
        $post->like++;
        $response = $post->update();
        if($response) $result = $post->like;
        return $result;
    }

    public function updloadFile(Request $request) {
        $path = $request->file('image')->store('public/post');

        return $path;
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in public.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function store(Request $request)
    {
        $result = [];
        try{
            $item = Post::create($request->all());
            if(!empty($item)) {
                $result = ['status' => 200, 'descr' => 'Пост добавлен', 'post' => $item];
            }
        } catch (\Exception $e) {
            Log::error($e);
        }

        return $result;

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in public.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from public.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

}
