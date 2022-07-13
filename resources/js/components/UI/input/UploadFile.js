import React, {useRef} from 'react';

const UploadFile = ({setSelectedFile}) => {

    const fileSelectedHandler = event => {
        setSelectedFile(event.target.files[0]);
    }

    const uploadInput = useRef(null);
    const onUploadInput = () => {
        uploadInput.current.click();
    };

    return (
        <div>
            <span className="material-symbols-outlined cursor" onClick={onUploadInput}>
                attach_file
            </span>
            <input style={{display:'none'}}
                   type="file"
                   onChange={fileSelectedHandler}
                   ref={uploadInput}
            />
        </div>
    );
};

export default UploadFile;
