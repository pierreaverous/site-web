import React, { useState } from "react";
import "./FooterStyles.scss";
import insta from "../../Assets/Images/instagram.svg";
import facebook from "../../Assets/Images/facebook.svg";

const Footer = () => {
    const [showLegalDisclaimer, setShowLegalDisclaimer] = useState(false);

    const toggleLegalDisclaimer = () => {
        setShowLegalDisclaimer(!showLegalDisclaimer);
    };

    return (
        <>
            <div className="backgroundfooter" id="Contact">
                <div className="containerFooterText">
                    <p className="footerTextTitre">Contact :</p>
                    <p className="footerText">Jesuisunsiteweb@gmail.com</p>
                    <p className="footerText">06 45 85 95 65</p>
                    <div className="containerIcon">
                        <a href="https://www.instagram.com/terainuitours/">
                            <img className="FooterIcon" src={insta} alt="icon" />
                        </a>
                        <a href="https://www.facebook.com/TerainuiToursExcursions">
                            <img className="FooterIcon" src={facebook} alt="icon" />
                        </a>
                    </div>
                    <h4  className='Mention' onClick={toggleLegalDisclaimer}>Mentions légales</h4>
                </div>

                {showLegalDisclaimer && (
                    <div className="legalDisclaimer">
                        <p className='footerText'>
                            Conditions d'utilisation :
                            Règles de conduite des utilisateurs : En utilisant ce site, vous acceptez de ne pas publier de contenu illégal, diffamatoire, offensant, obscène, frauduleux ou nuisible pour autrui. Vous vous engagez également à respecter toutes les lois et réglementations applicables.
                            Restrictions sur le contenu publié : Vous ne pouvez pas publier de contenu protégé par des droits d'auteur sans l'autorisation du propriétaire légitime. Vous êtes responsable du contenu que vous publiez et vous vous engagez à indemniser le propriétaire du site contre toute réclamation résultant de votre contenu.
                            Limitations de responsabilité : Le propriétaire du site ne peut être tenu responsable des dommages directs, indirects, spéciaux, consécutifs ou punitifs résultant de l'utilisation du site ou de l'impossibilité de l'utiliser.
                        </p>
                        <p className='footerText'>
                            Politique de confidentialité :
                            Collecte des données personnelles : Nous collectons uniquement les données personnelles que vous nous fournissez volontairement, telles que votre nom, votre adresse e-mail et votre numéro de téléphone, afin de répondre à vos demandes d'informations.
                            Utilisation des données personnelles : Les données personnelles que vous nous fournissez seront utilisées uniquement aux fins spécifiées et ne seront pas partagées avec des tiers sans votre consentement explicite, sauf si requis par la loi.
                            Stockage et protection des données : Nous prendrons des mesures raisonnables pour protéger vos données personnelles contre toute perte, utilisation abusive, accès non autorisé ou divulgation.
                        </p>
                        <p className='footerText'>
                            Politique de cookies :
                            Utilisation des cookies : Nous utilisons des cookies pour améliorer votre expérience de navigation sur notre site. Les cookies sont de petits fichiers texte stockés sur votre appareil qui nous aident à analyser les modèles de trafic, à personnaliser le contenu et à vous offrir des fonctionnalités supplémentaires.
                            Gestion des cookies : Vous pouvez gérer vos préférences en matière de cookies en ajustant les paramètres de votre navigateur ou en utilisant les outils de gestion des cookies que nous mettons à votre disposition.
                        </p>
                        <p className='footerText'>
                            Liens externes :
                            Nous déclinons toute responsabilité quant aux contenus des sites externes accessibles via des liens présents sur notre site. Nous n'exerçons aucun contrôle sur ces sites et n'endossons pas leur contenu. L'accès à ces sites se fait à vos propres risques.
                        </p>
                        <p className='footerText'>
                            Limitation de responsabilité :
                            Le propriétaire du site n'assume aucune responsabilité en cas de dommages directs, indirects, spéciaux, consécutifs ou punitifs résultant de l'utilisation du site ou de l'impossibilité de l'utiliser, y compris les pertes de données, les pertes de revenus ou les pertes de bénéfices.
                            Veuillez noter que ces exemples de mentions légales sont fournis à titre indicatif uniquement et doivent être adaptés à votre situation spécifique. Il est recommandé de consulter un professionnel du droit pour obtenir des conseils juridiques précis et personnalisés.
                        </p>
                    </div>
            )}
            </div>
        </>
    );
};

export default Footer;
