import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./layout/MainLayout.jsx";
import HomePage from "./pages/homepage.jsx";
import CartPage from "./pages/cartpage.jsx";
import ContactPage from "./pages/contactpage.jsx";
import "./App.css";
import CartProvider from "./components/CartContext.jsx";
import ProductPage from "./pages/productpage.jsx";
import CheckoutPage from "./pages/checkoutpage.jsx";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
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
