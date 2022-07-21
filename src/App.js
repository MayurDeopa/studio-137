
import { useState } from 'react';
import './App.css';
import Progress from './components/Progress';

function App() {
  const [value,setValue] = useState(0)
  const[ questions,setQuestions] =useState([
    {
      'question':"I have ambitious aims of making a difference.",
      answer:0
    },
    {
      'question':"My leadership journey has progressed as I anticipated.",
      answer:0
    },
    {
      'question':"I have spent fewer than 4 years in full time service or ministry.",
      answer:0
    }
    
  ])
  const [answers,setAnswers] = useState([
    'Strongly disagree','Disagree','Neutral','Agree','Strongly agree'
  ])
  const [page,setPage] = useState(0)
  const [slider,setSlider] = useState(0)
  const currentQuestion = questions[page]
  const lastStep = questions.length-1 ===page
  const increment = 100/questions.length
  const sliderIncrement = 20
  const end = value===100
  const increseSlider =(index)=>{
    setSlider((index * sliderIncrement)+10)
  }
  const nextStep=(ans,index)=>{
    increseSlider(index)
    setTimeout(()=>{
      setQuestions(questions.map((q,i)=>q.question===currentQuestion.question?{...q,answer:ans}:q))
      setValue((prev)=>prev + increment)
      setSlider(0)
      if(lastStep) return
      setPage((prev)=>prev+1)
    },600)
  }
  

  return (
    <div className="container">
      <div className='card'>
        <Progress
          value={value}
        />
        {
          end
          ?
          <p>End</p>
          :
          <>
            <p>{questions[page].question}</p>
            <div className='buttons_wrapper'>
            {answers.map((a,i)=>{
              return(
                <button 
                  className='button'
                  onClick={()=>nextStep(a,i)} key={i}>
                  {a}
                </button>
              )
            })}
            </div>
            <Progress
          value={slider}
        />
          </>
        }
        
      </div>
    </div>
  );
}

export default App;
