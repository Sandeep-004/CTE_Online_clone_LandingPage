import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Flogo from "./Images/Flogo.png";
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';

const UpperFooter = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="row footer_upp">
                    <div className="col-2">
                        <img alt="bottomLogo" src={Flogo} />
                    </div>
                    <div className="col-2">
                        <div className="curriculum">
                            <h4>curriculum</h4>
                        </div>
                        <div className="listItem">
                            <ul className="listItem_UL">
                                <li className="listItem_LI">Projects</li>
                                <li className="listItem_LI">Lesson Plans</li>
                                <li className="listItem_LI">Outlines</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-2">
                        <div className="curriculum">
                            <h4>lorem ipsum</h4>
                        </div>
                        <div className="listItem">
                            <ul className="listItem_UL">
                                <li className="listItem_LI">Lorem ipsum</li>
                                <li className="listItem_LI">Lorem</li>
                            </ul>
                        </div>
                    </div>


                    <div className="col-2">
                        <div className="curriculum">
                            <h4>lorem ipsum</h4>
                        </div>
                        <div className="listItem">
                            <ul className="listItem_UL">
                                <li className="listItem_LI">Lorem ipsum</li>
                                <li className="listItem_LI">Lorem</li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-2">
                        <div className="curriculum">
                            <h4>lorem ipsum</h4>
                        </div>
                        <div className="listItem">
                            <ul className="listItem_UL">
                                <li className="listItem_LI">Lorem ipsum</li>
                                <li className="listItem_LI">Lorem</li>
                                <li className="listItem_LI">Lorem ipsum</li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-2 icons_Div">
                        <span><FacebookIcon className="icon" /></span>
                        <span><TwitterIcon className="icon" /></span>
                    </div>
                </div>
            </div>   
        </>
    )
}

export default UpperFooter;
