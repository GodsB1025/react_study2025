import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import "./index.css";
import App from "./App.jsx";

// BrowserRouter의 역할
// - 페이지 이동 관련 컴포넌트를 동작시켜주는 컴포넌트
createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);
