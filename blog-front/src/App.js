import "./App.css";
import { Routes, Route } from "react-router";
import PostsCard from "./pages/Home/PostsCard";
import Article from "./pages/blog/Article";
import Footer from "./component/Footer";
import Navbar from "./component/navbar/Navbar";
import Login from "./pages/login/Login";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<PostsCard />} />
        <Route path="/blog/:id" element={<Article />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
