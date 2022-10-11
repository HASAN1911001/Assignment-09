import React from 'react'
import Home from './components/Home'
import Navigation from './components/Navigation'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Statistics from './components/Statistics'
import Blog from './components/Blog'
import Quiz from './components/Quiz'

function App() {
    const router = createBrowserRouter([
      {path: '/', element: <Home></Home>},
      {path: '/statistics', element: <Statistics></Statistics> },
      {path: '/blog', element: <Blog></Blog>},
      {path: '/quiz/:id',
        loader: async ({params}) =>{
          return fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`)
        },

        // loader: async ({params.skillId}) => {
        //   // console.log(params);
        //   return fetch('https://openapi.programming-hero.com/api/quiz/${params.skillId}')
        // }
        element: <Quiz></Quiz>},
      {path: '*', element: <div>
        <h1>This page does not exist!!!</h1>
      </div>}
  ])
  return (
    <div>

        <RouterProvider router={router}></RouterProvider>
    </div>
  );

}

export default App