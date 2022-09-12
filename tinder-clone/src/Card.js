import React,{useState} from 'react';
import "./Card.css";
import TinderCard from "react-tinder-card";

function Card() {
    const [people,SetPeople]= useState([
        {
            name:'Ranbir Kapoor',
            url :"https://newsresolution.com/wp-content/uploads/2020/09/Ranbir-Kapoor-actor-Age-height-Weight-Size-Wife-Family-Biography-Wiki.jpg",
        },

        {
            name:'Shahid Kapoor',
            url :"https://filmfare.wwmindia.com/content/2022/may/shahidkapoorjersey31651663035.jpg",
        }

    ]);

    const swiped = (direction, nameToDelete) =>{
        console.log("Removing: " + nameToDelete);
    };

    const outOfFrame = (name) =>{
        console.log(name + "left the page");
    };

    return (
    <div className='Card'>
        <div className='Cardcontainer'>
            {people.map((elem) =>(
                <TinderCard
                    className="swipe"
                    key={elem}
                    preventSwipe = { [ "up", "down"]}
                    onSwipe={(dir) => swiped(dir, elem.name)}
                    onCardLeftScreen={()=>outOfFrame(elem.name)}
                >
                    <div className='image' style={{backgroundImage:`url(${elem.url})`}}>
                        <h3>{elem.name}</h3>
                    </div>
                </TinderCard>
                ))}
        </div>
    </div>
  )
}

export default Card