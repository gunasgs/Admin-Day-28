import { useFormik } from 'formik'
import React, { useContext } from 'react'
import UserContext from './UserContext';


function CreateProduct() {
  const userContext=useContext(UserContext)
  let formik=useFormik(
    {
      initialValues:{
        brand:"",
        price:0,},
        validate:(values)=>{
          const errors={};
        if(!values.brand){
          errors.brand="name can't blank"}
          return errors;
        },
        onSubmit: values => {
          userContext.setProduct([...userContext.product,values])
    
        }
      }
    
  )
  return (
   <>
   <form onSubmit={formik.handleSubmit}>
     <h1 class="h3 mb-4 text-gray-800">Create Teacher </h1>
  <div class="row">
  <div class="col-6">
  <label for="input" class="form-label">Name</label>
    <input type="text" name="name" onChange={formik.handleChange} value={formik.values.name} class="form-control" aria-label="First name"
      style={{border:formik.errors.name ? "1px solid red":""}}
    />
    <span style={{color:'red'}}>{formik.errors.name}</span>
  </div>
  <div class="col-6">
  <label for="input" class="form-label">subject</label>
    <input type="text" name="subject" onChange={formik.handleChange} value={formik.values.subject} class="form-control"  aria-label="Last name"/>
  </div>
  <div class="col-4 mt-2">
  <label for="input" class="form-label">email</label>
    <input type="email" name="year" onChange={formik.handleChange} value={formik.values.email} class="form-control"  aria-label="First name"/>
  </div>
  <div class="col-4 mt-2">
  <label for="input" class="form-label">phonenumber</label>
    <input type="number" name="phonenumber" onChange={formik.handleChange} value={formik.values.phonenumber} class="form-control" aria-label="Last name"/>
  </div>
  <div class="col-4 mt-2">
  <label for="input" class="form-label">salary</label>
    <input type="number" name="salary" onChange={formik.handleChange} value={formik.values.salary} class="form-control" aria-label="Last name"/>
  </div>
  
  
  <div class="col-6 mt-3">
    <button type="submit" class="btn btn-primary">Submit</button>
  </div>
  
</div>
</form>
   </>
  )
}

export default CreateProduct