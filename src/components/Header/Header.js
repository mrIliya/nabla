import React from 'react'
import logo from '../../images/logo.png'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../../context'
import Icon from 'react-icons-kit'
import { brightness_high, brightness_low } from 'react-icons-kit/ikons'


function Header() {

	const { openModal, menuOpen, openMenu, closeMenu, theme, setTheme, toggleTheme } = useGlobalContext()

	return (
		<header className="header">
			<div className="container-fluid">
				<div className="header-main">
					<img src={logo} alt="" className="header-logo" />
					<nav className="nav">
						<ul className="nav__list">
							<li className="nav__line">
								<Link to="/">
									<span className="nav__link">home</span>
								</Link>
							</li>
							<li className="nav__line">
								<Link to="/vision">
									<span className="nav__link">vision</span>
								</Link>
							</li>
							<li className="nav__line">
								<Link to="/news">
									<span className="nav__link">news</span>
								</Link>
							</li>
							<li className="nav__line">
								<Link to="/team">
									<span className="nav__link">team</span>
								</Link>
							</li>
							<li className="nav__line">
								<Link to="1234">
									<span className="nav__link">about</span>
								</Link>
							</li>
						</ul>
					</nav>
					<button
						type="button"
						className="theme-icon"
						onClick={toggleTheme}
					>
						{theme === 'light-theme'
							? <Icon icon={brightness_low} />
							: <Icon icon={brightness_high} />}
					</button>
					<button
						className="btn modal-open"
						type="button"
						onClick={openModal}
					>
						Get early access
					</button>
				</div>
			</div>
			<div className={`${menuOpen ? 'mobile-menu active' : 'mobile-menu'}`}>
				<div className="mobile-menu__btn" onClick={
					menuOpen ? closeMenu : openMenu
				}>
					<div></div>
					<div></div>
					<div></div>
				</div>
				<nav className="nav-mobile">
					<ul className="nav-mobile__list">
						<li className="nav-mobile__line">
							<Link to="/">
								<span className="nav-mobile__link" onClick={closeMenu}>home</span>
							</Link>
						</li>
						<li className="nav-mobile__line">
							<Link to="/vision">
								<span className="nav-mobile__link" onClick={closeMenu}>vision</span>
							</Link>
						</li>
						<li className="nav-mobile__line">
							<Link to="/news">
								<span className="nav-mobile__link" onClick={closeMenu}>news</span>
							</Link>
						</li>
						<li className="nav-mobile__line">
							<Link to="/team">
								<span className="nav-mobile__link" onClick={closeMenu}>team</span>
							</Link>
						</li>
						<li className="nav-mobile__line">
							<Link to="/1234">
								<span className="nav-mobile__link" onClick={closeMenu}>about</span>
							</Link>
						</li>
						<button
							className="btn modal-open"
							type="button"
							onClick={openModal}
						>
							Get early access
					</button>
					</ul>
				</nav>
			</div>
		</header>
	)
}

export default Header