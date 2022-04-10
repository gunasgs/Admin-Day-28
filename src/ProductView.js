import axios from 'axios'
import React, {useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


function TeacherView() {
    let params=useParams()
    const [user,setUser]=useState({})
    useEffect(async ()=>{
      let user=await axios.get(`https://62519153dfa31c1fbd6fbf0f.mockapi.io/product/${params.id}`)
      setUser(user.data)
    })
    
  return (
      <>

    
   <div className='h2  mt-3 mb-3'>Teacher: {user.id}</div>

<div class="row ">
  <label for="colFormLabelLg" class="col-sm-2 col-form-label col-form-label-lg">TeacherName</label>
  <div class="col-sm-6">
  <label for="colFormLabelLg" class="col-sm-6 col-form-label col-form-label-lg">{user.name}</label>

  </div>
</div>
<div class="row ">
  <label for="colFormLabelLg" class="col-sm-2 col-form-label col-form-label-lg">Subject</label>
  <div class="col-sm-6">
  <label for="colFormLabelLg" class="col-sm-6 col-form-label col-form-label-lg">{user.subject}</label>

  </div>
</div>
<div class="row">
  <label for="colFormLabelLg" class="col-sm-2  col-form-label col-form-label-lg">Email</label>
  <div class="col-sm-6">
  <label for="colFormLabelLg" class="col-sm-6 col-form-label col-form-label-lg">{user.email}</label>

  </div>
</div>
<div class="row ">
  <label for="colFormLabelLg" class="col-sm-2 col-form-label col-form-label-lg">PhoneNumber</label>
  <div class="col-sm-6">
  <label for="colFormLabelLg" class="col-sm-6 col-form-label col-form-label-lg">{user.phonenumber}</label>

  </div>
</div>
<div class="row ">
  <label for="colFormLabelLg" class="col-sm-2 col-form-label col-form-label-lg">Salary</label>
  <div class="col-sm-6">
  <label for="colFormLabelLg" class="col-sm-6 col-form-label col-form-label-lg">{user.salary}</label>

  </div>
</div>

    </>

  )
}

export default TeacherView