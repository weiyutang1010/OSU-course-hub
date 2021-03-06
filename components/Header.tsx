import React from 'react';
import Button from './Button';

interface Props {
	searchbarToggled: boolean;
}

const header = {
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	flexWrap: 'wrap',
	background: '#343a40'
} as React.CSSProperties

const title = {
	margin: "auto",
	whiteSpace: 'nowrap',
	marginTop: 20,
	marginBottom: 20,
	color: '#eee'
} as React.CSSProperties

const button = {
	margin: 'auto',
	marginTop: 20,
	marginBottom: 20,
}

const logo = {
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	width: 49.5,
	margin: 'auto',
	marginTop: 20,
	marginBottom: 20,
}

const Header: React.FC<Props> = props => {
	return (
		<div style={header}>
			<img src={'/favicon.png'} style={logo}></img>
			<h4 style={title}>OSU Course Hub</h4>
			<Button variant="primary" style={button} text='Login' />
		</div>
	);
};

export default Header;
