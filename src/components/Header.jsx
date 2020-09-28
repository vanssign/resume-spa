import React from 'react';

import {NavLink} from 'react-router-dom'

const Header = (props) => {


    return (
        <div className="text-white" style={{backgroundColor:"black"}}>
            <div className="container p-4">
                <div className="row">
                    <div className="col">
                        <NavLink className="btn text-white"
                    style={{borderTopWidth:0}}
                
                    activeStyle={{
                        borderBlockColor:"blue",
                        borderBottomColor:"blue",
                        borderTopWidth:0
                      }}
                            to="/home">HOME</NavLink>
                    </div>
                    <div className="col">
                        <NavLink className="btn text-white"
                        style={{borderTopWidth:0}}
                       
                        activeStyle={{
                            borderBlockColor:"blue",
                            borderBottomColor:"blue",
                            borderTopWidth:0
                          }}
                        to="/about">ABOUT</NavLink>
                    </div>
                    <div className="col">
                        <NavLink className="btn text-white"
                        style={{borderTopWidth:0}}
                        activeStyle={{
                            borderBlockColor:"blue",
                            borderBottomColor:"blue",
                            borderTopWidth:0
                          }}
                        to="/contact">CONTACT</NavLink>
                    </div>
                </div>


                {/* <NavbarText>Simple Text</NavbarText> */} </div>
        </div>
    );
}

export default Header;
