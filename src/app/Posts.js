import React from 'react'
import posts from './imageImport';


export default function Posts() {
  return (
    <div className="blog" id="blog">
	<div className="container">
	<h1 className="text-center">Blog</h1>
		<div className="row">
			<div className="col-md-4 col-lg-4 col-sm-12">
				<div className="card">
					<div className="card-img">
						<img src={posts.post1} alt="Post 1" className="img-fluid"/>
					</div>
					
					<div className="card-body">
					<h4 className="card-title">Post Title</h4>
						<p className="card-text">
							proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
						</p>
					</div>
					<div className="card-footer">
						<a href="#" className="card-link">Read more</a>
					</div>
				</div>
			</div>
			<div className="col-md-4 col-lg-4 col-sm-12">
				<div className="card">
					<div className="card-img">
						<img src={posts.post2} alt="Post 2" className="img-fluid"/>
					</div>
					
					<div className="card-body">
					   <h4 className="card-title">Post Title</h4>
						<p className="card-text">
							
							proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
						</p>
					</div>
					<div className="card-footer">
						<a href="#" className="card-link">Read more</a>
					</div>
				</div>
			</div>
			<div className="col-md-4 col-lg-4 col-sm-12">
				<div className="card">
					<div className="card-img">
						<img src={posts.post3} alt="Post 3" className="img-fluid"/>
					</div>
					
					<div className="card-body">
					<h4 className="card-title">Post Title</h4>
						<p className="card-text">
							
							proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
						</p>
					</div>
					<div className="card-footer">
						<a href="#" className="card-link">Read more</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
  )
}
