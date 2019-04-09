import  React  from  'react';

const  QuoteGenerator = ({ generateNewQuote }) => {
  return (
    <div  className="QuoteGenerator">
      <button  onClick={generateNewQuote}>Get a new quote</button>
    </div>
  );
};

export  default  QuoteGenerator;