import axios from 'axios'
import React from "react";
import { useFormik } from 'formik'
import  { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function ProductEdit() {
  let params=useParams()
  const navigate = useNavigate();
  useEffect(async() => {
      
    try {
      let user = await axios.get(
        `https://62519153dfa31c1fbd6fbf0f.mockapi.io/product/${params.id}`
      );
      formik.setValues(user.data);
     
    } catch (error) {
      console.log(error);
    }
  }
 
, []);
let formik=useFormik(
  {
    initialValues:{
      name:"",
      fathername:"",
      email:"",
      phonenumber:"",
    },
      validate:(values)=>{
       
    
        },
        onSubmit:async(values)=>{
          try{
            let user=await axios.put(`https://62519153dfa31c1fbd6fbf0f.mockapi.io/product/${params.id}`,values)
formik.setValues(user.data)
navigate("/users", { replace: true });
          }
          catch{
            console.log("error");
          }
         
  
        }
      }
)
  return (
    <>
      <h3 className=' mb-3'>Teacher No :  {params.id}</h3>
      <form class="row g-3 mb-4" onSubmit={formik.handleSubmit}>
     
        <div class="col-6">
          <label for="input" class="form-label">
            Name
          </label>
          <input type="text" class="form-control" aria-label="First name" onChange={formik.handleChange}
              value={formik.values.name} />
        </div>
        <div class="col-6">
          <label for="input" class="form-label">
            subject
          </label>
          <input type="text" class="form-control" aria-label="Last name" onChange={formik.handleChange}
              value={formik.values.subject} />
        </div>
        <div class="col-4 mt-2">
          <label for="input" class="form-label">
            email
          </label>
          <input type="text" class="form-control" aria-label="First name" onChange={formik.handleChange}
              value={formik.values.email} />
        </div>
        <div class="col-4 mt-2">
          <label for="input" class="form-label">
            phonenumber
          </label>
          <input type="text" class="form-control" aria-label="Last name" onChange={formik.handleChange}
              value={formik.values.phonenumber} />
        </div>
        <div class="col-4 mt-2">
          <label for="input" class="form-label">
            salary
          </label>
          <input type="text" class="form-control" aria-label="Last name" onChange={formik.handleChange}
              value={formik.values.salary} />
        </div>

        <div class="col-8 mt-3">
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </div>
     
      </form>
    </>
  );
}

export default ProductEdit;
