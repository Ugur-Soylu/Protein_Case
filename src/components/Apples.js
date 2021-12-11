import React from 'react'
import apple from "../assets/apple.png"
import {useSelector} from "react-redux";



const Apples = () => {
    
    const value = useSelector((state)=>state.value)
    const apple1 = document.querySelector("#apple1")
    const apple3 = document.querySelector("#apple3")
    const apple4 = document.querySelector("#apple4")
    const apple5 = document.querySelector("#apple5")
    const apple6 = document.querySelector("#apple6")

    if(value){
        
            setTimeout(()=>{
                apple3.setAttribute("id", "apple33")
                setTimeout(()=>{apple1.setAttribute("id", "apple11")}, 300)
                setTimeout(()=>{apple5.setAttribute("id", "apple55")}, 600)                
                
            },3000)

            setTimeout(()=>{
                apple1.setAttribute("id", "apple111")
                apple5.setAttribute("id", "apple555")
                apple3.setAttribute("id", "apple333")
                // apple4.setAttribute("id", "apple44")
                // apple6.setAttribute("id", "apple66")
                
            },5000)


            
        }
        
    
    return (
        <div className="appleDiv">
            <img className="apple" id="apple1" src={apple} alt="apple"/>
            <img className="apple" id="apple2" src={apple} alt="apple"/>
            <img className="apple" id="apple3" src={apple} alt="apple"/>
            <img className="apple" id="apple4" src={apple} alt="apple"/>
            <img className="apple" id="apple5" src={apple} alt="apple"/>
            <img className="apple" id="apple6" src={apple} alt="apple"/>
            
        </div>
    )
    
}

export default Apples
