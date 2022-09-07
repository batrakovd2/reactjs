import React, {useContext, useEffect, useRef, useState} from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";
import {Context} from "../context";
import UploadFile from "./UI/input/UploadFile";
import PreviewUploadFiles from "./UI/PreviewUploadFiles";
import Picker from 'emoji-picker-react';

const AddCommentBlock = ({create, post, comments, setComments, isChild = false, setShowAddChildComment}) => {

    const defaultComment = {
        content: '',
        like: 0,
        post_id: post.id,
        user_id: 1,
        parent_id: isChild ? comments[0].id : 0,
        child_count: 0,
        attachment: "",
        user_name: "Emanuel",
        user_logo: "/uploads/users/img3.jpg",
        child: []
    }
    const [comment, setComment] = useState(defaultComment);
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
        setComment({...comment, content: e.target.value})
    }

    const onEmojiBtnClick = (e) => {
        setShowEmoji(!isShowEmoji)
    }

    const clearEditField = () => {
        setComment(defaultComment);
        setSelectedFile([]);
        setFilePreview([]);
    }

    useEffect(() => {
        if(chosenEmoji) {
            let newContent = comment.content.substr(0, position) + chosenEmoji.emoji + comment.content.substr(position, comment.content.length)
            setPosition(position + chosenEmoji.emoji.length)
            setComment({...comment, content: newContent})
        }
    }, [chosenEmoji])

    return (
        <div>
            <div className="row">
                <div className="col-md-12">
                    <div className="card card-add-comment">
                        <div className="card-header">
                            <img className="img-circle" src="/uploads/users/img3.jpg" alt=""/>
                            <span className="user-name">{post.user_name}</span>
                        </div>

                        <div className="card-body">

                            <span className="material-symbols-outlined emoji-btn" onClick={() => setShowEmoji(!isShowEmoji)}>
                                mood
                                <div className={isShowEmoji ? 'emoji-picker-wrapper active' : 'emoji-picker-wrapper'}>
                                    <Picker onEmojiClick={onEmojiClick} disableSearchBar={true} />
                                </div>
                            </span>
                            <textarea className="create-post-area" value={comment.content} onChange={onChangeText} onClick={e => {setPosition(e.target.selectionStart)}}>
                                {comment.content}
                            </textarea>
                        </div>
                        <div className="card-footer">
                            <div className="control-space-wrapper">
                                <UploadFile selectedFile={selectedFile} setSelectedFile={setSelectedFile} filePreview={filePreview} setFilePreview={setFilePreview}/>

                                <MyButton onClick={ () => {
                                        // selectedFile ? fileUploadHandler(selectedFile) : ''
                                        create(post, comment, comments, setComments, selectedFile, setFilePreview, isChild)
                                        setShowAddChildComment(false)
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
