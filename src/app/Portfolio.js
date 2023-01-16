import React from 'react'
import portfolio from './imageImport';

export default function Portfolio() {
  return (
    <div className="portfolio" id="portfolio">
     <h1 className="text-center">Portfolio</h1>
	<div className="container">
		<div className="row">
			<div className="col-lg-4 col-md-4 col-sm-12">
				<img src={portfolio.port1} alt="Portfolio 1"  className="img-fluid"/>
			</div>
			<div className="col-lg-4 col-md-4 col-sm-12">
				<img src={portfolio.port2} alt="Portfolio 2" className="img-fluid"/>
			</div>
			<div className="col-lg-4 col-md-4 col-sm-12">
				<img src={portfolio.port3} alt="Portfolio 3" className="img-fluid"/>
			</div>
			<div className="col-lg-4 col-md-4 col-sm-12">
				<img src={portfolio.port4} alt="Portfolio 4" className="img-fluid"/>
			</div>
			<div className="col-lg-4 col-md-4 col-sm-12">
				<img src={portfolio.port5} alt="Portfolio 5" className="img-fluid"/>
			</div>
			<div className="col-lg-4 col-md-4 col-sm-12">
				<img src={portfolio.port6} alt="Portfolio 6" className="img-fluid"/>
			</div>
			<div className="col-lg-4 col-md-4 col-sm-12">
				<img src={portfolio.port7} alt="Portfolio 7" className="img-fluid"/>
			</div>
			<div className="col-lg-4 col-md-4 col-sm-12">
				<img src={portfolio.port8} alt="Portfolio 8" className="img-fluid"/>
			</div>
			<div className="col-lg-4 col-md-4 col-sm-12">
				<img src={portfolio.port9} alt="Portfolio 9" className="img-fluid"/>
			</div>
		</div>
	</div>
</div>
  )
}
