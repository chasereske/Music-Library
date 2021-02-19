import React from 'react'; 
import './navbar.css';

function Navbar(props){
    return (
        <div className="row row-spacer">
            <div className="col-md-12" style={{padding:0}}>
                <div className="navbar-bar">
                    <h1>Reske's Music Library</h1>
                </div>
            </div>
        </div>
    );
}

export default Navbar;