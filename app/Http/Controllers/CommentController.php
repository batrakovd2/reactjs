<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use Illuminate\Http\Request;

class CommentController extends Controller
{
    public function getChildComments(Request $request) {
        $id = $request->input('params') ?? [];
        return Comment::getChildComments($id['id']);
    }

    public function getParentComments(Request $request) {
        $params = $request->input('params') ?? [];
        return Comment::getParentComments($params['id']);
    }

    public function getParentCommentCount(Request $request) {
        $params = $request->input('params') ?? [];
        return Comment::getParentCommentCount($params['id']);
    }

    public function addCommentLike(Request $request) {
        $id = $request->input('params');
        $comment = Comment::find($id['id']);
        $result = $comment->like;
        $comment->like++;
        $response = $comment->update();
        if($response) $result = $comment->like;
        return $result;
    }

    public function updloadFile(Request $request) {
        $files = $request->all();
        $path = [];
        $year = date('Y');
        $month = date('m');
        $day = date('d');
        if(!empty($files['image']) && is_array($files['image'])) {
            foreach ($files['image'] as $fs) {
                $path[] = $fs->store('public/comment/'.$year.'/'.$month.'/'.$day);
            }
        }

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
//        try{
        $attachments = $request->input('attachment');
//        dd($request);
        $request['attachment'] = !empty($attachments) && is_array($attachments) ? implode(',', $attachments) : '';

        $item = Comment::create($request->all());

        if(!empty($item)) {
            $result = ['status' => 200, 'descr' => 'Пост добавлен', 'post' => $item];
        }
//        } catch (\Exception $e) {
//            Log::error($e);
//        }

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
