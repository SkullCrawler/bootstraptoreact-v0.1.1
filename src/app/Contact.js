import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import $ from "jquery";

export const Contact = () => {
	const form = useRef();
  
	const sendEmail = (e) => {
	  e.preventDefault();
	
	  emailjs.sendForm('service_e9d48mp', 'template_xmsu4ek', form.current, 'RHpABP1hA25fWNMEh')
		.then((result) => {
			console.log(result.text);
			console.log("message sent!");
			e.target.reset();
		}, (error) => {
			console.log(error.text);
		});
	};

	const [name, setName] = useState("");
    const [result, setResult] = useState("");
  
    const handleChange = (e) => {
        setName(e.target.value);
    };
  
    const handleSumbit = (e) => {
        e.preventDefault();
        const form = $(e.target);
        $.ajax({
            type: "POST",
            url: form.attr("action"),
            data: form.serialize(),
            success(data) {
                setResult(data);
            },
        });
    };
  return (
    <div className="contact-form" id="contact">
	<div className="container">
		<form action="http://localhost:8000/server.php" method="post" ref={form} onSubmit={(event) => handleSumbit(event)}>
			<div className="row">
				<div className="col-lg-4 col-md-4 col-sm-12">
				  <h1>Get in Touch</h1>	
				</div>
				<div className="col-lg-8 col-md-8 col-sm-12 right">
				   <div className="form-group">
				   	 <label htmlFor="name">Name: </label>
				   	 <input type="text" className="form-control form-control-lg" placeholder="Your Name" name="name" id="name" value={name} onChange={(event) => handleChange(event)}></input>
				   </div>
				   <div className="form-group">
				   	 <input type="email" className="form-control form-control-lg" placeholder="YourEmail@email.com" name="user_email"></input>
				   </div>
				   <div className="form-group">
				   	 <textarea className="form-control form-control-lg" name="message">
				   	 	
				   	 </textarea>
				   </div>
				   <input type="submit" className="btn btn-secondary btn-block" value="Send" name=""></input>
				</div>
			</div>
		</form>
	</div>
</div>
  )
}
