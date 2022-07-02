import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Nav from "../components/Nav";
import Home from "../components/Home";
import About from "../components/About";
import SearchApi from "../components/SearchApi";
import NotFound from "../components/NotFound";
import SearchBooks from "../components/SearchBooks";

const AppRouter = () => {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" component={<Home />} />
        <Route path="/about" component={<About />} />
        <Route path="/search" component={<SearchApi />} />
        <Route path="/searchbooks" component={<SearchBooks />} />
        <Route path="/search/:id" />
        <Route component={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
