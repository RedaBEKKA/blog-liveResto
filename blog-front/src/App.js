import "./App.css";
import { Routes, Route } from "react-router";
import PostsCard from "./pages/Home/PostsCard";
import Article from "./pages/blog/Article";
import SliderItems from "./component/SliderItems";
import Footer from "./component/Footer";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<PostsCard />} />
        <Route path="/blog/:id" element={<Article />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
