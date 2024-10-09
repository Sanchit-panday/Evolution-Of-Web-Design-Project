import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import { Header } from './Components/Header'
import Home from './Pages/Home'
import Router from './Router/Router'
function App() {
  // const router = createBrowserRouter([
  //   {
  //     path: "/Home",
  //     element: <Home/>,
  //   },
  //   {}
  // ])
  return (
    <>
      <Header />
      <RouterProvider router = {Router}/>
    </>
  )
}

export default App
