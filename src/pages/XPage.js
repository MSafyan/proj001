import React from 'react';
import { useIntl } from 'react-intl';

const XPage = () => {
	const intl = useIntl();
	return (
		<main>
			<div className='block'>
				<span> {intl.formatMessage({ id: 'xPage' })}</span>
			</div>
		</main>
	);
};

export default XPage;
