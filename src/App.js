
import {Routes, Route} from 'react-router-dom';
import {useState,createContext,useEffect} from 'react'
import './App.css';
import About from './components/Pages/About';
import Contact from './components/Pages/Contact';
import Login from './components/Pages/Login';
import Menu from './components/Pages/Menu';
import Cart from './components/Pages/Cart';
import Product from './components/Pages/Product/product';
// import foodList from './data/data'
import Signup from './components/Pages/Sign up/signUp';
import AdminLogin from './components/Pages/Admin/AdminLogin/adminLogin';
import AdminPage from './components/Pages/Admin/AdminPage/adminPage';
import Home from './components/Pages/Home/home';
import Info from './components/Pages/Info/info';
import CateAdmin from './components/Pages/Admin/Category/category';
import UpdateCategory from './components/Pages/Admin/AdminCategory/updateCategory';
import AddCategory from './components/Pages/Admin/AdminCategory/addCate';
import AdProduct from './components/Pages/Admin/Product/product';
import UpdateProduct from './components/Pages/Admin/AdminCategory/updateProduct';
import AddProduct from './components/Pages/Admin/AdminCategory/addPrd';
import ProtectRoutes from './ProtectRoutes';
import ProtectRoutesUser from './ProtectRoutesUser';
import getCart from './api/cartApi';
import getDish, { getCate } from './api/dishApi';
import ErrorPage from './components/Pages/404 Page/errorPage';
import Forgetpass from './components/Pages/Forget Pass/forgetPass';
import Sendsuccess from './components/Pages/Forget Pass/sendSuccess';
import EnterNewPass from './components/Pages/EnterNewPass/enterNewPass';





export const AddContext = createContext();
let foodList=[];
let cateList =[];
function App() {

    const [cartItems, setCartItems]=useState([]);

    // update cart by user
    useEffect(()=>{

      // call api
      (async () => {
        
        const res = await getCart(localStorage.getItem('user'))
        const food = await getDish(localStorage.getItem('user'));
        const cate = await getCate();
        cateList = cate;
        foodList=food;
        if(res.message!==undefined)
          setCartItems([]);

        else if(res!==undefined && res.message===undefined){
            setCartItems(res);
          }

      })()
      
    },[])

    
    function onAdd(product){
      const exist = cartItems.find(x=>x.name === product.name);

      if(exist){
          setCartItems(cartItems.map(x=>x.id === product.id ? {...exist, quantity: exist.quantity+1}: x));
      }
      else{
          setCartItems([...cartItems,{...product,quantity:1}]);
      }
    }

    function onRemove(product) {
      for(var i=0;i<cartItems.length;i++){
        if(cartItems[i].name ===product.name){
          setCartItems(cartItems.splice(i,1)); 
          console.log(cartItems);
        }
      }
    }

  return (
    <>
      <AddContext.Provider value={cartItems}>
    <Routes>

      <Route path="/Menu" element={<Menu foodList={foodList} cateList ={cateList}/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/Contact" element={<Contact/>}/>
      <Route path="/Login" element={<Login/>}/>
      <Route path="/ForgetPass" element={<Forgetpass/>}/>
      <Route path="/sendSuccess" element={<Sendsuccess/>}/>
      
      <Route path="/Product/:_id" element={<Product cartItems={cartItems} onAdd={onAdd} foodList= {foodList}/>}/>
      <Route path="/SignUp" element={<Signup/>}/>
      <Route path="/EnterNewPassword" element={<EnterNewPass/>}/>


      <Route element={<ProtectRoutesUser/>}> 
        <Route path="/Cart" element={<Cart onRemove={onRemove} />}/>
        <Route path="/info" element={<Info/>}/>
      </Route>

      <Route path="/" element={<Home foodList={foodList}/>}/>
      <Route path="*" element={<ErrorPage/>}/>


      {/*Admin route */}
      
      <Route path="/Login/admin" element={<AdminLogin/>}/>
      <Route element={<ProtectRoutes/>}>
        <Route path="/admin" element={<AdminPage/>}/>
        <Route path="/admin/cate" element={<CateAdmin/>}/>
        <Route path="/admin/cate/:_id" element={<UpdateCategory/>}/>
        <Route path="/admin/cate/add" element={<AddCategory/>}/>
        <Route path="/admin/product" element={<AdProduct/>}/>
        <Route path="/admin/product/:_id" element={<UpdateProduct/>}/>
        <Route path="/admin/product/add" element={<AddProduct/>}/>
      </Route>
    
    </Routes>
      </AddContext.Provider>

    </>
  )
}

export default App;
