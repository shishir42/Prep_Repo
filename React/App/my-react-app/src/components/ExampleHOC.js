import React from 'react'
import withDataFetching from '../hoc/withDataFetching';

function MyComponent(props) {
    const { data, isLoading, error } = props;
  
    if (isLoading) {
      return <div>Loading...</div>;
    }
  
    if (error) {
      return <div>{error}</div>;
    }
  
    return (
      <ul>
        {data.map(item => (
          <li style={{textAlign:'center', listStylePosition:'inside'}} key={item.id}>{item.name}</li>
        ))}
      </ul>
    );
  }
  
  const MyHOCComponentWithData = withDataFetching(MyComponent);
  

export default MyHOCComponentWithData