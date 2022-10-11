import React from 'react';
import './Skill.css';

const Skill = (props) => {
    const {name,logo,total} = props.skill;
   
    return(
        <div  className ='skill-container'>
            <div className="skill">
                <img src={logo}></img>
                <h3>{name}</h3>
                <h6>Total: {total} Quizs</h6> 
            </div>
            <button  className='btn-skill'>
                    <p>View Quiz</p>
            </button>
        </div>  
     );
};


export default Skill;