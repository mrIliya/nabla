import React from 'react'
import logo from '../../images/logo.png'

function Header() {
	return (
		<header className="header">
			<div className="container-fluid">
				<div className="header-main">
					<img src={logo} alt="" className="header-logo" />
					<nav className="nav">
						<ul className="nav__list">
							<li className="nav__line">
								<a href="#" className="nav__link">home</a>
							</li>
							<li className="nav__line">
								<a href="#" className="nav__link">vision</a>
							</li>
							<li className="nav__line">
								<a href="#" className="nav__link">careers</a>
							</li>
							<li className="nav__line">
								<a href="#" className="nav__link">team</a>
							</li>
							<li className="nav__line">
								<a href="#" className="nav__link">about</a>
							</li>
						</ul>
					</nav>
					<select className="language-select" name="language" id="language">
						<option value="EN">EN</option>
						<option value="UA">UA</option>
					</select>
					<button className="btn modal-open" type="button">Get early access</button>
				</div>
			</div>
			<div className="mobile-menu">
				<div className="mobile-menu__btn">
					<div></div>
					<div></div>
					<div></div>
				</div>
				<nav className="nav-mobile">
					<ul className="nav-mobile__list">
						<li className="nav-mobile__line">
							<a href="#" className="nav-mobile__link">home</a>
						</li>
						<li className="nav-mobile__line">
							<a href="#" className="nav-mobile__link">vision</a>
						</li>
						<li className="nav-mobile__line">
							<a href="#" className="nav-mobile__link">careers</a>
						</li>
						<li className="nav-mobile__line">
							<a href="#" className="nav-mobile__link">team</a>
						</li>
						<li className="nav-mobile__line">
							<a href="#" className="nav-mobile__link">about</a>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	)
}

export default Header