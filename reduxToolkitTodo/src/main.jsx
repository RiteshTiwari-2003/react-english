import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './app/store.js'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
/**redux and react-redux both are different different thing , redux is a core library,and react-redux 
 * is implementation of that redux for wiring for a good communication between react and redux , when we use redux toolkit more work done going automatically , as like never muted state in redux not required because redux toolkit do this thing automatically
 * in application have single store which called as single source of truth
 */