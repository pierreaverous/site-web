import React from "react";
import "./FooterStyles.scss"
import insta from "../../Assets/Images/instagram.svg"
import facebook from "../../Assets/Images/facebook.svg"

const Footer = () => {
    return(
        <>
            <div className='backgroundfooter'>
                <div className='containerFooterText'>
                    <p className='footerTextTitre'>Contact:</p>
                    <p className="footerText"> Jesuisunsiteweb@gmail.com</p>
                    <p className="footerText"> 06 45 85 95 65</p>
                    <div className='containerIcon'>
                        <a href="https://www.instagram.com/terainuitours/"><img className='FooterIcon' src={insta} alt='icon'/></a>
                       <a href="https://www.facebook.com/TerainuiToursExcursions"><img  className='FooterIcon' src={facebook} alt='icon'/></a>
                    </div>

                </div>
            </div>

        </>
    )
}

export default  Footer
