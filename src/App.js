import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import ExploreTab from "./components/ExploreTab";
import Blogs from "./components/Blogs";
import About from "./components/About";
import Home from "./components/Home";
import SharedLayout from "./components/SharedLayout";
import ErrorPage from "./components/ErrorPage";


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />}/>
        <Route path="about" element={<About />}/>
        <Route path="blogs" element={<Blogs />} />
        <Route path="exploreTab" element={<ExploreTab />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
