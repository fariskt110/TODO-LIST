import React  from "react"
import Navbar from "../../components/navbar/Navbar"
import pic from '../../assets/image2.jpg'
import '../home/home.css'
import Footer from "../../components/footer/Footer"




export default function Home(){
    return(
        <>
        <Navbar></Navbar>
        <div class="bg-image" >
        <img src={pic}  class="img-fluid" alt="Responsive image"/>
              
        </div>
        <Footer></Footer>
        </>
    )
}