import React, {useContext, useRef, useState} from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";
import {Context} from "../context";
import UploadFile from "./UI/input/UploadFile";

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
    const [selectedFile, setSelectedFile] = useState([]);
    const [filePreview, setFilePreview] = useState([]);
    const clearEditField = () => {
        setPost(defaultPost);
        setSelectedFile([]);
    }
    console.log(filePreview)


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
                            <div className="control-space-wrapper">
                                <UploadFile selectedFile={selectedFile} setSelectedFile={setSelectedFile} filePreview={filePreview} setFilePreview={setFilePreview}/>

                                <MyButton onClick={ () => {
                                    // selectedFile ? fileUploadHandler(selectedFile) : ''
                                    create(post, posts, setPosts, selectedFile)
                                    clearEditField()
                                } }>Отправить</MyButton>
                            </div>
                            <div className="filePreview">
                                {
                                    selectedFile && filePreview
                                        ? filePreview.map((item) => <img key={item} src={item} />)
                                        : ''
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddPostBlock;
