import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./routes/page/Home";
import About from "./routes/page/About";
import ProductList from "./routes/page/ProductList";

function App() {
    return (
        // Routes의 역할
        // 사용자가 요청한 URL 중 일치하는 컴포넌트를 랜더링해주는 컴포넌트
        // Route의 역할
        // path에 정의된 요청이 들어왔을 때 element의 정으된 컴포넌트를 랜더링하는 역할
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/prdList" element={<ProductList />} />
        </Routes>
    );
}

export default App;
