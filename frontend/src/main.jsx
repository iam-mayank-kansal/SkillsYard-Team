import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home } from './pages/Home'
import { SignUp } from './pages/SignUp'
import { UserProfiles } from './pages/UserProfiles'
import { AppLayout } from './App'
import { ThankSignUp } from './pages/ThanksRegisterr'


const Rout_links = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/userprofiles",
        element: <UserProfiles />
      },
      {
        path: "/thanksSignUp",
        element: < ThankSignUp/>
      }
    ]
  },

])
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={Rout_links} />
)
