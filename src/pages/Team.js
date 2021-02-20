import { FiChevronRight, FiChevronLeft } from 'react-icons/fi'
import { useGlobalContext } from '../context'

function Team() {
	const { people, index, setIndex } = useGlobalContext()
	return (
		<section className="team">
			<div className="container">
				<h2 className="team__title title">Our Team</h2>
				<div className="team__inner">
					<div className="team__content">
						{people.map((person, personIndex) => {
							const { id, name, image, title } = person

							let position = 'next-item'
							if (index === personIndex) {
								position = 'active-item'
							}
							if (personIndex === index - 1 || (index === 0 && personIndex === people.length - 1)) {
								position = 'last-item'
							}
							return (
								<div className={`team-item ${position}`} key={id}>
									<div className="team-item__image">
										<img src={image} alt={name} />
									</div>
									<div className="team-item__name">{name}</div>
									<div className="team-item__position">{title}</div>
								</div>
							)
						})}
					</div>
					<button
							className="btn team__btn"
							onClick={() => setIndex(index - 1)}
							type="button"
						><FiChevronLeft /></button>
						<button
							className="btn team__btn team__btn-right"
							onClick={() => setIndex(index + 1)}
							type="button"
						><FiChevronRight /></button>
				</div>
			</div>
		</section>
	)
}
export default Team