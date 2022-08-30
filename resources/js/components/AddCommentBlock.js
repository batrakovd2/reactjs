import React, {useContext, useEffect, useRef, useState} from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";
import {Context} from "../context";
import UploadFile from "./UI/input/UploadFile";
import PreviewUploadFiles from "./UI/PreviewUploadFiles";
import Picker from 'emoji-picker-react';

const AddCommentBlock = ({create, posts, setPosts}) => {

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
                    <div className="card card-add-comment">
                        <div className="card-header">
                            <img className="img-circle" src="https://picsum.photos/50" alt=""/>
                            <span className="user-name">{post.user_name}</span>
                        </div>

                        <div className="card-body">

                            <span className="material-symbols-outlined emoji-btn" onClick={() => setShowEmoji(!isShowEmoji)}>
                                mood
                                <div ref={rootEl} className={isShowEmoji ? 'emoji-picker-wrapper active' : 'emoji-picker-wrapper'}>
                                    <Picker onEmojiClick={onEmojiClick} disableSearchBar={true} />
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

export default AddCommentBlock;
