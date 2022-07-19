import React from 'react';

const PreviewUploadFiles = ({selectedFile, filePreview, setSelectedFile, setFilePreview}) => {

    const removeImagePreview = (selectItem) => {
        const newSelectFiles = selectedFile.filter(item => item.name !== selectItem.name)
        const newFilePreview = filePreview.filter(item => item.blob !== selectItem.blob)
        console.log(selectedFile, filePreview)
        console.log(newSelectFiles, newFilePreview)
        setSelectedFile(newSelectFiles)
        setFilePreview(newFilePreview)
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
