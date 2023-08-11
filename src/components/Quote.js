import { useState, useEffect } from 'react';

const Quote = () => {
  const [quote, setQuote] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchQuote = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `https://api.api-ninjas.com/v1/quotes?category=${'failure'}`,
          {
            headers: {
              'X-Api-Key': 'rUuUFv1qUBQHFwLXZP09+Q==fdgniVquw8YwHAll',
            },
          },
        );
        const json = await res.json();
        setQuote(json[0]);
      } catch (error) {
        setError(true);
      }
      setLoading(false);
    };
    fetchQuote();
  }, []);

  if (error) {
    return (
      <p className="error-on-fetch">Something went wrong!</p>
    );
  }
  if (loading) {
    return (
      <p className="loading-quote">Loading...</p>
    );
  }

  return (
    <p className="quote">
      <i>
        &quot;
        {`${quote.quote}`}
        &quot;
      </i>
      {' '}
      -
      <span className="author">{`${quote.author}`}</span>
    </p>
  );
};

export default Quote;
