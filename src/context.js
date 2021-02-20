import React, { useState, useContext, useEffect } from 'react'
import data from './data'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
	const [modalOpen, setModalOpen] = useState(false)
	const [menuOpen, setMenuOpen] = useState(false)
	const [people, setPeople] = useState(data)
	const [index, setIndex] = useState(0)

	// made slider ciclical
	useEffect(() => {
		const lastIndex = people.length - 1
		if (index < 0) {
			setIndex(lastIndex)
		}
		if (index > lastIndex) {
			setIndex(0)
		}
	}, [index, people])


	// made slider automatic
	useEffect(() => {
		let slider = setInterval(() => {
			setIndex(index + 1)
		}, 3000)
		return () => clearInterval(slider)
	}, [index])

	const openModal = () => {
		setModalOpen(true)
	}

	const closeModal = () => {
		setModalOpen(false)
	}

	const openMenu = () => {
		setMenuOpen(true)
	}

	const closeMenu = () => {
		setMenuOpen(false)
	}

	return (
		<AppContext.Provider
			value={{
				modalOpen,
				openModal,
				closeModal,
				menuOpen,
				openMenu,
				closeMenu,
				people,
				index,
				setIndex
			}}
		>
			{children}
		</AppContext.Provider>
	)
}

export const useGlobalContext = () => {
	return useContext(AppContext)
}

export { AppContext, AppProvider }