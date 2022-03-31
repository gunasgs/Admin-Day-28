import React from 'react'
import { Link } from 'react-router-dom';
import UserEdit from './UserEdit';
import UserView from './UserView';


function Users() {
    let data=[
        {
            id:1,
            name:"Tiger Nixon",
            position:"System Architect",
            Office:"Tokyo",
            Age:"44",
            startdate:"2014",
            salary:"22332"
        }, 
        {
            id:2,
            name:"Nixon",
            position:"System Architect",
            Office:"japan",
            Age:"45",
            startdate:"2015",
            salary:"26786"
        },
        {
            id:3,
            name:"Nixo",
            position:"System",
            Office:"usa",
            Age:"43",
            startdate:"2012",
            salary:"24332"
        },
    ]
  return (
   <>
     <div class="d-sm-flex align-items-center justify-content-between mb-4">
  <h1 class="h3 mb-2 text-gray-800">UserList</h1>
  <Link
         
          class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
          to={"/createuser"} >
          <i class="fas fa-download fa-sm text-white-50"></i> Create User
        </Link>
        
</div>
                    
                    <div class="card shadow mb-4">

                        <div class="card-body">
                            <div class="table-responsive">
                                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Position</th>
                                            <th>Office</th>
                                            <th>Age</th>
                                            <th>Start date</th>
                                            <th>Salary</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tfoot>
                                        <tr>
                                            <th>Name</th>
                                            <th>Position</th>
                                            <th>Office</th>
                                            <th>Age</th>
                                            <th>Start date</th>
                                            <th>Salary</th>
                                            <th>Action</th>
                                        </tr>
                                    </tfoot>
                                    <tbody>
                                      
                                        {
                                            data.map((user)=>{
                                                return<tr>
                                            <td>{user.name}</td>
                                            <td>{user.position}</td>
                                            <td>{user.Office}</td>
                                            <td>{user.age}</td>
                                            <td>{user.startdate}</td>
                                            <td>{user.salary}</td>
                                            <td>
                                       <Link to={`/userview/${user.id}`} element={<UserView/>} className='btn btn-primary btn-sm'>VIEW</Link>
                                       <Link to={`/useredit/${user.id}`} element={<UserEdit/>} className='btn btn-success btn-sm'>EDIT</Link>
                                       <button className='btn btn-danger btn-sm'>DELETE</button>
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

export default Users;