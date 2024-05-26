import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Getstart } from "./Pages/getstart/getstart";
import { Profilefoto } from "./Pages/profilefoto/profilefoto";
import { Name } from "./Pages/name/name";
import { Choosing } from "./Pages/choosing/choosing";
import { Create } from "./Pages/createhub/create";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<Getstart />} />
        <Route path="/profilefoto" element={<Profilefoto />} />
        <Route path="/name" element={<Name />} />
        <Route path="choosing" element={<Choosing />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </BrowserRouter>
  );
};
