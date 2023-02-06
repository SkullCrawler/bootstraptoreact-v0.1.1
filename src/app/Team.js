import React from 'react'
import team from './imageImport'

export default function Team() {
  return (
    <div className="team" id="team">
	<div className="container">
	   <h1 className="text-center">Our Team</h1>
		<div className="rw">
			<div className="col-lg-3 col-md-3 col-sm-12 item">
				<img src={team.team4} className="img-fluid" alt="database-engineer"></img>
				<div className="des">
					<p>Zahoor</p>
				</div>
				<span className="text-muted">Database Engineer</span>
			</div>
			<div className="col-lg-3 col-md-3 col-sm-12 item">
				<img src={team.team3} className="img-fluid" alt="backend-developer"></img>
				<div className="des">
					<p>Hamza</p>
				</div>
				<span className="text-muted">Backend Developer</span>
			</div>
			<div className="col-lg-3 col-md-3 col-sm-12 item">
				<img src={team.team2} className="img-fluid" alt="graphics-designer"></img>
				<div className="des">
					<p>Ammar</p>
				</div>
				<span className="text-muted">Graphics Designer</span>
			</div>
			<div className="col-lg-3 col-md-3 col-sm-12 item">
				<img src={team.team1} className="img-fluid" alt="s-web-developer"></img>
				<div className="des">
					<p>Rayyan</p>
					
				</div>
				<span className="text-muted">S.Web Developer</span>
			</div>
		</div>
	</div>
</div>
  )
}
