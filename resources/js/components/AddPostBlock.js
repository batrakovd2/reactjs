import React, {useState} from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";

const AddPostBlock = ({create}) => {

    const [post, setPost] = useState({
        content: '',
        comments: [],
        like: 0,
        user_id: 1,
        user: {
            last_name: "Stamm",
            logo: "/uploads/users/img3.jpg",
            name: "Emanuel"
        }
    });

    const addNewPost = (e) => {
        e.preventDefault();
        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost);
         // setPost({
         //     content: '',
         //     comments: [],
         //     like: 0,
         //     user_id: 1,
         // })
    }

    return (
        <div>
            <div className="row">
                <div className="col-md-12">
                    <div className="card card-add-post">
                        <div className="card-header">
                            <img className="img-circle" src="https://picsum.photos/50" alt=""/>
                            <span className="user-name">Юзеров Юзер</span>
                        </div>

                        <div className="card-body">
                            <div className="create-post-area" contentEditable="true" data-placeholder="Введите текст"
                                 role="textbox" aria-multiline="true" data-medium-editor-editor-index="2"
                                 data-medium-focused="true"
                                 onKeyUp={e => {
                                         setPost({...post, content: e.target.outerText} )
                                     }
                                 }
                            >
                            </div>
                        </div>
                        <div className="card-footer">
                            <MyButton onClick={addNewPost}>Отправить</MyButton>
                            <MyInput  placeholder="Город"   />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddPostBlock;
