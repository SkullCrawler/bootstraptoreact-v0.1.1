import React from 'react'
import headerback from '../images/headerback.jpg'

var imgStyle = {
	position: 'relative',
	width: '100%',
	backgroundSize: 'cover',
	backgroundPosition: 'center'
};

export default function Header() {
  return (
	<div>
		<img style={imgStyle} src={headerback} />
		<header className="header">
			<div className="overlay"></div>
			<div className="container">
				<div className="description ">
					<h1>
						Hello ,Welcome To My official Website
						<p>
						cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupiatat non
						proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
						<button className="btn btn-outline-secondary btn-lg">See more</button>
					</h1>
				</div>
			</div>   
		</header>
	</div>
  )
}
