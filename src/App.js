import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'  /* {}=>const/types/named imports */
import Menu from './component/Menu'               /* default imports */
import Register from './component/Auth/Register'
import Home from './component/Home'
import Create from './component/Create'
import Update from './component/Update'
import Login from './component/Auth/Login'
import Pnf from './component/Pnf'
import PrivateRouter from './component/PrivateRoute/PrivateRouter'

function App(props){
  return(
    <BrowserRouter>
      <Menu/>
      <Routes>    
        <Route element={<PrivateRouter/>}>
        <Route path={`/`} element={<Home/>}></Route>
        <Route path={`/create`} element={<Create/>}></Route>
        <Route path={`/update/:id`} element={<Update/>}></Route>
        </Route>
        <Route path={`/login`} element={<Login/>}></Route>
        <Route path={`/register`} element={<Register/>}></Route>
        <Route path={`/*`} element={<Pnf/>}></Route>
      </Routes>
    </BrowserRouter>
    
  )
}
//here routes=>acts like switch stmts
//route=>like cases
export default App
