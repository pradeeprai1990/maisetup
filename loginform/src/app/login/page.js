"use client"
import { Container } from "react-bootstrap";
import Header from "../common/Header";
import { useState } from "react";

export default function Home() {
    let [formData, setFormData] = useState({
        userName:"",
        password:""
    })
    return (
        <>
            <Header />
            <Container fluid className="py-5">
                <h1 className="text-capitalize text-center fw-bolder mb-5">login page</h1>
                <form className="w-50 mx-auto border border-1 border-black rounded-3 shadow-lg p-4">
                    <div className="w-100 mb-3">
                        <label className="d-block fs-6 fw-semibold mb-2">UserName</label>
                        <input type="text" name="userName" value={formData.userName} onChange={(e)=>setFormData({"userName":e.target.value})} className="w-75 w-100" />
                    </div>
                    <div className="w-100 mb-3">
                        <label className="d-block fs-6 fw-semibold mb-2">Password</label>
                        <input type="password" name="password" value={formData.password} onChange={(e)=>setFormData({"password":e.target.value})} className="w-75 w-100" />
                    </div>
                    <div className="w-100 mb-3">
                        <input type="submit" value={"Login"} className="btn btn-outline-success px-4 py-2 d-block mx-auto fs-5" />
                    </div>
                </form>
            </Container>
        </>
    );
}