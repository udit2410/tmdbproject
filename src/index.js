import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MovieDetails from './Components/MovieDetails';

const appRouter=createBrowserRouter([
    {
        path:"/",
        element:<App></App>
    },
    {
      path:"/movie",
      element:<MovieDetails></MovieDetails>
  }
])

 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   
    <RouterProvider router={appRouter}></RouterProvider>
   
);

 