import "./App.css";
import { Routes, Route } from "react-router";
import PostsCard from "./pages/Home/PostsCard";
import Article from "./pages/blog/Article";
import Navbar from "./component/navbar/Navbar";
import Login from "./pages/login/Login";
import SignUp from "./pages/login/SignUp";
import Propose from './pages/propos/Propose';
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<PostsCard />} />
        <Route path="/blog/:id" element={<Article />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/propos" element={<Propose/>}/>
      </Routes>
    </>
  );
}

export default App;
