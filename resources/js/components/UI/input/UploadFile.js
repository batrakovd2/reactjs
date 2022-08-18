import React, {useEffect, useRef} from 'react';
import heic2any from "heic2any";

const UploadFile = ({selectedFile, setSelectedFile, filePreview, setFilePreview}) => {

    const fileSelectedHandler = event => {
        if (!event.target.files || event.target.files.length === 0) {
            setSelectedFile([])
            return
        }
        const file = event.target.files[0];
        const heic2any = require("heic2any");
        setSelectedFile([...selectedFile, file]);
        setFilePreview([...filePreview, {name: file.name, blob: URL.createObjectURL(file)}])
    }

    const uploadInput = useRef(null);
    const onUploadInput = () => {
        uploadInput.current.click();
    }

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
