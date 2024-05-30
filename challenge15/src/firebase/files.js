import { firebaseStorage } from "./config";
import {ref, uploadBytesResumable, listAll} from 'firebase/storage';

export const upload = (file) => {
    if(!file){
        alert("please choose a file firs!")
    }

    const storageRef = ref(firebaseStorage, `/files/${file.name}`)
    const uploadTask = uploadBytesResumable(storageRef, file);

    return uploadTask
}

export const getAll = async () => {
    const listRef = ref(firebaseStorage, '/files/');
    return listAll(listRef)
}