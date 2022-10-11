import React from 'react'
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

//toast.configure()
function Questions(props) {
    
    const {question, options, correctAnswer} = props.children[3];

    const notify = () => {
        toast(correctAnswer);
    }
    const Q = () => {
        toast();
    }


  return (
    <div style={{margin:'30px'}}>
        <div style={{display: 'flex'}} className='question'>
            <h3>{question}</h3>
            <p onClick={notify}>@</p>
        </div>
        
        {
            options.map(option => 
            <div>
                <p id='opt' onClick={e => {
                    if(e.target.innerText == correctAnswer)
                    {
                        toast("Correct");
                    }
                    else{
                        toast("Wrong");
                    }
                }
                }>{option}</p>
            </div>
            )
        }
        <ToastContainer />
    </div>
  )
}

export default Questions