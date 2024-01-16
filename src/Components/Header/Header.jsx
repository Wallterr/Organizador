import "./index.scss";

import React from "react";

const Header = () => {
    return (
        <section className="Header">
            <div className="Header-itens">
                <h1 id="organization">Organização</h1>
                <h1 id="todo">Tarefas</h1>
            </div>
        </section>
    )
};

export default Header;