import React, { useState, useEffect } from 'react';
import { useCollection } from './firebase/firestore';
import './styles/crud.css'

export const Crud = () => {
  const [user, setUser] = useState({ name: '' });
  const [editingId, setEditingId] = useState(null);
  const [editingName, setEditingName] = useState('');
  const { add, getAll, isPending, results, update, remove } = useCollection("users");

  const getAllDocs = async () => {
    await getAll([]);
  };

  const save = async () => {
    await add(user);
    await getAllDocs();
    setUser({ name: '' }); 
  };

  const startEdit = (id, currentName) => {
    setEditingId(id);
    setEditingName(currentName);
  };

  const handleUpdate = async () => {
    if (editingId) {
      await update(editingId, { name: editingName });
      await getAllDocs();
      setEditingId(null); 
      setEditingName(''); 
    }
  };

  const handleRemove = async (id) => {
    await remove(id);
    await getAllDocs();
  };

  const handleChange = (event) => {
    setUser({ name: event.target.value });
  };

  const handleEditChange = (event) => {
    setEditingName(event.target.value);
  };

  useEffect(() => {
    getAllDocs();
  }, []);

  return (
    <>
      <div className="crud-container">
      <input type='text' onChange={handleChange} value={user.name} placeholder="Enter name" />
      <button type='button' onClick={save}>Guardar</button>
      {isPending && <span>Saving...</span>}
      <ul>
        {results.map(item => (
          <li key={item.id}>
            {editingId === item.id ? (
              <>
                <input
                  type='text'
                  value={editingName}
                  onChange={handleEditChange}
                />
                <div className="buttons">
                  <button onClick={handleUpdate}>
                    Guardar cambios
                  </button>
                  <button onClick={() => setEditingId(null)}>
                    Cancelar
                  </button>
                </div>
              </>
            ) : (
              <>
                {item.name}
                <div className="buttons">
                  <button onClick={() => startEdit(item.id, item.name)}>
                    Editar
                  </button>
                  <button onClick={() => handleRemove(item.id)}>
                    Eliminar
                  </button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
    </>
  );
};

