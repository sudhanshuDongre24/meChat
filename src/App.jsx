import React from "react";
import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";

import Login from "./Components/Login";
import Chats from "./Components/Chats";
const App = () => {
  return (
    <div style={{ fontFamily: "Avenir" }}>
      <AuthProvider>
        <Routes>
          <Route path="/chats" Component={Chats} />
          <Route path="/" Component={Login} />
        </Routes>
      </AuthProvider>
    </div>
  );
};

export default App;
