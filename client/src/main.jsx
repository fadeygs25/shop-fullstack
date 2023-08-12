/**
=========================================================
* Material Tailwind Dashboard React - v2.0.0
=========================================================
* Product Page: https://www.creative-tim.com/product/material-tailwind-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-tailwind-dashboard-react/blob/main/LICENSE.md)
* Coded by Creative Tim
=========================================================
* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@material-tailwind/react";
import { MaterialTailwindControllerProvider } from "@/context";
import "../public/css/tailwind.css";
import { UserProvider } from "./store/context/UserContext";
import { ProductProvider } from "./store/context/ProductContext";
import { CategoryProvider } from "./store/context/CategoryContext";
import { OrderProvider } from "./store/context/OrderContext";
import { RatingProvider } from "./store/context/RatingContext";
import { CartProvider } from "./store/context/CartContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <CartProvider>
          <RatingProvider>
            <OrderProvider>
              <UserProvider>
                <ProductProvider>
                  <CategoryProvider>
                    <MaterialTailwindControllerProvider>
                      <App />
                    </MaterialTailwindControllerProvider>
                  </CategoryProvider>
                </ProductProvider>
              </UserProvider>
            </OrderProvider>
          </RatingProvider>
        </CartProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
