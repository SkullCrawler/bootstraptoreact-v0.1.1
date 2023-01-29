import React from 'react'
import team from './imageImport';

export default function About() {
  return (
    <div className="about" id="about">
	<div className="container">
	  <h1 className="text-center">About Us</h1>
		<div className="row">
			<div className="col-lg-4 col-md-4 col-sm-12">
				<img className="img-fluid" alt="team" id="s-web" src={team.team}/>
				{/* <span className="text-justify">S.Web Developer</span> */}
			</div>
			<div className="col-lg-8 col-md-8 col-sm-12 desc">
			  
				<h3>We have a simple vision</h3>
				<p>
				We are a creative team that loves design, new approaches and clarity.<br/> 
				We created <i>RayTech</i> with a simple vision and philosophy in mind:<br/><br/>

				&nbsp;&nbsp;&nbsp;<i><b>- Design an easier and pleasant online experience for users.</b></i><br/><br/>

				A good experience needs to be simple, have a clear message, be focused on the <br/>
				user needs, but most of all need to fulfil a purpose.<br/><br/>

				<span className="text-muted"> ~ S.Web Developer</span>
				</p>
			</div>
		</div>
	</div>
    </div>
  )
}
