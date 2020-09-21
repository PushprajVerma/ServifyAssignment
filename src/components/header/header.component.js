import React from 'react';
import '../../public/css/style.css';
import logo from '../../public/image/logo.svg';

export default function header(props) {
    const {logoAnimation, headerColour, showTagline} = props;
    const logoClass = logoAnimation ? `logo-animation` : '';
    return (
        <div className="header">
            <img className={`logo ${logoClass}`} src={logo} alt="Logo"/>
            <span className={`header-${headerColour}`}>Hello Header</span>
            {showTagline && <span className="header-tagline">tagline tells us about the brand...</span>}
        </div>
    )
}