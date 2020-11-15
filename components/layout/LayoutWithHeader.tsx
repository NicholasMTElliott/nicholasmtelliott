import React from "react";
import './LayoutWithHeader.scss';

export default function  LayoutWithHeader(props:{children:any})
{
	return <div className='LayoutWithHeader'>
		<div className='LayoutHeaderBar'>
			<img className='LayoutAvatar' src='https://gravatar.com/avatar/468788fd550c4128b0c250566ea8729f?s=128' />
			<div>
			Name * Title * Location <br/>
			menubar
			</div>
		</div>
		<div className='LayoutContext'>
			{props.children}
		</div>
	</div>;
}