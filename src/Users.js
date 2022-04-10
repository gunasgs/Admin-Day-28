import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import UserContext from './UserContext';
import UserEdit from './UserEdit';
import UserView from './UserView';
import swal from "sweetalert";

function Users() {
    const [usersData,setUser]=useState([])

    useEffect(async ()=>{
let users=await axios.get("https://62519153dfa31c1fbd6fbf0f.mockapi.io/users")
setUser(users.data)
    },[])
    // useEffect(async () => {
    //  let users= await axios.get("https://62519153dfa31c1fbd6fbf0f.mockapi.io/users")
    // setUser(users.data)
    
    // }, [])
    const [user, setUsers] = useState([]);
  
      async function fetchData() {
        let users = await axios.get(
          "https://62519153dfa31c1fbd6fbf0f.mockapi.io/users"
        );
        setUsers(users.data);
      }
      fetchData();
   
  
    
    const deleteUser = (id) => {
        swal({
          title: "Are you sure?",
          text: "Once deleted, you will not be able to recover!",
          icon: "warning",
          buttons: true,
          dangerMode: true,
        }).then((willDelete) => {
          if (willDelete) {
            axios
              .delete(`https://62519153dfa31c1fbd6fbf0f.mockapi.io/users/${id}`)
              .then(() => {
                getData();
              });
    
            swal(" Your file has been deleted!", {
              icon: "success",
            });
          } else {
            
          }
        });
      };
      const getData = () => {
        axios.get(`https://62519153dfa31c1fbd6fbf0f.mockapi.io/users`)
          .then((getData) => {
               setUsers(getData.data);
          });
      };
    
  return (
   <>
     <div class="d-sm-flex align-items-center justify-content-between mb-4">
  <h1 class="h3 mb-2 text-gray-800">Student List</h1>
  <Link
         
          class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
          to={"/createuser"} >
          <i class="fas fa-download fa-sm text-white-50"></i> Create Student
        </Link>
        
</div>
                    
                    <div class="card shadow mb-4">

                        <div class="card-body">
                            <div class="table-responsive">
                                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Father Name</th>
                                            <th>Email</th>
                                            <th>Phone Number</th>                                           
                                            <th>Action</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                      
                                        {
                                            usersData.map((user,index)=>{
                                                return<tr>
                                            <td>{user.name}</td>
                                            <td>{user.fathername}</td>
                                            <td>{user.email}</td>
                                            <td>{user.phonenumber}</td>
                                          
                                            <td>
                                       <Link to={`/userview/${user.id}`} element={<UserView/>} className='btn btn-primary btn-sm mx-1'>VIEW</Link>
                                       <Link to={`/useredit/${user.id}`} element={<UserEdit/>} className='btn btn-success btn-sm mx-1'>EDIT</Link>
                                       <button
                          onClick={() => deleteUser(user.id)}
                          className="btn btn-danger"
                        >
                          Delete
                        </button>
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