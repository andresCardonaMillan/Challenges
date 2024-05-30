// En el archivo useCollection.js

import { app, db } from './config';
import { collection, addDoc, query, where, getDocs, orderBy, doc, updateDoc, deleteDoc } from 'firebase/firestore';
import { useState } from 'react';

export const useCollection = (table) => {
    const [results, setResults] = useState([]);
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(false);

    const getAll = async (condition) => {
        setResults([])
        let resDoc = null, q = null;
        if(condition && condition.length === 3){
            q = query(collection(db,table), where(condition[0], condition[1], condition[2]));
        } else {
            q = query(collection(db, table));
        }
        resDoc = await getDocs (q)

        resDoc.forEach(doc => {
            setResults(list => [...list, {...doc.data(), id: doc.id}])
        });
    }

    const add = async (doc) => {
        setError(null)
        setIsPending(true)

        try {
            let resDoc = await addDoc(collection(db, table), doc)
            console.log('document ID:' + resDoc.id)
            setIsPending(false)
            return resDoc;
        } catch (err) {
            console.log(err.message)
            setError('could not send the message')
            setIsPending(false)
            return null;
        }
    }

    const update = async (id, newData) => {
        try {
            const docRef = doc(db, table, id);
            await updateDoc(docRef, newData);
            console.log("Document successfully updated!");
        } catch (err) {
            console.error("Error updating document: ", err);
        }
    }

    const remove = async (id) => {
        try {
            const docRef = doc(db, table, id);
            await deleteDoc(docRef);
            console.log("Document successfully deleted!");
        } catch (err) {
            console.error("Error removing document: ", err);
        }
    }

    return {error, isPending, results, add, getAll, update, remove}

}


