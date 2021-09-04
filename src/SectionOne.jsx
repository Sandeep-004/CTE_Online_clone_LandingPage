import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import SearchIcon from '@material-ui/icons/Search';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import UpperFooter from "./UpperFooter";
import LowerFooter from './LowerFooter';


const SectionOne = () => {
    return (
        <>
            <div className="container-fluid top_One">
                <div className="row">
                    <div className="col-4">
                        <div className="details">
                            <div className="profile_Pic">
                                <img className="profile_Img"  alt="userImg" src="https://joeschmoe.io/api/v1/$jonny2" />
                            </div>

                        <div className="user_Detail">
                            <h2>Welcome,</h2>
                            <h4>Sandeep Sharma</h4>
                        </div>
                        </div>
                    </div>

                    <div className="col-8">
                    <div className="card community_card">
                      <h5 className="card-header heading">community callout</h5>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-2 cardBodyImg">
                                    <img className="profile_CardImg"  alt="userImg" src="https://joeschmoe.io/api/v1/$jonny" />
                                </div>

                                <div className="col-10">
                                    <h5 className="card-title">Callifornia Department of Ed</h5>
                                    <p className="card-text">Don't forget to submit your Federal Student Grant applications.</p>
                                </div>

                            </div>               
                        </div>
                    </div>
                 </div>

               </div>

               <div className="row"> 
                <div className="col-4">
                <div className="card group_Card">
                    <div className="content_card"> 
                        <h5 className="card-header">my groups</h5>
                        <button className="btn btn-primary">View All</button>
                    </div> 
                        <div className="card-body">
                        
                    <div className="usersDataImg">
                        <div className="col-2 cardBodyImg">
                                <img className="profile_CardImg"  alt="userImg" src="https://joeschmoe.io/api/v1/$jonny1" />
                        </div>
                        
                        <div className="col-2 cardBodyImg">
                                <img className="profile_CardImg"  alt="userImg" src="https://joeschmoe.io/api/v1/$jonny2" />
                        </div>

                        <div className="col-2 cardBodyImg">
                               <img className="profile_CardImg"  alt="userImg" src="https://joeschmoe.io/api/v1/$jonny3" />
                        </div>
                        
                        <div className="col-2 cardBodyImg">
                                <img className="profile_CardImg"  alt="userImg" src="https://joeschmoe.io/api/v1/$jonny4" />
                        </div>
                    </div>
                
                    <div className="btnForGroups">
                        <button className="btn_groups"><SearchIcon/> FIND GROUPS </button>
                    </div>
                 </div>
            </div>     
        </div>

        <div className="col-8">
                    <div className="card community_card">
                      <h5 className="card-header">News & Events</h5>
                        <div className="card-body">
                            <div className="row">

                                <div className="col-12">
                                    <h5 className="card-title">April</h5>
                                    <p className="card-text">-April for <span style={{color: '#81B214'}}>CTE Online Curriculum Writing Institute</span> by April 19th.</p>
                                    
                                    <h5 className="card-title">May</h5>
                                    <p className="card-text">-<span style={{color: '#81B214'}}>CTE Online Curriculum Writing Institute</span> applications due on May 2019</p>
                                </div>

                            </div>               
                        </div>
                    </div>
                 </div>

               </div>

               <div className="endLine">
            <div className="ending"></div>
        </div>

        <div className="row"> 
                <div className="col-4">
                <div className="card group_Commu_Card ">
                    <div className="content_card"> 
                        <h5 className="card-header">COMMUNICATION</h5>
                        <button className="btn btn-primary">View All</button>
                    </div> 
                        <div className="card-body">
                        
                    <div className="usersDataImg_Comm">
                        <div className="col-2 cardBodyImg_Commu">
                                <img className="profile_CardImg"  alt="userImg" src="https://joeschmoe.io/api/v1/$jonny1" />
                        </div>
                        
                        <div className="profileDetail">
                        <h6>Amanda Samson</h6><p>posted in <br /> <span style={{color: '#81B214'}}>Woodland | USD CTE</span></p>
                        <p>1hr</p>
                        </div><br />
                    </div>
                    
                    <div className="usersDataImg_Comm">
                        <div className="col-2 cardBodyImg_Commu">
                                <img className="profile_CardImg"  alt="userImg" src="https://joeschmoe.io/api/v1/$jonny4" />
                        </div>
                        
                        <div className="profileDetail">
                        <h6>Frank Quinn</h6><p>has requested to join <br /> <span style={{color: '#81B214'}}>Woodland | USD CTE</span></p>
                        <p>2d</p>
                        </div><br />
                    </div>
                   
                    <div className="usersDataImg_Comm">
                        <div className="col-2 cardBodyImg_Commu">
                                <img className="profile_CardImg"  alt="userImg" src="https://joeschmoe.io/api/v1/$jonny4" />
                        </div>
                        
                        <div className="profileDetail">
                            <h6>Frank Quinn</h6><p>sent you a direct <br /> message <br />
                            <span style={{color: '#81B214'}}>Woodland | USD CTE</span></p>
                        <p>2w</p>
                        </div><br />
                    </div>

                 </div>
            </div>     
        </div>

        <div className="col-8">
        <div className="fovorite_Div">
            <div className="header_fav">
                <h5>My Favorites</h5>
                <button className="btn btn-primary">View All</button>
            </div>

            <div className="row">
                <div className="col-4">
                    <div className="card-group CardOfGroup">
                        <div className="card my_Card">
                            <img alt="img_card1" className="card-img-top" 
                            src="https://picsum.photos/200/300" alt="Card_img3" />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This content is a little bit longer.</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
            </div>

                
            <div className="col-4">
                    <div className="card-group CardOfGroup">
                        <div className="card my_Card">
                            <img alt="img_card2" className="card-img-top"
                             src="https://picsum.photos/200/300" alt="Card_img2" />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This content is a little bit longer.</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-4">
                    <div className="card-group CardOfGroup">
                        <div className="card my_Card">
                            <img alt="img_card3" className="card-img-top" 
                            src="https://picsum.photos/200/300" alt="Card_img1" />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This content is a little bit longer.</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
            </div>
   
            </div>
        </div> 
    </div>
{/* ------------------ */}

            <div className="row"> 
                <div className="col-4">
                    <div className="card group_Commu_Card ">
                        <div className="content_card"> 
                            <h5 className="card-header">ANALYTICS</h5>
                            <button className="btn btn-primary">View All</button>
                    </div> 
                    
                        <div className="card-body analBody">    
                            <div className="usersData_Analytics">
                                <h1>21</h1>
                                <p>COPIES</p>
                            </div>
                    
                            <div className="usersData_Analytics">
                                <h1>47</h1>
                                <p>SHARES</p>
                            </div>

                            <div className="usersData_Analytics">
                                <h1>119</h1>
                                <p>FAVORITES</p>
                            </div>
                    </div>
            </div>     
        </div>

        <div className="col-8">
        <div className="fovorite_Div">
            <div className="header_fav">
                <h5>My Curriculum</h5>
                <button className="btn btn-primary">View All</button>
            </div>

            <div className="row">
                <div className="col-4">
                    <div className="card-group CardOfGroup">
                        <div className="card my_Card">
                            <img alt="img_card1" className="card-img-top" 
                            src="https://picsum.photos/200/300" alt="Card_img3" />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This content is a little bit longer.</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
            </div>

                
            <div className="col-4">
                    <div className="card-group CardOfGroup">
                        <div className="card my_Card">
                            <img alt="img_card2" className="card-img-top"
                             src="https://picsum.photos/200/300" alt="Card_img2" />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This content is a little bit longer.</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-4">
                    <div className="card-group CardOfGroup">
                        <div className="card my_Card">
                            <img alt="img_card3" className="card-img-top" 
                            src="https://picsum.photos/200/300" alt="Card_img1" />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This content is a little bit longer.</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
            </div>
   
            </div>
        </div> 
</div>

<div className="row">
<div className="col-4"></div>
    <div className="col-8">
        <div className="fovorite_Div">
            <div className="header_fav">
                <h5>My Resources</h5>
                <button className="btn btn-primary">View All</button>
            </div>

            <div className="row">
                <div className="col-4">
                    <div className="card-group CardOfGroup">
                        <div className="card my_Card">
                            <img alt="img_card1" className="card-img-top" 
                            src="https://picsum.photos/200/300" alt="Card_img3" />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This content is a little bit longer.</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
            </div>

                
            <div className="col-4">
                    <div className="card-group CardOfGroup">
                        <div className="card my_Card">
                            <img alt="img_card2" className="card-img-top"
                             src="https://picsum.photos/200/300" alt="Card_img2" />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This content is a little bit longer.</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-4">
                    <div className="card-group CardOfGroup">
                        <div className="card my_CardAdd">
                        <AddCircleIcon  className="plus" />
                        <div className="card-body">
                            <h5 className="card-title">ADD A NEW RESOURCE</h5>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
            </div>
   
            </div>
        </div> 
</div>


</div>
</div>

              </div>

               <div className="endLine">
            <div className="ending"></div>
        </div>

        
        <UpperFooter />
        <LowerFooter />
            </div>
    
        </>
    )
}

export default SectionOne;
