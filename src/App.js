import React, { useState } from 'react';
import { IntlProvider } from 'react-intl';
import Layout from './Layout';
import messages from './messages';
import './styles/App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
	const [locale, setLocale] = useState('en');

	return (
		<IntlProvider locale={locale} messages={messages[locale]}>
			<Layout setLocale={setLocale} />
		</IntlProvider>
	);
}

export default App;
