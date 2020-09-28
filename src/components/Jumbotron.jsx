import React from 'react';
import {Jumbotron, Button} from 'reactstrap';
import {Link} from 'react-router-dom';
const Banner = (props) => {
    return (
        <div>
            <Jumbotron className="bg-grad2 text-white fs-min p-5">
                <h1 className="display-4">I &lt;Design&gt; and &lt;/Code&gt;
                </h1>
                <br/>
                <h2>"Hello World"<br className="d-lg-none"/>
                    I am var&nbsp;Vansh=&#123;&nbsp;&#125;&nbsp;;</h2>
                <hr className="my-3"/>
                <p>Open Source Enthusiast | WebDeveloper | MERN Stack</p>
                <p className="lead">
                    <Link to="/about">
                        <Button className="btn btn-light">READ ABOUT ME
                            <span className="fa fa-chevron-right"></span>
                        </Button>
                    </Link>
                </p>
                <br/>
                <p>
                    <span className="fa fa-info-circle"></span>
                    Swipe to Navigate</p>
                <br/>
            </Jumbotron>

        </div>
    );
};

export default Banner;
