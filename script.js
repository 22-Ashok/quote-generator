import React from 'react'
import ReactDOM from 'react-dom/client'
import QuoteContainer from './src/component/QuoteContainer'

const App = () => {

    return (
        <>
          <QuoteContainer />
        </>
    )
}


ReactDOM.createRoot(document.getElementById("root")).render(<App />)