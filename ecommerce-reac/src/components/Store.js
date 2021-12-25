import React from 'react'
import TabBar from './TabBar'
import NavigationBar from './NavigationBar'
import Banner from './Banner'


const Store = () => {
    return(
        <>
        <TabBar/>
        <NavigationBar/>
        <Banner/>
        <div className="container">
            <div className="row">
                <div className="col-sm-2">
                    <p>Home</p>
                </div>
                <div className="col-sm-2">
                    <p>All Products</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default Store