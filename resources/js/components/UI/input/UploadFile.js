import React, {useEffect, useRef} from 'react';
import heic2any from "heic2any";

const UploadFile = ({selectedFile, setSelectedFile, filePreview, setFilePreview}) => {

    const fileSelectedHandler = event => {
        if (!event.target.files || event.target.files.length === 0) {
            setSelectedFile([])
            return
        }
        const file = event.target.files[0];
        console.log(file)
        if(!file.type) {
            //Формат Iphone heic
            if(file.name.includes('.heic') || file.name.includes('.heif')) {
                const heic2any = require("heic2any");
                heic2any({
                    blob: file,
                    toType: 'image/jpeg',
                    quality: 0.9
                }).then(blob => {
                    setSelectedFile([...selectedFile, blob]);
                    setFilePreview([...filePreview, {name: file.name, blob: URL.createObjectURL(blob)}])
                })
            }
        } else {
            setSelectedFile([...selectedFile, file]);
            setFilePreview([...filePreview, {name: file.name, blob: URL.createObjectURL(file)}])
        }

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
