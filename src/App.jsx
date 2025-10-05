// ./App.jsx

import React from "react";
import Home from "../Pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./Components/Layout/AppLayout";
import ErrorPage from "./Components/ErrorPages/ErrorPage";
import Sarees from "../Pages/Sarees";
import ProductDetail from "../Pages/SareesPages/ProductDetail"; // यह साड़ी और दुपट्टा दोनों के लिए है
import DupattasCollection from "../Pages/Dupattas";
import CollectionGrid from "../Pages/CollectionGrid"; // Sale Landing Page
import EmptyCollection from "../Pages/EmptyCollection";
import Blogs from "../Pages/Blogs";
import LoginPage from "../Pages/LoginPage";
import RegistrationPage from "../Pages/RegistrationPage";
import ForgotPasswordPage from "../Pages/ForgotPasswordPage";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          // HOME Page
          path: "/",
          element: <Home />
        },

        // --- SAREES Routes ---
        {
          // 1. SAREES Collection: /sarees
          path: "sarees", // /sarees
          element: <Sarees />
        },
        {
          // 2. SAREE Product Detail: /sarees/product/123
          path: "sarees/product/:productId",
          element: <ProductDetail />
        },

        // --- DUPATTAS Routes (Using '/dupattas' for consistency) ---
        {
          // 3. DUPATTAS Collection: /dupattas
          path: "/duppata", // /dupattas
          element: <DupattasCollection />
        },
        {
          // 4. DUPATTA Product Detail: /dupattas/product/123
          path: "dupattas/product/:productId",
          element: <ProductDetail />
        },

        // --- SALE/COLLECTION Grid Routes ---
        {
          // 5. SALE Landing Page: /sale
          path: "sale",
          element: <CollectionGrid />
        },
        {
          // 6. SALE -> ALL Collection: /sale/all (Sarees component reuse)
          // यह रूट SALE Grid में "All" लिंक से आता है.
          path: "sale/all",
          element: <Sarees />
        },
        {
          path: "sale/bhagalpuri",
          element: <Sarees />

        },
        {
          path: "sale/cotton",
          element: <Sarees />
        },
        {
          path: "sale/banarasi", // यह लिंक Banarasi Saree कार्ड से आएगा
          element: <EmptyCollection />
        },
        {
          path: "sale/chanderi",
          element: <EmptyCollection />
        },
        {
          path: "sale/dupattas-stoles",
          element: <EmptyCollection />
        },
        {
          path: "blogs", // URL: /blogs
          element: <Blogs />
        },
        {
          path: "login", // URL: /login
          element: <LoginPage />
        },
        {
          path: "account/register", // URL: /account/register
          element: <RegistrationPage />
        },
        {
          path: "account/forgot-password", // URL: /account/forgot-password
          element: <ForgotPasswordPage/>
        },

      ]
    }
  ])

  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;