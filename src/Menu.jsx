import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";


const Menu = () => {
    return (
        <>
            <div className="container">
                <div className="row listMenu">
                    <div className="col-12">
                        <ul className="listOfMenu">
                            <li>Curriculum</li>
                            <li>Resources</li>
                            <li>Groups</li>
                            <li>Standards</li>

                        </ul>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Menu
