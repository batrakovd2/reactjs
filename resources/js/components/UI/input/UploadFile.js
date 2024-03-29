import React, {useEffect, useRef, useState} from 'react';
import heic2any from "heic2any";
import LoaderMini from "../loader/LoaderMini";

const UploadFile = ({selectedFile, setSelectedFile, filePreview, setFilePreview}) => {

    const [isLoading, setIsLoading] = useState(false);

    const fileSelectedHandler = event => {
        if (!event.target.files || event.target.files.length === 0) {
            setSelectedFile([])
            return
        }
        const file = event.target.files[0];
        setIsLoading(true);
        if(!file.type) {
            //Формат Iphone heic
            if(file.name.includes('.heic') || file.name.includes('.heif')
                || file.name.includes('.HEIF') || file.name.includes('.HEIC')) {
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
            if(checkType) {
                setSelectedFile([...selectedFile, file]);
                setFilePreview([...filePreview, {name: file.name, blob: URL.createObjectURL(file)}])
            }
        }
    }

    const checkType = (file) => {
        let check = false;
        if(file.type) {
            if(
                file.type.inludes('image/jpg') ||
                file.type.inludes('image/jpeg') ||
                file.type.inludes('image/png') ||
                file.type.inludes('image/gif') ||
                file.type.inludes('image/svg') ||
                file.type.inludes('image/webp')
            ) {
                check = true;
            }
        }
        return check;
    }

    useEffect(() => {
        setIsLoading(false);
    }, [filePreview])

    const uploadInput = useRef(null);
    const onUploadInput = () => {
        uploadInput.current.click();
    }

    return (
        <div>
            { isLoading ? <LoaderMini/> :
                <span className="material-symbols-outlined cursor" onClick={onUploadInput}>
                    attach_file
                </span>
            }
            <input style={{display:'none'}}
                   type="file"
                   onChange={fileSelectedHandler}
                   ref={uploadInput}
            />
        </div>
    );
};

export default UploadFile;
