import React from 'react';

const Header = (props) => {
    return <header className="nav-header">
        <h1 className="header title">"You added {props.completed} to your cart</h1>
    </header>
};

export default Header;


