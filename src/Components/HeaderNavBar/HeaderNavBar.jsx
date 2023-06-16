import React from "react";
import './HeaderNavBarStyles.scss';
import {HashLink as Link} from 'react-router-hash-link';
import logo from "../../Assets/Images/LogoSiteWebAug.png"
const HeaderNavBar = () => {
    return (
        <>
            <header>
                <div className='NavBar'>
                    <div className='container-logo-title'>
                        <div className='logo'>
                            <img className='logoImg' src={logo}/>
                        </div>
                        <div className='title'>
                            <h1>TERAINUI TOURS</h1>
                        </div>
                    </div>


                    <div>

                        <Link to="/activity/Combo" className='HeaderLink'>Combo terre-mer</Link>
                        <Link to="/activity/Circuit" className='HeaderLink'>Circuit 4x4</Link>
                        <Link to="/activity/dejeuner" className='HeaderLink'>Déjeuner & transfert motu</Link>
                        <Link to="/#Actvité" className='HeaderLink'> Activité </Link>
                        <Link to="/" className='HeaderLink'>Home</Link>
                        <Link to="/#Contact" className='HeaderLink'> Contact</Link>

                        {/*<Link to="#horaire" className='HeaderLink'> </Link>*/}
                        {/*<Link to="#Contact"> Contact</Link>*/}

                    </div>

                </div>

            </header>


        </>
    )
}

export default HeaderNavBar;