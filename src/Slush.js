import React from 'react';
import { useIntl } from 'react-intl';
import Switch from 'react-switch';

const Main = ({
	collapsed,
	image,
	handleCollapsedChange,
	handleImageChange,
}) => {
	const intl = useIntl();
	return (
		<main>
			<div className='block'>
				<span> {intl.formatMessage({ id: 'slushPage' })}</span>
			</div>
		</main>
	);
};

export default Main;
