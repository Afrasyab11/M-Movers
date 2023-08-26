import React from "react";
import logo from './../images/logo.png'
import { Typewriter } from 'react-simple-typewriter'
// import LanguageSwitcher from './translator'
export default class Header extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light " style={{backgroundColor:'rgb(0, 0, 0) '}}>
                <div className="container-fluid">
                    <img className="navbar-brand rounded-circle" height={100} src={logo} alt="Logo" />
                    {/* <img className="navbar-brand rounded-circle" height={80} src={logo} alt="Logo" /> */}
                    <ul className="navbar-nav ">
                        <li className="nav-item text-light" >
                            {/* <p className="lh-1 m-1">Email: zkmovers112@gmail.com</p>
                            <p className="lh-1">contact no : +971545599867</p> */}
                           <Typewriter className="nav-link" words={['Email : zkmovers112@gmail.com']}
                                loop={50}
                                typeSpeed={70}
                                deleteSpeed={100}
                                delaySpeed={5000} /><br></br>
                    
                              {/*<Typewriter className="nav-link" words={['contact no : +971545599867']}
                                loop={50}
                                typeSpeed={70}
                                deleteSpeed={100}
                                delaySpeed={5000} /> */}
                        </li>
                        
                    </ul>
                   
                </div>
            </nav>

            // <div className="row bg-dark lh-3 m-0">
            //     <div className="col-sm-1 col-md-1 p-3">
            //         <img className="img-fluid rounded-circle w-100 h-100" src={logo} alt="" />
            //     </div>
            //     <div className="col-sm-12 col-md-3"><a href={`https://wa.me/+923419872780/?text=Hello! Monsoor Movers`} target="_blank" rel="noreferrer" className="btn btn-primary border-0 text-light">WhatsApp</a></div>
            //     <div className="col-sm-12 col-md-8 pt-4 text-center" style={{ "color": "rgb(123, 149, 251)" }}>
            //         <Typewriter words={['Email : zkmovers112@gmail.com']}
            //             loop={50}
            //             typeSpeed={70}
            //             deleteSpeed={100}
            //             delaySpeed={1000} /><br></br>
            //         <Typewriter words={['contact no : +971545599867']}
            //             loop={50}
            //             typeSpeed={70}
            //             deleteSpeed={100}
            //             delaySpeed={1000} />
            //     </div>
            // </div>
        )
    }
}