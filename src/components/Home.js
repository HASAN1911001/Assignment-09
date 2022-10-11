import React, { useEffect, useState } from "react";
import Skill from "./Skill";
import './Home.css';
import Navigation from "./Navigation";


const Home = () => {
    const [home, setHome] = useState([]);
    const [clicked, setClicked] = useState([]);

    useEffect( () => {
        fetch('Home.json')
        .then(res=> res.json())
        .then(data=> setHome(data));
    }, [])

    const handleClick = (home) =>{
        
        const selected = [...clicked, home];
        setClicked(selected);
    }

    return(
        <div>
            <Navigation></Navigation>
            <div className='Home'>
                <div className="Home-container">
                    {
                    home.map(habit => <Skill 
                        key={habit.id}
                        habit={habit}
                        handleClick={handleClick}
                    ></Skill>)
                    }
                </div>
            </div>   
        </div>
        
     );
};


export default Home;