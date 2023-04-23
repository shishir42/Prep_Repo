import React, { useState, useEffect } from 'react';

function withDataFetching(WrappedComponent) {
  return function(props) {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
      setIsLoading(true);

      fetch(props.dataSource)
        .then(response => response.json())
        .then(result => {
          setIsLoading(false);
          setData(result);
        })
        .catch(err => {
        //   console.log('Failed to fetch*****', err);  
          setIsLoading(false);
          setError(err.message);
        });
    }, [props.dataSource]);

    return (
      <WrappedComponent
        data={data}
        isLoading={isLoading}
        error={error}
        {...props}
      />
    );
  };
}

export default withDataFetching;