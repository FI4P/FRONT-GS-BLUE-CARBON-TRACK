import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from './App.jsx'
import Home from './routes/Home/Home.jsx';
import Login from './routes/Login/Login.jsx';
import Error from './routes/Error/Error.jsx';
import './index.scss'
import Vessels from './routes/vessels/index.jsx';
import Report from './routes/report/index.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Login hasAccount={false} /> },
      { path: "/home", element: <Home/> },
      { path: "/login", element: <Login hasAccount={false} /> },
      { path: "/vessels", element: <Vessels /> },
      { path: "/report", element: <Report /> },



    ]
  },

])


ReactDOM.createRoot(document.getElementById('root')).render(

  
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>

  
)
