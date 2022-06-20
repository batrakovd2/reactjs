import React from 'react';

const AddPostBlock = () => {
    return (
        <div>
            <div className="row">
                <div className="col-md-12">
                    <div className="card card-add-post">
                        <div className="card-header">
                            <img className="img-circle" src="https://picsum.photos/50" alt=""/>
                            <span>Юзеров Юзер</span>

                        </div>
                        <div className="card-body">
                            <div className="create-post-area" contentEditable="true" data-placeholder="Введите текст"
                                 role="textbox" aria-multiline="true" data-medium-editor-editor-index="2"
                                 data-medium-focused="true">
                            </div>
                        </div>
                        <div className="card-footer">
                            <div className="btn btn-primary">Отправить</div>
                            <div className="col-3">
                                <div id="type_code">
                                    <div className="input">
                                        <input className="form-control" name="city" type="text" placeholder="Город"  autoComplete="off" data-kladr-type="city" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddPostBlock;
