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
import VolumePriceComparator from "./components/volume_comparise"
import UnitPriceComparator from "./components/unit_comparise"

function App() {
    return (
        <div>
            <BrowserRouter>
            <Routes>            
                <Route path="*" element={<MainPage />} />
                <Route path="/weight_comparison" element={<WeightPriceComparator />} />
                <Route path="/volume_comparison" element={<VolumePriceComparator />} />
                <Route path="/unit_comparison" element={<UnitPriceComparator />} />
            </Routes>
            </BrowserRouter>
        </div>
    )
}

const app = ReactDOM.createRoot(document.getElementById("App"));
app.render(<App />);