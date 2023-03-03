import React, { useEffect, useState } from "react";
const Counter =() => {
    const [number, SetNumber] = useState(0);
    const [text, setText] = useState('Hello')

    useEffect{() => {
        console.log('call from global console');
        
    }}
}