// import React, { useState } from "react";
// import './HeaderNavBarStyles.scss';
// import { HashLink as Link } from 'react-router-hash-link';
// import logo from "../../Assets/Images/LogoSiteWebAug.png"
//
// const HeaderNavBar = () => {
//     // Get the path of the current URL
//     const currentPath = window.location.pathname;
//
//     // Add state for the dropdown menu
//     const [isMenuOpen, setIsMenuOpen] = useState(false);
//
//     return (
//         <>
//             <header>
//                 <div className='NavBar'>
//                     <div className='container-logo-title'>
//                         <div className='logo'>
//                             <img className='logoImg' src={logo} alt='Logo Site'/>
//                         </div>
//                         <div className='title'>
//                             <h1>TERAINUI TOURS</h1>
//                         </div>
//                     </div>
//
//                     <div className={`buttonLink ${isMenuOpen ? 'open' : ''}`}>
//                         <Link to="/activity/Combo" className={`HeaderLink ${currentPath.startsWith('/activity/Combo') ? 'active' : ''}`}>Combo terre-mer</Link>
//                         <Link to="/activity/Circuit" className={`HeaderLink ${currentPath.startsWith('/activity/Circuit') ? 'active' : ''}`}>Circuit 4x4</Link>
//                         <Link to="/activity/dejeuner" className={`HeaderLink ${currentPath.startsWith('/activity/dejeuner') ? 'active' : ''}`}>Déjeuner & transfert motu</Link>
//                         <Link to="/#Actvité" className={`HeaderLink ${currentPath === '/' ? 'active' : ''}`}> Activité </Link>
//                         <Link to="/" className={`HeaderLink ${currentPath === '/' ? 'active' : ''}`}>Home</Link>
//                         <Link to="/#Contact" className={`HeaderLink ${currentPath === '/' ? 'active' : ''}`}> Contact</Link>
//                     </div>
//
//                     {/* Dropdown menu button */}
//                     <div className={`mobile-menu-icon ${isMenuOpen ? 'open' : ''}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
//                         {isMenuOpen ? (
//                             <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
//                                 <path fill="#FFF" d="M12 10.586l3.293-3.293a1 1 0 1 1 1.414 1.414L13.414 12l3.293 3.293a1 1 0 1 1-1.414 1.414L12 13.414l-3.293 3.293a1 1 0 0 1-1.414-1.414L10.586 12 7.293 8.707a1 1 0 0 1 1.414-1.414L12 10.586z" />
//                             </svg>
//                         ) : (
//                             <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
//                                 <path fill="#FFF" d="M6 8h12v2H6zm0 4h12v2H6zm0 4h12v2H6z" />
//                             </svg>
//                         )}
//                     </div>
//                 </div>
//             </header>
//         </>
//     )
// }
//
// export default HeaderNavBar;
import React, { useState } from "react";
import './HeaderNavBarStyles.scss';
import { HashLink as Link } from 'react-router-hash-link';
import logo from "../../Assets/Images/LogoSiteWebAug.png"

const HeaderNavBar = () => {
    const currentPath = window.location.pathname;
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header>
            <div className='NavBar'>
                <div className='container-logo-title'>
                    <div className='logo'>
                       <Link to='/'> <img className='logoImg' src={logo} alt='Logo Site'/></Link>
                    </div>
                    <div className='title'>
                        <h1 className='titleNavBar'>TERAINUI TOURS</h1>
                    </div>
                </div>

                <div className={`buttonLink ${isMenuOpen ? 'open' : ''}`}>
                    <Link to="/activity/Combo" className={`HeaderLink ${currentPath.startsWith('/activity/Combo') ? 'active' : ''}`}>Combo terre-mer</Link>
                    <Link to="/activity/Circuit" className={`HeaderLink ${currentPath.startsWith('/activity/Circuit') ? 'active' : ''}`}>Circuit 4x4</Link>
                    <Link to="/activity/dejeuner" className={`HeaderLink ${currentPath.startsWith('/activity/dejeuner') ? 'active' : ''}`}>Déjeuner & transfert motu</Link>
                    <Link to="/#Actvité" className={`HeaderLink ${currentPath === '/' ? 'active' : ''}`}> Activité </Link>
                    <Link to="/" className={`HeaderLink ${currentPath === '/' ? 'active' : ''}`}>Home</Link>
                    <Link to="/#Contact" className={`HeaderLink ${currentPath === '/' ? 'active' : ''}`}> Contact</Link>
                </div>

                <div className={`mobile-menu-icon ${isMenuOpen ? 'open' : ''}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? (
                        <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24">
                            <path fill="#195293" d="M12 10.586l3.293-3.293a1 1 0 1 1 1.414 1.414L13.414 12l3.293 3.293a1 1 0 1 1-1.414 1.414L12 13.414l-3.293 3.293a1 1 0 0 1-1.414-1.414L10.586 12 7.293 8.707a1 1 0 0 1 1.414-1.414L12 10.586z" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24">
                            <path fill="#195293" d="M6 8h12v2H6zm0 4h12v2H6zm0 4h12v2H6z" />
                        </svg>
                    )}
                </div>
            </div>
        </header>
    )
}

export default HeaderNavBar;
