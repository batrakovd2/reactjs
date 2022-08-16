import React from 'react';

const PreviewUploadFiles = ({selectedFile, filePreview, setSelectedFile, setFilePreview}) => {

    const removeImagePreview = (fileItem) => {
        const newSelectFiles = selectedFile.filter(item => item.name !== fileItem.name)
        const newFilePreview = filePreview.filter(item => item.blob !== fileItem.blob)
        setFilePreview(newFilePreview)
        setSelectedFile(newSelectFiles)
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
