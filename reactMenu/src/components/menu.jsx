import React from "react";
import Recipe from "./recipe";

export default function Menu({ recipes = []}){
    return (
        <article className="bg-gray-800 h-screen text-gray-100">
            <header className="justify-center">
                <h1 className="text-4xl bg-gray-400">Delicious Recipes</h1>
            </header>
            <div className="bg-red-500">
                {recipes.map((props, i) => (
                    <Recipe key={i} {...props} />
                ))}
            </div>
        </article>
    );
}
