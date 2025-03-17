import React from "react";

export default function Instructions({ title = "untitled", steps = []}){
    return(
        <section className="bg-yellow-500 text-purple-700 font-bold">
            <h2 className="">{title}</h2>
            {steps.map((s, i) => (
                <p key={i}>{s}</p>
            ))}
        </section>
    );
}