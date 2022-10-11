import React from 'react'
import Navigation from './Navigation'
import {useLoaderData} from 'react-router-dom'
import Questions from './Questions';
import { keyboard } from '@testing-library/user-event/dist/keyboard';
import Skill from './Skill';

function Quiz() {
    const data = useLoaderData();
    let quiz = data.data.questions;
  return (
    <div>
        <Navigation></Navigation>
        {
            quiz.map(q => 
                    <Questions>
                        key={q.id}
                        questions = {q}
                    </Questions>

                )
        }
    </div>
  )
}

export default Quiz