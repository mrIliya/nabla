import centerImage1 from '../images/center-image1.png'
import centerImage2 from '../images/center-image2.png'
import centerImage4 from '../images/center-image4.png'
import centerImage5 from '../images/center-image5.png'

import blockImage1 from '../images/block-image.jpg'
import blockImage2 from '../images/block-image2.jpg'
import blockImage3 from '../images/block-image3.jpg'
import blockImage4 from '../images/block-image4.jpg'
import blockImage5 from '../images/block-image5.jpg'

import frontImage1 from '../images/center-image-front1.png'
import frontImage2 from '../images/center-image-front2.png'
import frontImage3 from '../images/center-image-front3.png'
import frontImage4 from '../images/center-image-front4.png'
import frontImage5 from '../images/center-image-front5.png'

import { useGlobalContext } from '../context'

function Vision() {
	const { openModal } = useGlobalContext()

	return (
		<section className="vision">
			<div className="container">
				<div className="vision__inner">
					<h2 className="vision__title title">Our Vision</h2>
					<div className="vision-item">
						<div className="image-block">
							<img src={blockImage1} alt="image" />
						</div>
						<div className="center-image" style={{ backgroundImage: `url(${centerImage1})` }}>
							<div className="center-image__front">
								<img src={frontImage1} alt="image" />
							</div>
						</div>
						<div className="text-block">
							<div className="text-block__content">
								<h2 className="text-block__title title">In sickness and in health</h2>
								<p className="text-block__text">Whether you have a little scratch, something you’re worried about, an
								ambitious health goal or you just want to stay healthy, your care team is here every day.</p>
							</div>
						</div>
					</div>
					<div className="vision-item">
						<div className="text-block">
							<div className="text-block__content">
								<h2 className="text-block__title title">A special relationship</h2>
								<p className="text-block__text">
									Composed of doctors and health specialists, your care team will partner with you to create a
									tailored plan based on medical care, nutrition, exercise and stress.
							</p>
							</div>
						</div>
						<div className="center-image" style={{ backgroundImage: `url(${centerImage2})` }}>
							<div className="center-image__front">
								<img src={frontImage2} alt="image" />
							</div>
						</div>
						<div className="image-block">
							<img src={blockImage2} alt="image" />
						</div>
					</div>
					<div className="vision-item">
						<div className="image-block">
							<img src={blockImage3} alt="image" />
						</div>
						<div className="center-image" style={{ backgroundImage: `url(${centerImage1})` }}>
							<div className="center-image__front">
								<img src={frontImage3} alt="image" />
							</div>
						</div>
						<div className="text-block">
							<div className="text-block__content">
								<h2 className="text-block__title title">Always available, in your pocket</h2>
								<p className="text-block__text">Connect with your care team anytime remotely by
								message or video call and schedule in-person consultations.
							</p>
								<p className="text-block__text">Have a question? Just text.</p>
							</div>
						</div>
					</div>
					<div className="vision-item">
						<div className="text-block">
							<div className="text-block__content">
								<h2 className="text-block__title title">A special relationship</h2>
								<p className="text-block__text">
									Composed of doctors and health specialists, your care team will partner with you to create a
									tailored plan based on medical care, nutrition, exercise and stress.
							</p>
							</div>
						</div>
						<div className="center-image" style={{ backgroundImage: `url(${centerImage4})` }}>
							<div className="center-image__front">
								<img src={frontImage4} alt="image" />
							</div>
						</div>
						<div className="image-block">
							<img src={blockImage4} alt="image" />
						</div>
					</div>
					<div className="vision-item">
						<div className="image-block">
							<img src={blockImage5} alt="image" />
						</div>
						<div className="center-image" style={{ backgroundImage: `url(${centerImage5})` }}>
							<div className="center-image__front">
								<img src={frontImage5} alt="image" />
							</div>
						</div>
						<div className="text-block">
							<div className="text-block__content">
								<h2 className="text-block__title title">Toward precision health</h2>
								<p className="text-block__text">The combination of biological, genetic,
								phenotypic and environmental
								data together with AI will unlock our ability to predict, prevent and cure disease more
								precisely, empowering people to lead healthier lives.
							</p>
								<button
									className="btn modal-open"
									type="button"
									onClick={openModal}
								>
									Get early access
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Vision