import React, {useContext, useState} from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";
import {Context} from "../context";

const AddPostBlock = ({create, posts, setPosts}) => {

    const defaultPost = {
        content: '',
        comments: [],
        like: 0,
        user_id: 1,
        attachment: "/uploads/post/img3.jpg",
        user_name: "Emanuel",
        user_logo: "/uploads/users/img3.jpg"
    }

    const [post, setPost] = useState(defaultPost);

    const clearEditField = () => {
        setPost(defaultPost);
    }

    const [selectedFile, setSelectedFile] = useState(null);

    const fileSelectedHandler = event => {
        console.log(event.target.files[0]);
        setSelectedFile(event.target.files[0]);
    }

    const fileUploadHandler = () => {
        const fd = new FormData();
        fd.append('image', selectedFile, selectedFile.name)
        axios.post('/api/post/upload', fd, {
            onUploadProgress: progressEvent => {
                console.log('upload progress' + Math.round(progressEvent.loaded / progressEvent.total * 100) + '%')
            }
        }).then(res => console.log(res));
    }

    return (
        <div>
            <div className="row">
                <div className="col-md-12">
                    <div className="card card-add-post">
                        <div className="card-header">
                            <img className="img-circle" src="https://picsum.photos/50" alt=""/>
                            <span className="user-name">{post.user_name}</span>
                        </div>

                        <div className="card-body">
                            <textarea className="create-post-area" value={post.content} onChange={e => setPost({...post, content: e.target.value})}>
                                {post.content}
                            </textarea>
                        </div>
                        <div className="card-footer">
                            <span className="material-symbols-outlined">
                                attach_file
                            </span>
                            <input type="file" onChange={fileSelectedHandler}/>
                            <button onClick={fileUploadHandler}>Upload</button>
                            <MyButton onClick={ () => {
                                create(post, posts, setPosts)
                                clearEditField()
                            } }>Отправить</MyButton>
                            <MyInput  placeholder="Город"   />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddPostBlock;
