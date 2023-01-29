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
		<img style={imgStyle} src={headerback} alt="headerback"/>
		<header className="header">
			<div className="overlay"></div>
			<div className="container">
				<div className="description ">
					<h1>
						We are a graphic design agency <br/> for visually compelling stories.
						<p>
						Our user experience and interface design philosophy focuses on aligning 
						intuitive human interactions with specific business outcomes to deliver 
						the most exceptional results for the user. Successful digital solutions 
						solve problems and create engagement opportunities where they didn't 
						exist before.</p>
						<button className="btn btn-outline-secondary btn-lg">See more</button>
					</h1>
				</div>
			</div>   
		</header>
	</div>
  )
}
