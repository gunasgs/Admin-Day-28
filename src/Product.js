import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import UserContext from "./UserContext";

function Product() {
  const [product,setproduct]=useState([])
  useEffect(async() => {
    let product=await axios.get("https://62519153dfa31c1fbd6fbf0f.mockapi.io/product")
    setproduct(product.data)

  }, [])
  const[product1,setProduct1]=useState([]);
  async function fetchData(){
    let product1=await axios.get("https://62519153dfa31c1fbd6fbf0f.mockapi.io/product");
    setProduct1(product1.data)
  }
  fetchData();
  const deleteTeacher = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        axios
          .delete(`https://62519153dfa31c1fbd6fbf0f.mockapi.io/product/${id}`)
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
    axios.get(`https://62519153dfa31c1fbd6fbf0f.mockapi.io/product`)
      .then((getData) => {
           setproduct(getData.data);
      });
  };
  const userContext=useContext(UserContext)
  return (
    <>
      <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-2 text-gray-800">Teacher</h1>
        <Link
          class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
          to={"/createproduct"}
        >
          <i class="fas fa-download fa-sm text-white-50"></i> Create Teacher
        </Link>
      </div>

      <div class="card shadow mb-4">
        <div class="card-body">
          <div class="table-responsive">
            <table
              class="table table-bordered"
              id="dataTable"
              width="100%"
              cellspacing="0"
            >
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Subject</th>
                  <th>Email</th>
                  <th>PhoneNumber</th>
                  <th>Salary</th>                  
                  <th>Action</th>
                </tr>
              </thead>
            
              <tbody>
                {
                  product.map((dataa,index) => {
                  return (
                    <tr>
                      <td>{dataa.name}</td>
                      <td>{dataa.subject}</td>
                      <td>{dataa.email}</td>
                      <td>{dataa.phonenumber}</td>
                      <td>{dataa.salary}</td>
                     
                      <td>
                        <Link
                          to={`/Productview/${dataa.id}`}
                          className="btn btn-primary btn-sm mr-2"
                        >
                          VIEW
                        </Link>
                        <Link
                          to={`/productedit/${dataa.id}`}
                          className="btn btn-success btn-sm mr-2"
                        >
                          EDIT
                        </Link>
                        <button onClick={() => deleteTeacher(dataa.id)} className ="btn btn-danger mr-2"> Delete </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
