import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
export default function AddUser() {
  let navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
  });

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (user.name !== "" && user.username !== "" && user.email !== "") {
      axios.post("http://localhost:8080/user", user);
      navigate("/");
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-5 shadow">
          <h2 className="text-center m-4">Register User</h2>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3  text-start">
              <label htmlFor="exampleInputEmail1" className="form-label mx-2 ">
                Email
              </label>
              <input
                type={"email"}
                className="form-control"
                id="exampleInputEmail1"
                name="email"
                value={user.email}
                onChange={(e) => onInputChange(e)}
              />
              <div id="emailHelp" className="form-text mx-2">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3 text-start">
              <label htmlFor="exampleInputName" className="form-label mx-2">
                Name
              </label>
              <input
                type={"text"}
                className="form-control"
                id="exampleInputName"
                name="name"
                value={user.name}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3 text-start">
              <label htmlFor="exampleInputUserName" className="form-label mx-2">
                UserName
              </label>
              <input
                type={"text"}
                className="form-control"
                id="exampleInputUserName"
                name="username"
                value={user.username}
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
            <Link className="btn btn-danger mx-2" to="/">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
