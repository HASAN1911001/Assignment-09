import React from 'react';
import './Skill.css';

const Skill = (props) => {
    const {Skill,img,time} = props.skill;
   
    return(
        <div  className ='skill-container'>
            <div className="skill">
                <img src={img}></img>
                <h3>{Skill}</h3>
                <h6>Time Require: {time} Hours</h6> 
            </div>
            <button onClick={() => props.handleClick(props.skill)} className='btn-skill'>
                    <p>Add to List</p>
            </button>
        </div>  
     );
};


export default Skill;