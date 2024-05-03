import React, { Children, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const ConditionalRoute = ({children}) => {
  const [display, setDisplay] = useState(false);
  const location = useLocation()

useEffect(()=>{
    if(location.pathname === "/login" || location.pathname ==="/signup" || location.pathname ==="/dashboard"){
        setDisplay(false)
    }else{
        setDisplay(true)
    }
},[location])

  return <div>{display && children}</div>;
};
