import React from 'react'
import logo from '../../images/logo.png'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../../context'

function Header() {

	const { openModal } = useGlobalContext()
	const { menuOpen, openMenu, closeMenu } = useGlobalContext()

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
								<Link to="123">
									<span className="nav__link">careers</span>
								</Link>
							</li>
							<li className="nav__line">
								<Link to="1234">
									<span className="nav__link">team</span>
								</Link>
							</li>
						</ul>
					</nav>
					<select className="language-select" name="language" id="language">
						<option value="EN">EN</option>
						<option value="UA">UA</option>
					</select>
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
								<span className="nav-mobile__link">home</span>
							</Link>
						</li>
						<li className="nav-mobile__line">
							<Link to="/vision">
								<span className="nav-mobile__link">vision</span>
							</Link>
						</li>
						<li className="nav-mobile__line">
							<Link to="/news">
								<span className="nav-mobile__link">news</span>
							</Link>
						</li>
						<li className="nav-mobile__line">
							<a href="#" className="nav-mobile__link">team</a>
						</li>
						<li className="nav-mobile__line">
							<a href="#" className="nav-mobile__link">about</a>
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