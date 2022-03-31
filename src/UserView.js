import React from 'react'
import { useParams } from 'react-router-dom'

function UserView() {
    let params=useParams()
  return (
      <>

    
    <div>User View<h1>{params.id} </h1></div>
    </>
  )
}

export default UserView