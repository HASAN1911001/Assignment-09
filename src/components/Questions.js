import React from 'react'

function Questions(props) {
    const {question, options, correctAnswer} = props.children[3];
  return (
    <div>
        <h3>{question}</h3>
        {
            options.map(option => 
            <div>
                <p>* {option}</p>
            </div>
            )
        }
    </div>
  )
}

export default Questions