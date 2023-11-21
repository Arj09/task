import { UserContextProvider } from "./Component/ContextAPI/ContextProvider";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from "./Component/Home";
import { Login } from "./Component/Login";
import { Cart } from "./Component/Cart";
import { ProductOverview } from "./Component/ProductOverview";


function App() {
  return (
   <UserContextProvider>
    <BrowserRouter>
    <Routes>
      <Route index element={<Home/>} />
      <Route path="login"  element={<Login/>}/>
      <Route path="cart" element={<Cart/>} />
      <Route path="overview" element={<ProductOverview/>}  />
      



    </Routes>
    
    </BrowserRouter>


   </UserContextProvider>
  );
}

export default App;
