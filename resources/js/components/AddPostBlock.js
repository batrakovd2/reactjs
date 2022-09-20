import React, {useContext, useEffect, useRef, useState} from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";
import {Context} from "../context";
import UploadFile from "./UI/input/UploadFile";
import PreviewUploadFiles from "./UI/PreviewUploadFiles";
import Picker from 'emoji-picker-react';
import {useDispatch} from "react-redux";
import {createPostNew} from "../API/PostService";

const AddPostBlock = ({create, posts, setPosts}) => {

    const dispatch = useDispatch();
    const defaultPost = {
        content: '',
        comments: [],
        like: 0,
        user_id: 1,
        attachment: "",
        user_name: "Emanuel",
        user_logo: "/uploads/users/img3.jpg"
    }
    // const {createPost} = useContext(Context);
    const createPost = (newPost, selectedFile, setFilePreview) => {
        createPostNew(newPost, dispatch)
    }

    const [newPost, setNewPost] = useState(defaultPost);
    const [selectedFile, setSelectedFile] = useState([]);
    const [filePreview, setFilePreview] = useState([]);
    const [chosenEmoji, setChosenEmoji] = useState(null);
    const [position, setPosition] = useState(0);
    const [isShowEmoji, setShowEmoji] = useState(false);

    const onEmojiClick = (event, emojiObject) => {
        setChosenEmoji(emojiObject);
    }

    const onChangeText = (e) => {
        setPosition(e.target.selectionStart)
        setNewPost({...newPost, content: e.target.value})
    }

    const onEmojiBtnClick = (e) => {
        setShowEmoji(!isShowEmoji)
    }

    const clearEditField = () => {
        setNewPost(defaultPost);
        setSelectedFile([]);
        setFilePreview([]);
    }

    useEffect(() => {
        if(chosenEmoji) {
            let newContent = newPost.content.substr(0, position) + chosenEmoji.emoji + newPost.content.substr(position, newPost.content.length)
            setPosition(position + chosenEmoji.emoji.length)
            setNewPost({...newPost, content: newContent})
        }
    }, [chosenEmoji])

    const rootEl = useRef(null);

    // useEffect(() => {
    //     const onClick = e => rootEl.current.contains(e.target) || console.log('клик вне компонента');
    //     document.addEventListener('click', onClick);
    //     return () => document.removeEventListener('click', onClick);
    // }, []);

    return (
        <div>
            <div className="row">
                <div className="col-md-12">
                    <div className="card card-add-post">
                        <div className="card-header">
                            <img className="img-circle" src="/uploads/users/img3.jpg" alt=""/>
                            <span className="user-name">{newPost.user_name}</span>
                        </div>
                        <div className="card-body">
                            <span className="material-symbols-outlined emoji-btn" onClick={() => setShowEmoji(!isShowEmoji)}>
                                mood
                                <div ref={rootEl} className={isShowEmoji ? 'emoji-picker-wrapper active' : 'emoji-picker-wrapper'}>
                                    <Picker onEmojiClick={onEmojiClick} disableSearchBar={true} />
                                </div>
                            </span>
                            <textarea className="create-post-area" value={newPost.content} onChange={onChangeText} onClick={e => {setPosition(e.target.selectionStart)}}>
                                {newPost.content}
                            </textarea>
                        </div>
                        <div className="card-footer">
                            <div className="control-space-wrapper">
                                <UploadFile selectedFile={selectedFile} setSelectedFile={setSelectedFile} filePreview={filePreview} setFilePreview={setFilePreview}/>

                                <MyButton onClick={ () => {
                                    // selectedFile ? fileUploadHandler(selectedFile) : ''
                                    createPost(newPost, selectedFile, setFilePreview)
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
