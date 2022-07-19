import React, {useEffect, useRef} from 'react';

const UploadFile = ({selectedFile, setSelectedFile, filePreview, setFilePreview}) => {

    const fileSelectedHandler = event => {
        const file = event.target.files[0];
        setSelectedFile([...selectedFile, file]);
        onSelectFile(event);

    }

    const onSelectFile = e => {
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedFile([])
            return
        }

        setSelectedFile([...selectedFile, e.target.files[0]])
    }

    useEffect(() => {
        if (!selectedFile) {
            setFilePreview([{name: "", blob: ""}])
            return
        }

        const objectUrl = selectedFile.map((item) => {
            setFilePreview([...filePreview, {name: item.name, blob: URL.createObjectURL(item)}])
            return URL.createObjectURL(item)
        })
        // console.log(objectUrl)

        // free memory when ever this component is unmounted
        return () => URL.revokeObjectURL(objectUrl)
    }, [selectedFile])

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
