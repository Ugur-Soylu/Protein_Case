import React from 'react'
import tree from "../assets/tree.png"
import {useSelector, useDispatch} from "react-redux";

const Tree = () => {

    const value = useSelector((state)=>state.value)
    const dispatch = useDispatch();
    const tree0 = document.querySelector(".Tree")

    if(value){
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
            {/* <button>fdff</button>                    
            <button>fdff</button>                    
            <button>fdff</button>                     */}
        </div>
    )
}

export default Tree

