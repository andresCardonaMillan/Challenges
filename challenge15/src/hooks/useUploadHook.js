import { useState } from "react";
import { getAll, upload } from "../firebase/files";
import { getDownloadURL, ref, deleteObject } from "firebase/storage";
import { firebaseStorage } from "../firebase/config"; 

export const useUploadHook = () => {
    const [files, setFiles] = useState([]);
    const [file, setFile] = useState("");
    const [percent, setPercent] = useState(0);

    const handleChange = (event) => {
        setFile(event.target.files[0]);
    }

    const handleUpload = () => {
        const uploadTask = upload(file);
        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const percent = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                setPercent(percent);
            },
            (err) => console.log(err),
            async () => {
                const url = await getDownloadURL(uploadTask.snapshot.ref);
                setFiles(list => [...list, { name: file.name, url }]);
            }
        );
    }

    const handleGetAll = async () => {
        const { items } = await getAll();
        items.forEach(async (itemRef) => {
            const url = await getDownloadURL(itemRef);
            setFiles(list => [...list, { name: itemRef.name, url }]);
        });
    }

    const handleDelete = async (fileName) => {
        const fileRef = ref(firebaseStorage, `files/${fileName}`);
        deleteObject(fileRef)
            .then(() => {
                console.log('Imagen eliminada exitosamente');
                setFiles(files.filter(file => file.name !== fileName));
            })
            .catch((error) => {
                console.error('Error eliminando la imagen:', error);
            });
    }

    return { files, percent, handleChange, handleUpload, handleGetAll, handleDelete };
}


