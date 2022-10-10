import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Components/Home/Home';
import Bari from './Components/Home/Bari';

function App() {
  const router = createBrowserRouter([
    {path: '/', element: <div>This is default page</div>},
    {path: '/home', element: 
      <div>
        <Home></Home> 
        <Bari></Bari>
      </div>},
    {path: 'about', element: <div>About</div>},

  ])

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
