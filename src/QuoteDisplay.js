import React from "react";

const QuoteDisplay = ({ newQuote }) => {
  return(
    <figure className="QuoteDisplay">
      <img src={newQuote.image} alt={newQuote.character} />
      <figcaption>
        <blockquote>{newQuote.quote}</blockquote>
        <cite>{newQuote.character}</cite>
      </figcaption>
    </figure>
  );
};


export default QuoteDisplay;

