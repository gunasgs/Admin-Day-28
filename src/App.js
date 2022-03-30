import "./App.css";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import Dashboard from "./Dashboard";
// import Tables from './Tables';

function App() {
  return (
    <>
      <div id="wrapper">
        <Sidebar />
        <div id="content-wrapper" class="d-flex flex-column">
          <div id="content">
            <Topbar />
            <div class="container-fluid">
             
              <Dashboard />

              {/* <Tables/> */}
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
