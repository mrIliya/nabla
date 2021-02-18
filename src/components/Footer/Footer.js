import React from 'react'
import logo from '../../images/logo.png'
import instagramIcon from '../../images/instagram.png'
import facebookIcon from '../../images/facebook.png'
import twitterIcon from '../../images/twitter.png'
import LinkedIcon from '../../images/linkedin.png'
import { Link } from 'react-router-dom'

function Footer() {
	return (
		<footer className="footer">
			<div className="container-fluid">
				<div className="footer__inner">
					<div className="footer__logo">
						<img src={logo} alt="logo" />
					</div>
					<div className="footer-item">
						<ul className="footer-item__list">
							<h3 className="footer-item__title">Company</h3>
							<li className="footer-item__line">
								<a href="#" className="footer-item__link">Team</a>
							</li>
							<li className="footer-item__line">
								<a href="#" className="footer-item__link">Careers</a>
							</li>
						</ul>
					</div>
					<div className="footer-item">
						<ul className="footer-item__list">
							<h3 className="footer-item__title">Address</h3>
							<li className="footer-item__line">
								<span className="footer-item__link">22 rue Chapon</span>
							</li>
							<li className="footer-item__line">
								<span className="footer-item__link">75003 Paris</span>
							</li>
						</ul>
					</div>
					<div className="footer-item">
						<ul className="footer-item__list">
							<h3 className="footer-item__title">Contact</h3>
							<li className="footer-item__line">
								<a className="footer-item__link" href="#" >Get in touch</a>
							</li>
						</ul>
					</div>
					<div className="footer-social">
						<ul className="footer-social__list">
							<li className="footer-social__line">
								<a href="#" className="footer-social__icon">
									<img src={instagramIcon} alt="instagram" />
								</a>		
							</li>
							<li className="footer-social__line">
								<a href="#" className="footer-social__icon">
									<img src={facebookIcon} alt="facebook" />
								</a>
							</li>
							<li className="footer-social__line">
								<a href="#" className="footer-social__icon">
									<img src={twitterIcon} alt="twitter" />
								</a>
							</li>
							<li className="footer-social__line">
								<a href="#" className="footer-social__icon">
									<img src={LinkedIcon} alt="linkedin" />
								</a>
							</li>
						</ul>
						<div className="footer-social__rights">
							<p>Nabla Technologies - 2021</p>
							<p>All Rights reserved</p>
							<p>Legal notice - T&C</p>
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer