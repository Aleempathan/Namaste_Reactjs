import { useEffect,useState } from "react";

 const Profilefun = (props) =>{
     const {name} = props
     const [count,setCount] = useState(0)

     useEffect(()=>{
        let userinter = setInterval(()=>{
            console.log("user function component")
        },1000)
        return () => clearInterval(userinter);
     },[])
     return (
         <>
         <h1>Profile function component</h1>
         {name}
         <h4>{count}</h4>
         <button onClick={()=>{setCount(count+1)}} >cont</button>
         </>
     )
 }

 export default Profilefun;