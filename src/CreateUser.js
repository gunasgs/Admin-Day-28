import axios from 'axios'
import { useFormik } from 'formik'
import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import UserContext from './UserContext'

function CreateUser() {
  const userContext=useContext(UserContext)
  const navigate = useNavigate();
  let formik=useFormik(
    {
      initialValues:{
        name:"",
        fathername:"",
        email:"",
        phonenumber:"",
      },
        validate:(values)=>{
         const errors={};
         if(!values.name){
          errors.name="name can't blank"}
          return errors;
          },
          onSubmit:async(values)=>{
            try{
              await axios.post("https://62519153dfa31c1fbd6fbf0f.mockapi.io/users",values)
              userContext.setUsers([...userContext.users,values])
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
     <h1 class="h3 mb-4 text-gray-800">Create Student</h1>
        <form class="row g-3 mb-4" onSubmit={formik.handleSubmit}>
  <div class="col-lg-6">
    <label for="input" class="form-label">Name</label>
    <input type="text" name="name" onChange={formik.handleChange} value={formik.values.name} class="form-control" id="i"/>
  </div>
  
  <div class="col-lg-6">
    <label for="input" class="form-label">Father Name</label>
    <input type="text" name="fathername" onChange={formik.handleChange} value={formik.values.fathername}  class="form-control" id="i"/>
  </div>
  
  <div class="col-lg-6">
    <label for="inputAddress" class="form-label">Email</label>
    <input type="email" name="email" onChange={formik.handleChange} value={formik.values.email}  class="form-control" id="i" />
  </div>
  <div class="col-lg-6">
    <label for="inputAddress2" class="form-label">Phone Number</label>
    <input type="number" name="phonenumber" onChange={formik.handleChange} value={formik.values.phonenumber}  class="form-control" id="inputAddress2"/>
  </div>
 
 
 
  
  <div class=" col-lg-12 mt-3">
    <button type="submit" class="btn btn-primary">Submit</button>
  </div>
</form>
    </>
  )
}

export default CreateUser