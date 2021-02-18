import nLogo from '../images/N.png'
import leftImageFront from '../images/left-image-front.png'
import rightImageFront from '../images/right-image-front.png'

function Main() {
	return (
		<section className="main-section">
		<div className="container">
			<div className="main-screen">
				<h1 className="main-screen__text title">
					<span className="main-screen__text-small">Your connection</span>
					<span className="main-screen__text-medium">to your everyday</span>
					<span className="main-screen__text-large">health</span>
				</h1>
				<div className="main-screen__logo">
					<span className="line"></span>
					<img src={nLogo} alt="N"/>
					<span className="line"></span>
				</div>
				<div className="left-image">
					<div className="left-image__front">
						<img src={leftImageFront} alt="image"/>
					</div>
				</div>
				<div className="right-image">
					<div className="right-image__front">
						<img src={rightImageFront} alt="image"/>
					</div>
				</div>
			</div>
		</div>
	</section>
	)
}

export default Main