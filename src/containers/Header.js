import React from 'react';
import logo from '../img/favicon.ico'
import './Header.css'

//import Components from ../components

const Header = ()=> {

	return (
		<header className="header">
	  	<img id='logo' src={logo} alt='TODO-Logo' />
	    <p>
	      header: it'll contain logo and any relevant info
	    </p>
	  </header>
	)
};


export default Header;