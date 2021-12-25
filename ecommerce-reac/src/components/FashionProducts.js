import React from 'react'
import wristband from './../assets/images/wristband.jpg'
import shoes from './../assets/images/shoes.jpg'
import lotion from './../assets/images/lotion.jpg'
import pant from './../assets/images/pant.jpg'

import shirt from './../assets/images/shirt.jpg'
import cap from './../assets/images/cap.jpg'
import bag from './../assets/images/bag.jpg'
import bar from './../assets/images/girl.jpg'
const FashionProduct = () => {
    return(
        <>
         <div className="wrapper">
            <Card img={shirt}/>
            <Card img={pant}/>
            <Card img={cap}/>
            <Card img={bag}/>
            <Card img={bar}/>
         </div>
         <div className="wrapper">
            <Card img={shoes}/>
            <Card img={shirt}/>
            <Card img={cap}/>
            <Card img={pant}/>
            <Card img={shirt}/>
         </div>
         <div className="wrapper">
            <Card img={shirt}/>
            <Card img={pant}/>
            <Card img={cap}/>
            <Card img={lotion}/>
            <Card img={bar}/>
         </div>
         </>
    )
}
function Card(props){
    return(
        <div className="card mt-4" style={{border: "none"}}>
           <div className="card-body">
                <img src={props.img} className="card-img"></img>
                <div className="card align-items-start" style={{ lineHeight: "0", height: "50px", position: "absolute", left: "24px", bottom: "30px", borderRadius: "8px", width: "114px" }}>
                    <p>ADUL CCTV</p>
                    <p className="text-warning text-bold">1.000.000LAK</p>
                    <p><strike>1.700.000LAK</strike></p>
                </div>
           </div>
        </div>
    )
}

export default FashionProduct