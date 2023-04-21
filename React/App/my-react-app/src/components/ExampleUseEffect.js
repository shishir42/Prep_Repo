import React, {useEffect, useState } from 'react'

function ExampleUseEffect() {
    const [data, setData] = useState({hits: []});
    const [query, setQuery] = useState('react');

    useEffect(()=> {
        let ignore = false;
        async function fetchData(){
            try {
                const response = await fetch("https://hn.algolia.com/api/v1/search?query=" + query);
                const result = await response.json();
                if(!ignore) setData(result)
                console.log(result);
              } catch (error) {
                console.error(error);
              }
        }
        fetchData();
        return() => {
            ignore = true;
        }
    }, [query]);
  return (
    <>
        <div>ExampleUseEffect</div>
        <input value={query} onChange={e=> setQuery(e.target.value)}/>
        <ul>
            {
                data.hits.map(item => (
                    <li key={item.objectID} style={{textAlign:'center', listStylePosition:'inside'}}>
                        <a href={item.url}>{item.title}</a>
                    </li>
                ))
            }
        </ul>
    </>
  )
}

export default ExampleUseEffect