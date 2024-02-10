import axios from 'axios'
import React, { useState } from 'react'

const SIgnUp = () => {

    const[input,setInput] = new useState(
            {

                "name":"",
                "age" :"",
                "phonenumber":"",
                "address":"",
                "pincode":"",
                "email":"",
                "pssword":"",
                


            }
    )
    const inputHandler = (event)=>{
        setInput({...input,[event.target.name]: event.target.value})
    }
const read = ()=>{
    console.log(input)
    axios.post("http://172.16.180.105:3006/api/signup",input).then(
        (Response)=>
        {
            console.log(Response.data)
            if (Response.data.status== "success" )
            {
                alert("success")
                setInput({
                    "name":"",
                    "age" :"",
                    "phonenumber":"",
                    "address":"",
                    "pincode":"",
                    "email":"",
                    "pssword":"",
                })
                
            } else {
                
            }
        }
    )
        }
        
        

  

  return (
    <div>


<div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-12 col-xl-12 col-xxl-12">

<div className="row g-3">
    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

<label htmlFor="" className="form-label">Name</label>
<input type="text" className="form-control" name="name" value={input.name} onChange={inputHandler}/>
    
    </div>
    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">


<label htmlFor="" className="form-label">Age</label>
<input type="text" className="form-control" name="age" value={input.age} onChange={inputHandler} />
    


    </div>
    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">


<label htmlFor="" className="form-label">Phone</label>
<input type="text" className="form-control" name="phonenumber" value={input.phonenumber} onChange={inputHandler}/>
    


    </div>
    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">


<label htmlFor="" className="form-label">Adress</label>
<input type="text" className="form-control" name="address" value={input.address} onChange={inputHandler}/>
    


    </div>
    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">


<label htmlFor="" className="form-label">Pin Code</label>
<input type="text" className="form-control" name="pincode" value={input.pincode} onChange={inputHandler}/>
    


    </div>
    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">


<label htmlFor="" className="form-label">Email</label>
<input type="text" className="form-control" name="email" value={input.email} onChange={inputHandler}/>
    


    </div>
    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">


<label htmlFor="" className="form-label">Password</label>
<input type="text" className="form-control" name="pssword" value={input.pssword} onChange={inputHandler}/>
    



    </div>
    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">


<button className="btn btn-success" onClick={read}>Sign Up</button>


    </div>
</div>


        </div>
    </div>
</div>


    </div>
  )
}

export default SIgnUp