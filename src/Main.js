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
			<header>Spellware Links and Apps</header>

			<div className='block'>
				<Switch
					height={16}
					width={30}
					checkedIcon={false}
					uncheckedIcon={false}
					onChange={handleImageChange}
					checked={image}
					onColor='#219de9'
					offColor='#bbbbbb'
				/>
				<span> {intl.formatMessage({ id: 'image' })}</span>
			</div>
		</main>
	);
};

export default Main;
