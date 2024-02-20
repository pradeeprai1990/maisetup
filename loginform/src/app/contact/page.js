"use client"
import { Container } from "react-bootstrap";
import Header from "../common/Header";
import { useState } from "react";
import axios from "axios";

export default function Home() {
    let [formData, setFormData] = useState({
        fName:"",
        lName:"",
        email:"",
        phone:"",
        message:""
    })
    let handleForm=(e)=>{
        e.preventDefault()
        axios.post('http://localhost:8000/contact/contact-save',formData)
        .then((res)=>res.data)
        .then((finalRes)=>{
            console.log(finalRes)
        })
    }
    return (
        <>
            <Header />
            <Container fluid className="py-5">
                <h1 className="text-capitalize text-center fw-bolder mb-5">contact page</h1>
                <form onSubmit={handleForm} className="w-50 mx-auto border border-1 border-black rounded-3 shadow-lg p-4 contactForm">
                    <div className="w-100 mb-3">
                        <label className="d-block fs-6 fw-semibold mb-2">First Name</label>
                        <input type="text" name="fName" 
                        
                        value={formData.fName} onChange={(e)=>
                            {
                                let obj={...formData};
                                obj['fName']=e.target.value
                            setFormData(obj)
                            }   
                        }
                        

                        
                        className="w-75 w-100" />
                    </div>
                    <div className="w-100 mb-3">
                        <label className="d-block fs-6 fw-semibold mb-2">Last Name</label>
                        <input type="text" name="lName" value={formData.lName}
                        
                        onChange={(e)=>
                            {
                                let obj={...formData};
                                obj['lName']=e.target.value
                            setFormData(obj)
                            }   
                        }
                        
                        className="w-75 w-100" />
                    </div>
                    <div className="w-100 mb-3">
                        <label className="d-block fs-6 fw-semibold mb-2">Email</label>
                        <input type="email" name="email" value={formData.email}
                        
                        onChange={(e)=>
                            {
                                let obj={...formData};
                                obj['email']=e.target.value
                            setFormData(obj)
                            }   
                        }
                        className="w-75 w-100" />
                    </div>
                    <div className="w-100 mb-3">
                        <label className="d-block fs-6 fw-semibold mb-2">Phone</label>
                        <input type="tel" name="phone" 
                         onChange={(e)=>
                            {
                                let obj={...formData};
                                obj['phone']=e.target.value
                            setFormData(obj)
                            }   
                        }
                        
                        
                        value={formData.phone}  className="w-75 w-100" />
                    </div>
                    <div className="w-100 mb-3">
                        <label className="d-block fs-6 fw-semibold mb-2">Message</label>
                        <textarea className="w-100" name="message" value={formData.message}
                        
                        onChange={(e)=>
                            {
                                let obj={...formData};
                                obj['message']=e.target.value
                            setFormData(obj)
                            }   
                        }
                        
                        
                       ></textarea>
                    </div>
                    <div className="w-100 mb-3">
                        <input type="submit" className="btn btn-outline-success px-4 py-2 d-block mx-auto fs-5" />
                    </div>
                </form>
            </Container>
        </>
    );
}