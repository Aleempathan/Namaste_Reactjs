import { useEffect, useState } from "react"

const Online = ()=>{
const [isOnline,setisOnline] =useState(true) 
const handleOnline = ()=>{
    setisOnline(true)
}
const handleoOffline = ()=>{
    setisOnline(false)
}
useEffect(()=>{
window.addEventListener('online',handleOnline)
window.addEventListener('offline',handleoOffline)
return ()=>{
    window.removeEventListener('online',handleOnline)
    window.removeEventListener('offline',handleoOffline)
}
},[])

    return isOnline;
}

export default Online;