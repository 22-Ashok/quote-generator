import { useState, useEffect } from 'react'
import QuoteList from './QuoteList'

const QuoteContainer = () => {
      const[quotes, setQuotes] = useState([]);
      const[number,setNumber] = useState(0);
      const[quote,setQuote]= useState(null)

    //   const randomNumber = () => {
    //     const currNumber = Math.floor(Math.random()*10)+(quotes.length-1)-9;
    //     setNumber(currNumber);
    //      quotes.find((e,i) => {
    //                 if(i==number){
    //                  setQuote(e);
    //                 }
    //              })
    //   }   

    const randomNumber = () => {
        const currNumber = Math.floor(Math.random() * quotes.length);
        console.log(currNumber)
        setNumber(currNumber);
        setQuote(quotes[number])
        // const selectedQuote = quotes[currNumber];
        // if (selectedQuote) {
        //   setQuote(selectedQuote);
        // }
      };

     useEffect(()=> {
       async function dataFetch(){
            const response = await fetch("https://type.fit/api/quotes");
            const data = await response.json();
            setQuotes(data);
            setQuote(data[0]);
        }
        dataFetch();
     },[])

    return (
        <div>
            <h1 className="text-3xl text-orange-500 text-center font-bold my-4"> Quote Generator </h1>
            <button onClick={randomNumber} className="bg-black text-white "> click me </button>
            <QuoteList item={quote} />
        </div>
    )
}

export default QuoteContainer