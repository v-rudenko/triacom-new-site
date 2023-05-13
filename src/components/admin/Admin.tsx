import { useState, useEffect } from "react";
import Login from "./auth/Login";

// type Props = {}

const Admin = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  if (isLoggedIn === true) {
    return <h1>Admin Dashboard</h1>
  } else {
    return <Login />
  }
};

export default Admin;
