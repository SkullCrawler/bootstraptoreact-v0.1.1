import React from 'react'

export default function Footer() {
  return (
    <footer className="footer mt-auto py-3" 
		style={{
			background: "#F97300", 
			position: "fixed", 
			left:0,
			bottom:0,
			right:0}}>
	<div className="container">
		<p className="text-center text-white lead">Copyright &copy; <script type="text/javascript">
			document.write(new Date().getFullYear());
		  </script> RayTech.</p>
	  
	</div>
  </footer>
  )
}
