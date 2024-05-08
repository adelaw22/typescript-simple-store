import { useState, useEffect } from "react"

export function useNavbar(){
    const [NavBgPosition, setNavBgPosition] =useState<boolean>(false)
    const [isOpen, setIsOpen] = useState<boolean>(false)
    
    const changeBg =()=>{
        if (window.scrollY >= 100){
            setNavBgPosition(true)
        }else{ 
        setNavBgPosition(false)
        }
    }

    useEffect(()=>{
        changeBg()
        window.addEventListener("scroll", changeBg)
    })

    
    return{NavBgPosition, isOpen, setIsOpen}
}
