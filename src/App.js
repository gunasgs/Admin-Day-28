import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import Dashboard from "./Dashboard";
import Users from "./Users";
import Product from "./Product";
import CreateUser from "./CreateUser";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateProduct from "./CreateProduct";
import UserView from "./UserView";
import UserEdit from "./UserEdit";
import ProductView from "./ProductView";
import ProductEdit from "./ProductEdit";
import { UserProvider } from "./UserContext";
import { useState } from "react";

function App() {
  const [name,setUserName]=useState("Gunasgs")
  const [product,setProduct]=useState([])
  const [users,setUsers]=useState([])
  return (
    <>
      <BrowserRouter>
        <div id="wrapper">
        <UserProvider value={{name,setUserName,product,setProduct,users,setUsers}}>
          <Sidebar />
          <div id="content-wrapper" class="d-flex flex-column">
            <div id="content">
              <Topbar />
              <div class="container-fluid">
                <Routes>
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/users" element={<Users />} />
                  <Route path="/createuser" element={<CreateUser />} />
                  <Route path="/product" element={<Product />} />
                  <Route path="/createproduct" element={<CreateProduct />} />
                  <Route path="/productview/:id" element={<ProductView />} />
                  <Route path="/productedit/:id" element={<ProductEdit />} />
                  <Route path="/userview/:id" element={<UserView />} />
                  <Route path="/useredit/:id" element={<UserEdit />} />
                </Routes>
              </div>
            </div> 
          </div> 
          </UserProvider>
        </div> 
      </BrowserRouter>
      </>
  );
}

export default App;
