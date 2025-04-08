import React from "react";
import ReactDOM from "react-dom/client";
import './components/i18n';
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

import MainPage from "./components/main_page"
import WeightPriceComparator from "./components/weight_comparise"

function App() {
    return (
        <div>
            <BrowserRouter>
            <Routes>            
                <Route path="*" element={<MainPage />} />
                <Route path="/weight_comparison" element={<WeightPriceComparator />} />
                
            </Routes>
            </BrowserRouter>
        </div>
    )
}

const app = ReactDOM.createRoot(document.getElementById("App"));
app.render(<App />);