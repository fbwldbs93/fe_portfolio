import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Upload from "./pages/Upload";

const App = () => {
    return (
        <div>
            <Router>
                <Routes>
                    <Route
                        path="/"
                        element={<Home />}
                    />
                    <Route
                        path="/write"
                        element={<Upload />}
                    />
                </Routes>
            </Router>
        </div>
    );
};

export default App;
