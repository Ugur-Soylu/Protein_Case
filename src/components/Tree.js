import React from 'react'
import tree from "../assets/tree.png"
import {useSelector, useDispatch} from "react-redux";

const Tree = () => {

    const value = useSelector((state)=>state.value) //store ile gönderdiğimiz propsu destruct ediyoruz.
    const dispatch = useDispatch();  // reducer fonksiyonu ile store'daki state'i true'ya çevirmek için kullanacağımız dispatch fonksiyonunu destruct ettik. Buton'a tıklandığında bu fonksiyonu çağırıp, type'ını action olarak reducer'a göndereceğiz.
    const tree0 = document.querySelector(".Tree") // query selector ile tree elementini yakaladık.

    if(value){ //ağacın 3 saniye boyunca sallanması için; store'da yer alan state true'ya dönerse aşağıdaki kodlar çalışacak. (State'in true'ya dönmesi için butona tıklamak gerekli.)
        let counter = 60000;
        for(let i=0; i < counter; i++){
            setTimeout(()=>{
                tree0.setAttribute("id", "tree2") 
                counter--
            },50)
            setTimeout(()=>{
                tree0.setAttribute("id", "tree1");
                counter--
            },100)
        }     
        
    }
  
    return (
        <div className="treeDiv">
            <img className= "Tree"  src={tree} alt="tree" />
            <button onClick={()=> dispatch({type: "CHANGE TO TRUE"})}>Shake Tree</button> 
            
        </div>
    )
}

export default Tree

