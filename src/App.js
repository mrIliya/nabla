import React from 'react'
import './App.css';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Vision from './pages/Vision'
import Main from './pages/Main'
import News from './pages/News'

function App() {
	return (
		<>
			<Header />
			<Main/>
			<Vision />
			<News/>
			<Footer />
		</>
	);
}

export default App;
