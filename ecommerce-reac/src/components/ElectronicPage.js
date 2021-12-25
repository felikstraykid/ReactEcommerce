import React from 'react'
import TabBar from './TabBar'
import NavigationBar from './NavigationBar'
import Category from './category'
import Banner from './Banner'
import FashionNav from './FashionNav'
import {Navbar, Nav} from 'react-bootstrap'
import FashionProduct from './FashionProducts'
import PaginationNumber from './Pagination'
import { FaAngleRight } from 'react-icons/fa'
import NavList from './navList'
import PopularProduct from './PopularProduct'
import Banner1 from './Banner1'
import Footer2 from './Footer2'
const Electronic = () => {
    return(
        <>
        <TabBar/>
        <NavigationBar/>
        <Banner/>
        <Category/>
        <Navbar style={{backgroundColor: "rgb(233, 232, 232)", color: "grey",
     fontSize: "13px", paddingLeft: "17%"}} className="mt-4">
            <Nav.Link>Home <FaAngleRight/></Nav.Link>
            <Nav.Link>Fashion</Nav.Link>
        </Navbar>
        <FashionNav/>
        <FashionProduct/>
        <PaginationNumber/>
        <NavList title="You might also like this"/>
        <PopularProduct/>
        <Banner1/>
        <Footer2/>
        </>
    )
}

export default Electronic