import { useState, useEffect } from "react"

export function useNavbar(){
    const [NavBg, setNavBg] =useState<boolean>(false)
    
    const changeBg =()=>{
        if (window.scrollY >= 100){
            setNavBg(true)
        }else{ 
        setNavBg(false)
        }
    }

    useEffect(()=>{
        changeBg()
        window.addEventListener("scroll", changeBg)
    })

    return{NavBg}
}
