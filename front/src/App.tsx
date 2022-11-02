import { BrowserRouter, Routes, Route } from "react-router-dom";
import BlogContent from "./pages/BlogContent";
import Home from "./pages/Home";
import Upload from "./pages/Upload";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={<Home />}
                ></Route>
                <Route
                    path="/upload"
                    element={<Upload />}
                ></Route>
                <Route
                    path="/blogPost/:id"
                    element={<BlogContent />}
                ></Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
