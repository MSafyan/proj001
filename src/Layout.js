import React, { useState } from 'react';
import Aside from './Aside';
import Main from './Main';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Slush from './Slush';
import XPage from './pages/XPage';
function Layout({ setLocale }) {
	const [collapsed, setCollapsed] = useState(false);
	const [image, setImage] = useState(true);

	const handleCollapsedChange = (checked) => {
		setCollapsed(checked);
	};

	const handleImageChange = (checked) => {
		setImage(checked);
	};

	return (
		<div className={`app toggled ? 'toggled' : ''}`}>
			<Router>
				<Aside
					image={image}
					collapsed={collapsed}
					handleCollapsedChange={handleCollapsedChange}
				/>

				<Switch>
					<Route
						exact
						path='/'
						component={() => (
							<Main
								image={image}
								collapsed={collapsed}
								handleCollapsedChange={handleCollapsedChange}
								handleImageChange={handleImageChange}
							/>
						)}
					></Route>

					<Route exact path='/slush' component={Slush}></Route>
					<Route exact path='/xpage' component={XPage}></Route>
				</Switch>
			</Router>
		</div>
	);
}

export default Layout;
