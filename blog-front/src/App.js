import "./App.css";
import { Routes, Route } from "react-router";
import PostsCard from "./pages/Home/PostsCard";
import Article from "./pages/blog/Article";
import Navbar from "./component/navbar/Navbar";
import Login from "./pages/login/Login";
import SignUp from "./pages/login/SignUp";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<PostsCard />} />
        <Route path="/blog/:id" element={<Article />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
