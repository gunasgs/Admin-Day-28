import axios from 'axios'
import React, {  useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
// import UserContext from './UserContext'

function UserView() {
    let params=useParams()
    const [user,setUser]=useState({})
    useEffect(async ()=>{
      let user=await axios.get(`https://62519153dfa31c1fbd6fbf0f.mockapi.io/users/${params.id}`)
      setUser(user.data)
    })
    // const userContext=useContext(UserContext)
  return (
      <>

    
   <div className='h2  mt-3 mb-3'>Student: {user.id}</div>

<div class="row ">
  <label for="colFormLabelLg" class="col-sm-2 col-form-label col-form-label-lg">Name</label>
  <div class="col-sm-3">
  <label for="colFormLabelLg" class="col-sm-2 col-form-label col-form-label-lg">{user.name}</label>

  </div>
</div>
<div class="row ">
  <label for="colFormLabelLg" class="col-sm-2 col-form-label col-form-label-lg">FatherName</label>
  <div class="col-sm-3">
  <label for="colFormLabelLg" class="col-sm-2 col-form-label col-form-label-lg">{user.fathername}</label>

  </div>
</div>
<div class="row">
  <label for="colFormLabelLg" class="col-sm-2  col-form-label col-form-label-lg">Email</label>
  <div class="col-sm-3">
  <label for="colFormLabelLg" class="col-sm-2 col-form-label col-form-label-lg">{user.email}</label>

  </div>
</div>
<div class="row ">
  <label for="colFormLabelLg" class="col-sm-2 col-form-label col-form-label-lg">PhoneNumber</label>
  <div class="col-sm-2">
  <label for="colFormLabelLg" class="col-sm-2 col-form-label col-form-label-lg">{user.phonenumber}</label>

  </div>
</div>

    </>

  )
}

export default UserView