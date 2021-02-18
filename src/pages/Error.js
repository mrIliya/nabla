import {Link} from 'react-router-dom'

function Error() {
	return (
		<div className="error-block">
			<h3 className="title">Error Wrong Path</h3>
			<Link to="/">
				<button className="btn">Back Home</button>
			</Link>			
		</div>
	)
}

export default Error