import React from 'react'
import team from './imageImport'

export default function Team() {
  return (
    <div className="team" id="team">
	<div className="container">
	   <h1 className="text-center">Our Team</h1>
		<div className="row">
			<div className="col-lg-3 col-md-3 col-sm-12 item">
				<img src={team.team4} className="img-fluid" alt="network-engineer"></img>
				<div className="des">
					<p>Zahoor</p>
				</div>
				<span className="text-muted">Network Engineer</span>
			</div>
			<div className="col-lg-3 col-md-3 col-sm-12 item">
				<img src={team.team3} className="img-fluid" alt="manager"></img>
			<div className="des">
				<p>Uneeb</p>
			</div>
			<span className="text-muted">Manager</span>
			</div>
			<div className="col-lg-3 col-md-3 col-sm-12 item">
				<img src={team.team2} className="img-fluid" alt="data-analyst"></img>
			<div className="des">
				<p>Hasan</p>
			</div>
			<span className="text-muted">Data Analyst</span>
			</div>
			<div className="col-lg-3 col-md-3 col-sm-12 item">
				<img src={team.team1} className="img-fluid" alt="S.Web Developer"></img>
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
