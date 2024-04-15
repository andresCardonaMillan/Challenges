import { useState } from "react";
import '../styles/componentes.css';
import { AddCategory } from "./AddCategory";
import { GifGrid } from "./GifGrid";

export const GiftExpertApp = () => {
    const [categories, setCategories] = useState(['Accion'])

    const onAddCategory = (category) => {
        setCategories(list => [...list, category])
    } 

    return (
        <>
        <div>
            <div className="header">
                <h1>GifExpert</h1>
                <AddCategory onAddCategory={onAddCategory} className="search-input" />
            </div>
            {categories.map(
                (category, key) => <GifGrid category={category} key={key} />
            )}
        </div>
        </>
    );
}