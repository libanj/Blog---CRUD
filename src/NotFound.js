import { Link } from "react-router-dom"

const NotFound = () => {
	return ( 
		<div className="not-found">
			<h1>404 Error, page not found</h1>
			<Link to="/">Back to Homepage</Link>
		</div>
	 );
}
 
export default NotFound;