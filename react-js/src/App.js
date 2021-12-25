
import './App.css';
import './index.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavList from './components/navList';
import reportWebVitals from './reportWebVitals';
import Banner from './components/Banner'
import JustForYou from './components/JustForYou';
import TabBar from './components/TabBar';
import NavigationBar from './components/NavigationBar'
import ProductSlider from './components/ProductSlider'
import { BrowserRouter as Router , Routes, Redirect, Link, Route} from "react-router-dom";
import HomePage from './components/index'
import Fashion from './components/FashionPage';
import Qrcode from './components/QrCode';
import CheckOut from './components/CheckOut';
import Login from './components/Login';
import Signup from './components/SignUp';
import SignupEmail from './components/SignUpEmail';
import Addcart from './components/AddCart';
import Electronic from './components/ElectronicPage';
import Followstore from './components/FollowedStore';
import ProductPage from './components/ProductPage';
import WishList from './components/WishList';
import Timer from './components/ReactHookPractice';
import Exam from './components/SliderExample';
import Account from './components/Account';
import BuyNow from './components/BuyNow';
import Footer2 from './components/CopyRight';
import MyOrder from './components/MyOrder';
import Carousel1 from './components/Carousel'

function App() {
  return (
    <>
    
    <Router>
  
      <Routes>
      
       <Route  exact path="/" element={<HomePage/>}/>
        <Route exact path="/JustForYou" element={<JustForYou/>}/>
       <Route path="/QrCode" element={<Qrcode/>} />
       <Route path="/CheckOut" element={<CheckOut/>}></Route>
       <Route path="/FashionPage" element={<Fashion/>}></Route>
       <Route path="/Login" element={<Login/>}></Route>
       <Route path="/SignUp" element={<Signup/>}></Route>
       <Route path="/SignUpEmail" element={<SignupEmail/>}></Route>
       <Route path="/AddCart" element={<Addcart/>}></Route>
       <Route path="/ElectronicPage" element={<Electronic/>}></Route>
       <Route path="/FollowedStore" element={<Followstore/>}></Route>
       <Route path="/ProductPage" element={<ProductPage/>}></Route>
       <Route path="/WishList" element={<WishList/>}></Route>
       <Route path="/ReactHookPractice" element={<Timer/>}></Route>
       <Route path="/SliderExample" element={<Exam/>}></Route>
       <Route path="/Account" element={<Account/>}></Route>
       <Route path="/BuyNow" element={<BuyNow/>}></Route>
       <Route path="/CopyRight" element={<Footer2/>}></Route>
       <Route path="/MyOrder" element={<MyOrder/>}></Route>
       <Route path="/Carousel" element={<Carousel1/>}></Route>
      </Routes>
     
    </Router>
    
    </>
  );
}

export default App;
