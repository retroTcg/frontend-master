import React, { useState } from 'react';
// libraries
import { Route, Switch } from 'react-router-dom';
import { ToastProvider } from 'react-toast-notifications';

import { GlobalState } from './context/GlobalState';
//components
import Menu from './components/menu/Menu';
import MenuItem from './components/menu/MenuItem';
import Dropdown from './components/menu/Dropdown';
import Home from './pages/Home';
import RegisterAndLogin from './pages/ResisterAndLogin';
import DeckEditor from './pages/DeckEditor';
import './index.css';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//custom hooks
import useDarkMode from './utils/useDarkMode';

function App() {
	const [open, setOpen] = useState(false);
	const [darkMode, setDarkMode] = useDarkMode(false);
	const toggleMode = (e) => {
		e.preventDefault();
		setDarkMode(!darkMode);
	};

	const logout = () => {
		window.localStorage.removeItem('token');
		window.localStorage.removeItem('currentUser');
		setOpen(!open);
	};

	return (
		<GlobalState>
			<Menu>
				<MenuItem
					open={open}
					setOpen={setOpen}
					icon={<FontAwesomeIcon icon={faCaretDown} />}
				>
					<Dropdown
						toggleMode={toggleMode}
						darkMode={darkMode}
						logout={logout}
						open={open}
						setOpen={setOpen}
					/>
				</MenuItem>
			</Menu>
			<Switch>
				<Route exact path='/' component={Home} />
				<Route
					path='/registerandlogin'
					component={() => (
						<RegisterAndLogin open={open} setOpen={setOpen} />
					)}
				/>
				<ToastProvider autoDismiss={true}>
					<Route path='/deckeditor' component={DeckEditor} />
				</ToastProvider>
			</Switch>
		</GlobalState>
	);
}

export default App;
