import React from "react";
import { Link } from 'gatsby';
import './LayoutWithHeader.scss';

export default function  LayoutWithHeader(props:{children:any})
{
	return <div className='LayoutWithHeader'>
		<header className='LayoutHeaderBar'>
			<img className='LayoutAvatar' src='https://gravatar.com/avatar/468788fd550c4128b0c250566ea8729f?s=128' />
			<div className='LayoutSideMenu'>
				<summary><h1>Nicholas M.T. Elliott</h1>  <h2>Managing Director, Solution Architect</h2> <h2>Columbia, MD, USA</h2></summary>
				<nav><Link to='/'>Home</Link> &#11044; <Link to='/portfolio'>Portfolio</Link> &#11044;  <Link to='/about'>About</Link></nav>
			</div>
		</header>
		<div className='LayoutContent'>
			{props.children}
		</div>
	</div>;
}