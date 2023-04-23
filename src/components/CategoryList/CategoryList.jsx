import { NavLink } from "react-router-dom";
import "./CategoryList.css";
import { useContext, useEffect, useState } from "react";
import { getDocs } from "firebase/firestore";
import { categoryCollection } from "../../firebase";
import { AppContext } from "../../App";

export default function CategoryList() {
    const { categories } = useContext(AppContext);
    categories.sort((a, b) => b.weight - a.weight)
    const output = categories.sort((a, b) => a.weight - b.weight).map(category => (
        <li key={category.id}>
             <img src={category.picture} alt={category.name} />
            <NavLink to={'/category/' + category.path}>
                {category.name}
            </NavLink>
        </li>
    ));

    return (
        <div className="CategoryList">
            <ul>

                {output}
            </ul>
        </div>
    )
}