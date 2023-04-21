import React from 'react'
import useFetch from '../customHooks/useFetch';

function ExampleCustomHookFetch() {
    const { data, loading, error } = useFetch('https://api.example.com/data');

    if (loading) {
      return <div>Loading...</div>;
    }
  
    if (error) {
      return <div>Error: {error.message}</div>;
    }
  
    return <div>Data: {JSON.stringify(data)}</div>;
}

export default ExampleCustomHookFetch