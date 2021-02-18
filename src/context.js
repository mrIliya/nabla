import React, { useState, useContext } from 'react'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
	const [modalOpen, setModalOpen] = useState(false)
	const [menuOpen, setMenuOpen] = useState(false)

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
				closeMenu
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