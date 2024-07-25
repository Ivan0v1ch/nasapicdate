import { useState } from 'react';
import './styles.css'
import { InputDate } from './components/InputDate';
import { InfoPic } from './components/InfoPic';



export const NasaPicData = () => {

  const [date, setDate] = useState();

  const addDate=(newDate)=>{
    setDate(newDate)
  }

  return (
    <div>      
      <div className="title">
        <h1>NASAPICDATA</h1>
      </div>      
      <div className='inputContainer'>
        <InputDate choiceDate={addDate}/>
      </div>      
      <InfoPic date={date}/>
      <h3>{date}</h3>
          
    </div>
  )
}


