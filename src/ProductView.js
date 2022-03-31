import React from 'react'
import { useParams } from 'react-router-dom'

function ProductView() {
    let paramss=useParams()
  return (
   <div>View-Product <h2>{paramss.id}</h2> </div>
  )
}

export default ProductView