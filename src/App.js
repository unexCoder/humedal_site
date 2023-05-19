import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import './App.css';
import Home from './components/Home';
import About from './components/About';
import NotFound from './components/NotFound';

const router = createBrowserRouter(
  createRoutesFromElements(
   <Route path='/'>
      <Route index element={<Home/>} /> 
      <Route path='about' element={<About/>} /> 
      <Route path='*' element={<NotFound/>} /> 
   </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
