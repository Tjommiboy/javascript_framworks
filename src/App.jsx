import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./layout/MainLayout.jsx";
import HomePage from "./pages/homePage.jsx"; // Updated path and case
import CartPage from "./pages/cartPage.jsx"; // Updated path and case
import ContactPage from "./pages/contactPage.jsx"; // This one was working
import "./App.css";
import CartProvider from "./components/cartContext.jsx"; // Updated path
import ProductPage from "./pages/productPage.jsx"; // Updated path and case

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
