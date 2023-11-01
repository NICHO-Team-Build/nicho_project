import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MineInformation from "./components/MineInformation";

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<MineInformation />} />
                    <Route path="/preview" element={<MineInformation />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
