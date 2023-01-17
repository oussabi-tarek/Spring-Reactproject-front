import "./App.css";
import Navbar from "./layout/Navbar";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import AddUser from "./users/AddUser";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EditUser from "./users/EditUser";
import ViewUser from "./users/ViewUser";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addUser" element={<AddUser />} />
          <Route path="/edituser/:id" element={<EditUser />} />
          <Route path="/viewuser/:id" element={<ViewUser />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
