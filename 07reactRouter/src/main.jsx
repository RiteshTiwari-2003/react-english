import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter,createRoutesFromElements, Route } from 'react-router-dom'
import Contact from './components/Contact/Contact.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import User from './components/User/User.jsx'
import Github,{githubInfoLoader} from './components/Github/Github.jsx'
const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='user/' element={<User/>}>
      <Route path=':userId' element={<User/>}/></Route>
      <Route loader={githubInfoLoader} path='github' element={<Github/>}/>
      <Route path='*' element={<div>Not found</div>}/> 

    </Route>//this routes actually come from the react router dom and this routes actually work like a component, path tells that every thing go inside the path and what is the element that you want to load every time, every single
    //time you had to follow same syntax you havd to tell it the path and what element to load in that path, element simply means what component you want to load
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
/**here path="*" means error 404 found */