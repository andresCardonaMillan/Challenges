import React, { useEffect } from "react";
import { useUploadHook } from "../hooks/useUploadHook";
import "../styles/upload.css"; 

export const Upload = () => {
    const {
        files,
        percent,
        handleChange,
        handleUpload,
        handleGetAll,
        handleDelete 
    } = useUploadHook();

    useEffect(() => {
        handleGetAll();
    }, []);

    return (
        <div className="container">
            <input type="file" onChange={handleChange} accept="" />
            <button onClick={() => handleUpload()}>Upload to Firebase</button>
            <p className="progress">{percent} % done</p>

            <div className="image-list">
                {
                    files.map((item, key) => (
                        <div key={key} className="image-item">
                            <img src={item.url} alt={item.name} />
                            <button onClick={() => handleDelete(item.name)}>X</button>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

