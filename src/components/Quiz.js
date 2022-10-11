import React from 'react'
import Navigation from './Navigation'
import {useLoaderData} from 'react-router-dom'

function Quiz() {
    const data = useLoaderData();
    let quiz = data.data.questions;
  return (
    <div>
        <Navigation></Navigation>
        {
            quiz.map(q => 
                    
                )
        }
    </div>
  )
}

export default Quiz