import { BrowserRouter as Router , Routes, Redirect, Link, Route} from "react-router-dom";
import TabBar from "./TabBar";
import NavigationBar from "./NavigationBar";
import Category from "./category";
import Banner from './Banner'
import NavList from "./navList";
import Gallery from "./ProductSlider";
import ProductSlide from "./ProductSlider1";
import PopularProduct from "./PopularProduct";
import JustForYou from "./JustForYou";
import LoadMore from "./LoadMoreBtn";
import Banner1 from "./Banner1";
import Footer2 from "./Footer2";

const HomePage = () =>{
    return(
        <>
          <TabBar/>
        <NavigationBar/>
        <Banner/>   
        <Category/>
        <NavList title="Featured Product"/>
        <ProductSlide/>
        <NavList title="On Sales Product"/>
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