import { useState } from 'react'
import React  from 'react'
import './MovieRow.css'
import { MdOutlineArrowForwardIos,MdOutlineArrowBackIos} from "react-icons/md";

export default ({items, title}) => {


    const [scrollX,setScrollX] = useState(-550)

   const handleLeftArrow  = () => {
   
    let x = scrollX + Math.round(window.innerWidth / 2);
    if(x > 0){
        x = 0
    }
    setScrollX(x);
   }
   
   const handleRightArrow  = () => {
   
    let x = scrollX - Math.round(window.innerWidth / 2);
    let listW = items.results.length * 150
    if((window.innerWidth - listW) > x ){
        x = (window.innerWidth - listW) - 60
    }
    setScrollX(x);


   }
   



    return (
        <div className='movieRow'>
         <h2>{title}</h2>
         <div className='left' onClick={handleLeftArrow}>
         <MdOutlineArrowBackIos style={{fontSize: 50}} />
         </div>
         <div className='right'  onClick={handleRightArrow}>
         <MdOutlineArrowForwardIos style={{fontSize: 50}}/>
         </div>
         <div className='movieRow_lista_area'>
            <div className='movieRow_lista' 
            style={{
                marginLeft: scrollX,
                width: items.results.length * 150
            }}>
            {items.results.length > 0 && items.results.map((item, key)=>(

                <div  key={key} className='movieRow_item'>
                     <img alt={item.original_title} src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}/>
                     
                </div>
               
                ))}
            </div>
         
         </div>
        </div>
    )
}


