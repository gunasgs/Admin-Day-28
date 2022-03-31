import React from 'react'
import { Link, } from 'react-router-dom'

function Product() { 
   
    let data=[
        {
            id:1,
            Brand:"BMW",
            Price:"1CR",
            Model:"I8",
            Fuel:"Diesel",
            colors:"Red",
            Year:"2022"
        },
        {
            id:2,
            Brand:"AUDI",
            Price:"1CR",
            Model:"I8",
            Fuel:"Diesel",
            colors:"Red",
            Year:"2022"
        },
        {
            id:3,
            Brand:"BENZ",
            Price:"1CR",
            Model:"I8",
            Fuel:"Diesel",
            colors:"Red",
            Year:"2022"
        },
    ]
  return (
   <>
     <div class="d-sm-flex align-items-center justify-content-between mb-4">
       <h1 class="h3 mb-2 text-gray-800">Product</h1>
       <Link
         
         class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
         to={"/createproduct"} >
         <i class="fas fa-download fa-sm text-white-50"></i> Create Product
       </Link>
       
</div>

                    
               <div class="card shadow mb-4">

                   <div class="card-body">
                       <div class="table-responsive">
                           <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                               <thead>
                                   <tr>
                                   <td>Brand</td>
                                   <td>Price</td>
                                   <td>Model</td>
                                   <td>Fuel</td>
                                   <td>Colors</td>
                                   <td>Year</td>
                                   <td>Action</td>
                                   </tr>
                               </thead>
                               <tfoot>
                                   <tr>
                                   <td>Brand</td>
                                   <td>Price</td>
                                   <td>Model</td>
                                   <td>Fuel</td>
                                   <td>Colors</td>
                                   <td>Year</td>
                                   <td>Action</td>
                                   </tr>
                               </tfoot>
                               <tbody>
                               {
                                   data.map((dataa)=>{
                                       return <tr>
                                       <td>{dataa.Brand}</td>
                                       <td>{dataa.Price}</td>
                                       <td>{dataa.Model}</td>
                                       <td>{dataa.Fuel}</td>
                                       <td>{dataa.colors}</td>
                                       <td>{dataa.Year}</td>
                                       <td>
                                       <Link to={`/productview/${dataa.id}`} className='btn btn-primary btn-sm'>VIEW</Link>
                                       <Link to={`/productedit/${dataa.id}`} className='btn btn-success btn-sm'>EDIT</Link>
                                       <button  className='btn btn-danger btn-sm'>DELETE</button>
                                       </td>
                                   </tr>
                                
                                   })
                               }
                               </tbody>
                           </table>
                       </div>
                   </div>
               </div>
   </>
  )
}

export default Product