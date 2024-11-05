import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
const reactElement={
    type:"a",
    props:{
        href:"https://google.com",
        target:'_blank'
    },
    children:"Click me to vigit Google"
}
function MyApp(){
    return(
        <div>Custom react app</div>
    )
}
const AnotherElement=(
    <a href="https://www.google.com" target="_blank">Visit Google</a>
)
const AReactElement=React.createElement(
    'a',
    {href:'https://www.google.com', target:'_blank'},
    'click to visit google'
)


createRoot(document.getElementById('root')).render(
  
    //AnotherElement
    AReactElement
  
)
