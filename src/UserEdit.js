import axios from 'axios'
import { useFormik } from 'formik'
import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'


function UserEdit() {
    let params=useParams()
    const navigate = useNavigate();
    
    useEffect(async() => {
      
        try {
          let user = await axios.get(
            `https://62519153dfa31c1fbd6fbf0f.mockapi.io/users/${params.id}`
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
                let user=await axios.put(`https://62519153dfa31c1fbd6fbf0f.mockapi.io/users/${params.id}`,values)
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
   <h1 className='text-center mb-3'>Student Edit</h1>
   <h3 className=' mb-3'>Student No :  {params.id}</h3>
         <form class="row g-3 mb-4" onSubmit={formik.handleSubmit}>
  <div class="col-lg-6">
    <label for="input" class="form-label">Name</label>
    <input type="text" name='name'  onChange={formik.handleChange}
              value={formik.values.name} class="form-control" id="i"/>
  </div>
 
  <div class="col-lg-6">
    <label for="input" class="form-label">Father Name</label>
    <input type="text" name='fathername' onChange={formik.handleChange}
              value={formik.values.fathername} class="form-control"  id="i"/>
  </div>
  <div class="col-lg-6">
    <label for="inputAddress2" class="form-label">Email</label>
    <input type="email" name='email'onChange={formik.handleChange}
              value={formik.values.email}  class="form-control" id="inputAddress2"/>
  </div>
  <div class="col-lg-6">
    <label for="inputAddress" class="form-label">Phone Number</label>
    <input type="text" name='phonenumber'onChange={formik.handleChange}
              value={formik.values.phonenumber}  class="form-control" id="i" />
  </div>
  
 
  
  
  <div class="col-lg-12  mt-3">
    <button type="submit" class="btn btn-primary">Submit</button>
  </div>
</form>
   </>
  )
}

export default UserEdit