import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Getstart } from "./Pages/getstart/getstart";
import { Profilefoto } from "./Pages/profilefoto/profilefoto";
import { Name } from "./Pages/name/name";
import { Choosing } from "./Pages/choosing/choosing";
import { Create } from "./Pages/createhub/create";
import { Home } from "./Pages/home/home";
import { Profile } from "./Pages/profile/profile";
import { Assets } from "./Pages/assets/assets";
import { Discover } from "./Pages/discover/discover";
import { Members } from "./Pages/members/members";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<Getstart />} />
        <Route path="/profilefoto" element={<Profilefoto />} />
        <Route path="/name" element={<Name />} />
        <Route path="choosing" element={<Choosing />} />
        <Route path="/create" element={<Create />} />
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/assets" element={<Assets />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/members" element={<Members />} />
      </Routes>
    </BrowserRouter>
  );
};
