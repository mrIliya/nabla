import { useGlobalContext } from '../../context'

function Modal() {

	const { modalOpen, closeModal } = useGlobalContext()

	return (
		<div className={`${modalOpen ? 'modal active' : 'modal'}`}>
			<div className="modal__inner">
				<form className="modal-form">
					<div className="modal__close" onClick={closeModal}>
						<div></div>
						<div></div>
					</div>
					<h4 className="modal-form__title title">Get Your Early Access</h4>
					<input type="name" className="modal-form__input" placeholder="Enter your name" />
					<input type="email" className="modal-form__input" placeholder="Enter your email" />
					<button className="modal-form__btn btn" type="submit">Submit</button>
				</form>
			</div>
		</div>
	)
}
export default Modal