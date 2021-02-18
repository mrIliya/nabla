import newsImageFront from '../images/news-image-front.png'
import newsLogo from '../images/news-logo.png'

function News() {
	return (
		<section class="news">
			<div class="container">
				<div class="news__inner">
					<div class="news-image">
						<div class="news-image__front">
							<img src={newsImageFront} alt="image" />
						</div>
					</div>
					<div class="news-content">
						<div class="news-content__logo">
							<img src={newsLogo} alt="logo" />
						</div>
						<h3 class="news-content__title title">Newsletter</h3>
						<p class="news-content__text">Get the latest news from Nabla on
						health and artificial intelligence, straight to your inbox.
					</p>
						<form class="news-content__form">
							<input class="news-content__input" type="email" placeholder="Enter your email adress" />
							<button class="news-content__btn btn" type="submit">Submit</button>
						</form>
						<div class="news-content__info">
							<p>Nabla uses your email address to send you the newsletter.
							<a class="news-content__more" href="#">More info</a>
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default News