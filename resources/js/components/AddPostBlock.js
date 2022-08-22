import React, {useContext, useEffect, useRef, useState} from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";
import {Context} from "../context";
import UploadFile from "./UI/input/UploadFile";
import PreviewUploadFiles from "./UI/PreviewUploadFiles";
import Picker from 'emoji-picker-react';

const AddPostBlock = ({create, posts, setPosts}) => {

    const defaultPost = {
        content: '',
        comments: [],
        like: 0,
        user_id: 1,
        attachment: "",
        user_name: "Emanuel",
        user_logo: "/uploads/users/img3.jpg"
    }

    const [post, setPost] = useState(defaultPost);
    const [selectedFile, setSelectedFile] = useState([]);
    const [filePreview, setFilePreview] = useState([]);
    const [chosenEmoji, setChosenEmoji] = useState(null);
    const [position, setPosition] = useState(0);
    const [isShowEmoji, setShowEmoji] = useState(false);

    document.addEventListener("click", function(event) {
        const classTarget = event.target.className;
        if (!classTarget.includes('emoji-btn')) {
            setShowEmoji(false)
        }
    });

    const onEmojiClick = (event, emojiObject) => {
        setChosenEmoji(emojiObject);
    }

    const onChangeText = (e) => {
        setPosition(e.target.selectionStart)
        setPost({...post, content: e.target.value})
    }

    const onEmojiBtnClick = (e) => {
        setShowEmoji(!isShowEmoji)
    }

    const clearEditField = () => {
        setPost(defaultPost);
        setSelectedFile([]);
        setFilePreview([]);
    }

    useEffect(() => {
        if(chosenEmoji) {
            let newContent = post.content.substr(0, position) + chosenEmoji.emoji + post.content.substr(position, post.content.length)
            setPosition(position + chosenEmoji.emoji.length)
            setPost({...post, content: newContent})
        }
    }, [chosenEmoji])

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

                            <span className="material-symbols-outlined emoji-btn" onClick={() => setShowEmoji(!isShowEmoji)}>
                                mood
                                <div className={isShowEmoji ? 'emoji-picker-wrapper active' : 'emoji-picker-wrapper'}>
                                    <Picker onEmojiClick={onEmojiClick} />
                                </div>
                            </span>
                            <textarea className="create-post-area" value={post.content} onChange={onChangeText} onClick={e => {setPosition(e.target.selectionStart)}}>
                                {post.content}
                            </textarea>
                        </div>
                        <div className="card-footer">
                            <div className="control-space-wrapper">
                                <UploadFile selectedFile={selectedFile} setSelectedFile={setSelectedFile} filePreview={filePreview} setFilePreview={setFilePreview}/>

                                <MyButton onClick={ () => {
                                    // selectedFile ? fileUploadHandler(selectedFile) : ''
                                    create(post, posts, setPosts, selectedFile, setFilePreview)
                                    clearEditField()
                                    }
                                }>Отправить</MyButton>
                            </div>
                            <PreviewUploadFiles selectedFile={selectedFile} filePreview={filePreview} setSelectedFile={setSelectedFile} setFilePreview={setFilePreview} />

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddPostBlock;
