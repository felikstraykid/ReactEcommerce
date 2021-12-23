import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router , Routes, Redirect, Link, Route} from "react-router-dom";
import CopyRight from "./CopyRight";
import Banner1 from "./Banner1";
import Footer2 from "./CopyRight";
import LoadMore from "./LoadMoreBtn";
import TabBar from "./TabBar";
import NavigationBar from "./NavigationBar";
import Banner from "./Banner";
import NavList from "./navList";
import Category from "./category";
import Gallery from "./ProductSlider";
import ProductSlide from "./ProductSlider1";
import PopularProduct from "./PopularProduct";
import JustForYou from "./JustForYou";
const HomePage = () => {
    return(
        <>
        <TabBar/>
        <NavigationBar/>
        <Banner/>
        <Category />
      <NavList title="Featured Product" />
      <Gallery />
      <NavList title="On Sales Product" />
      <ProductSlide/>
      <NavList title="Popular Product"/>
      <PopularProduct/>
      <NavList title="Just For You"/>
      <JustForYou/>
      <LoadMore/>
      <Banner1/>
      <Footer2/>
        </>
    )
}

export default HomePage