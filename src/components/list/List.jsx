import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@mui/icons-material'
import './list.scss'
import ListItem from '../listItem/ListItem'
import { useRef, useState } from 'react'

function List() {
    const [slideNumber,setSlideNumber]=useState(0);
    const [isMoved,setisMoved]=useState(false);

    const listRef = useRef()
    const handleClick=(direction)=>{
        setisMoved(true)
        let distance=listRef.current.getBoundingClientRect().x - 50
        console.log(listRef.current.getBoundingClientRect());
        if(direction==='left' && slideNumber>0){
            setSlideNumber(slideNumber-1)
            listRef.current.style.transform=`translateX(${230+distance}px)`
        }
        if(direction==='right'&& slideNumber<5){
            setSlideNumber(slideNumber+1)
            listRef.current.style.transform=`translateX(${-230+distance}px)`
        }
    }
    return (
        <div className='list'>
            <span className="listTitle">
                Continue to Watch
            </span>
            <div className="wrapper">
                <ArrowBackIosOutlined className='sliderArrow left' onClick={()=>handleClick('left')} style={{display:!isMoved&&"none"}} />
                <div className="container" ref={listRef}>
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                </div>
                <ArrowForwardIosOutlined className='sliderArrow right' onClick={()=>handleClick('right')} />
            </div>
        </div>
    )
}

export default List
