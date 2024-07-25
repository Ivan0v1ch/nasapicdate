import { useState } from "react";


export const InputDate = ({choiceDate}) => {
    const today = new Date();
    const day = today.getDate().toString().padStart(2, '0');
    const month = (today.getMonth() + 1).toString().padStart(2, '0'); 
    const year = today.getFullYear();
    const formatDateToday = `${year}-${month}-${day}`;

    const [date, setDate] = useState(formatDateToday);

    const changeDate = (e) => {
        const day = e.target.value;
        setDate(day);
    }

    const submitDate = (e) => {
        e.preventDefault();
        choiceDate(date);
        
    }
    return (
        <>
            <form onSubmit={submitDate}>
                <input type="date" id="dateInput" min="1995-06-16" max={formatDateToday} onChange={changeDate} value={date} className="dateSearch"/>
                <button className="btn">Buscar</button>
            </form>
        </>

    )
}


