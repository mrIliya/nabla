import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Vision from './pages/Vision'
import Main from './pages/Main'
import News from './pages/News'
import Error from './pages/Error'

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Modal from './components/Modal/Modal'

function App() {
	return (
		<Router>
			<Header />
			<Switch>
				<Route exact path="/">
					<Main />
				</Route>
				<Route exact path="/vision">
					<Vision />
				</Route>
				<Route exact path="/news">
					<News />
				</Route>
				<Route exact path="*" >
					<Error />
				</Route>
			</Switch>
			<Footer />
			<Modal/>
		</Router>
	);
}

export default App;
