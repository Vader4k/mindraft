import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./layout/Layout";
import Article from "./pages/Article";
import BlogTitle from "./pages/BlogTitle";
import GenerateImages from "./pages/GenerateImages";
import ObjectRemoval from "./pages/ObjectRemoval";
import RemoveBackground from "./pages/RemoveBackground";
import ResumeReviewer from "./pages/ResumeReviewer";
import Overview from "./pages/Overview";
import Settings from "./pages/Settings";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Layout />}>
          <Route index element={<Overview />} />
          <Route path="article" element={<Article />} />
          <Route path="blog" element={<BlogTitle />} />
          <Route path="generate-images" element={<GenerateImages />} />
          <Route path="object-removal" element={<ObjectRemoval />} />
          <Route path="background-removal" element={<RemoveBackground />} />
          <Route path="resume-review" element={<ResumeReviewer />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
