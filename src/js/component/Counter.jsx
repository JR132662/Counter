
import React from 'react';



export default function Counter(props){
    let place1
    let place2
    let place3
    let place4
    let place5
    let place6

    if (props.number<10){
        place1= props.number
    } else if(props.number < 100){
        const place = props.number.toString().split("")
        place1=place[1]
        place2=place[0]
    }else if(props.number < 1000){
        const place = props.number.toString().split("")
        place1=place[2]
        place2=place[1]
        place3=place[0]
    } else if (props.number < 10000){
        const place = props.number.toString().split("")
        place1=place[3]
        place2=place[2]
        place3=place[1]
        place4=place[0]
    }

return <div className='Container'>
    <h1>Simple Counter Clock</h1>
        <div className='Box'><h1><i class="far fa-clock"></i></h1></div>
        <div className='Box'><h1>{place6 || 0}</h1></div>
        <div className='Box'><h1>{place5 || 0}</h1></div>
        <div className='Box'><h1>{place4 || 0}</h1></div>
        <div className='Box'><h1>{place3 || 0}</h1></div>
        <div className='Box'><h1>{place2 || 0}</h1></div>
        <div className='Box'><h1>{place1 || 0}</h1></div>
    </div>
}

