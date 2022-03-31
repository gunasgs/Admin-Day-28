import React from 'react'
import { useParams } from 'react-router-dom'


function UserEdit() {
    let params=useParams()
    console.log(params)
  return (
   <>
   <h2>Edit-User :  {params.id}</h2>
         <form class="row g-3 mb-4">
  <div class="col-lg-8">
    <label for="input" class="form-label">Name</label>
    <input type="text" class="form-control" id="i"/>
  </div>
  
  <div class="col-lg-8">
    <label for="input" class="form-label">Position</label>
    <input type="text" class="form-control"  id="i"/>
  </div>
  
  <div class="col-lg-8">
    <label for="inputAddress" class="form-label">Office</label>
    <input type="text" class="form-control" id="i" />
  </div>
  <div class="col-lg-8">
    <label for="inputAddress2" class="form-label">Age</label>
    <input type="number" class="form-control" id="inputAddress2"/>
  </div>
  <div class="col-lg-8">
    <label for="inputCity" class="form-label">Start Date</label>
    <input type="date" class="form-control" id="inputCity"/>
  </div>
 
  
  <div class="col-lg-8 mt-3">
    <button type="submit" class="btn btn-primary">Submit</button>
  </div>
</form>
   </>
  )
}

export default UserEdit