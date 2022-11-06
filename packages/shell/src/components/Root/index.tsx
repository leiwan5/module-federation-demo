import React, { lazy } from 'react';

const Header = lazy<HeaderType>(() => import('header/Header'));

const Root = () => <div><Header title='Hi, module federation!' /></div>;

export default Root;