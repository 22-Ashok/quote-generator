
const QuoteList = ({ item }) => {
      if(!item){
        return null
      }
    return (
      <div>
        
         <div><span>"</span> { item.text} <span>"</span></div>
         
         <div> { item.author } </div>
      </div>
    )
   
}

export default QuoteList