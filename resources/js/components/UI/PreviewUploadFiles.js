import React from 'react';

const PreviewUploadFiles = ({selectedFile, filePreview, setSelectedFile, setFilePreview}) => {

    const removeImagePreview = (fileItem) => {
        // console.log(selectedFile, filePreview)
        const newSelectFiles = selectedFile.filter(item => item.name !== fileItem.name)
        const newFilePreview = filePreview.filter(item => item.blob !== fileItem.blob)
        console.log(selectedFile, filePreview)
        console.log(newSelectFiles, newFilePreview)
        // setSelectedFile([])
        // setFilePreview([])
        setSelectedFile(newSelectFiles)
        setFilePreview(newFilePreview)
        console.log(selectedFile, filePreview)
    }

    return (
        <div className="filePreview">
            {
                selectedFile && filePreview
                    ? filePreview.map((item) =>
                        <div className='preview_img_wrapper' key={item.blob}>
                            <span className="material-symbols-outlined cursor close-preview-img" onClick={() => removeImagePreview(item)}>
                                close
                            </span>
                            <img  src={item.blob} />
                        </div>
                    )
                    : ''
            }
        </div>
    );
};

export default PreviewUploadFiles;
