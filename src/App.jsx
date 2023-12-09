
import { RouterProvider } from 'react-router-dom'
import './App.scss'
import router from './Routers/Router'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
 
  return (
    <>

<ToastContainer

style={{zIndex : 1,}}

position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>

     <RouterProvider router={router}/>
    </>
  )
}

export default App
