import newsImageFront from '../images/news-image-front.png'
import newsLogo from '../images/news-logo.png'

function News() {
	return (
		<section className="news">
			<div className="container">
				<h2 className="news__title title">Our News</h2>
				<div className="news__inner">
					<div className="news-image">
						<div className="news-image__front">
							<img src={newsImageFront} alt="image" />
						</div>
					</div>
					<div className="news-content">
						<div className="news-content__logo">
							<img src={newsLogo} alt="logo" />
						</div>
						<h3 className="news-content__title title">Newsletter</h3>
						<p className="news-content__text">Get the latest news from Nabla on
						health and artificial intelligence, straight to your inbox.
					</p>
						<form className="news-content__form">
							<input className="news-content__input" type="email" placeholder="Enter your email adress" />
							<button className="news-content__btn btn" type="submit">Submit</button>
						</form>
						<div className="news-content__info">
							<p>Nabla uses your email address to send you the newsletter.
							<a className="news-content__more" href="#">More info</a>
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default News