import React from 'react';
import logo from '../../assets/logo.png';

const Header: HeaderType = ({ title }) => <div>
    <img src={logo} width={24} />
    {title}
</div>;
export default Header;