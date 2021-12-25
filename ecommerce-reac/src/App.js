import logo from './logo.svg';
import './App.css';
import TabBar from './components/TabBar';
import NavigationBar from './components/NavigationBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router , Routes, Redirect, Link, Route} from "react-router-dom";
import HomePage from './components/index'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import WishList from './components/WishList';
import SignupEmail from './components/SignUpEmail';
import Signup from './components/SignUp';
import Qrcode from './components/QrCode';
import ProductPage from './components/ProductPage';
import Followstore from './components/FollowedStore';
import Fashion from './components/FashionPage';
import CheckOut from './components/CheckOut';
import BuyNow from './components/BuyNow';
import Login from './components/Login';
import MyOrder from './components/MyOrder';
import Electronic from './components/ElectronicPage';
import Store from './components/Store';
function App() {
  return (
    <>
    <Router>
      <Routes>
      <Route  exact path="/" element={<HomePage/>}/>
        <Route path="/ElectronicPage" element={<Electronic/>}></Route>
        <Route path="/Store" element={<Store/>}></Route>
        <Route path="/MyOrder" element={<MyOrder/>}></Route>
        <Route path="/ProductPage" element={<ProductPage/>}></Route>
        <Route path="/FollowedStore" element={<Followstore/>}></Route>
        <Route path="/NavigationBar" element={<NavigationBar/>}></Route>
        <Route path="/WishList" element={<WishList/>}></Route>
        <Route path="/BuyNow" element={<BuyNow/>}></Route>
        <Route path="/CheckOut" element={<CheckOut/>}></Route>
        <Route path="/Login" element={<Login/>}></Route>
        <Route path="/FashionPage" element={<Fashion/>}></Route>
        <Route path="/SignUpEmail" element={<SignupEmail/>}></Route>
        <Route path="/SignUp" element={<Signup/>}></Route>
        <Route path="/QrCode" element={<Qrcode/>}></Route>
      </Routes>
    </Router>
  
    </>
  );
}

export default App;
