import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home";
import Cart from "./pages/cart";
import NotFound from "./pages/notFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
