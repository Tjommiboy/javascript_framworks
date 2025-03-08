import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import HomePage from "../src/pages/homepage";
import CartPage from "./pages/cartpage";
import ContactPage from "./pages/contactPage";

import "./App.css";
import CartProvider from "./components/CartContext";
import ProductPage from "./pages/productpage";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/contactPage" element={<ContactPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
      </Route>
    )
  );
  return (
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  );
};

export default App;
