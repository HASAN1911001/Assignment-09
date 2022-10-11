import React from 'react'
import Home from './components/Home'
import Navigation from './components/Navigation'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Statistics from './components/Statistics'
import Blog from './components/Blog'

function App() {
    const router = createBrowserRouter([
      {path: '/', element: <Home></Home>},
      {path: '/statistics', element: <Statistics></Statistics> },
      {path: '/blog', element: <Blog></Blog>}
  ])
  return (
    <div>

        <RouterProvider router={router}></RouterProvider>
    </div>
  );

}

export default App