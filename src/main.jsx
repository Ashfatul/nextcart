import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from "react-router";
import router from '../routes.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/style.css';

createRoot(document.getElementById('root')).render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
)
