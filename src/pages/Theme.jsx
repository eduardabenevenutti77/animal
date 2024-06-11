import { useEffect, useState } from 'react'; 
import { fetchData } from '../api/fetchData'; 
import { axiosData } from '../api/axiosData'; 

function Theme() { 
    const [fetchResults, setFetchResults] = useState([]); 
    const [axiosResults, setAxiosResults] = useState([]); 
    useEffect(() => { 
        fetchData().then(setFetchResults); 
        axiosData().then(setAxiosResults); 
    }, []);
    return ( 
        <div> 
            <h2>Theme Data</h2> 
            <h3>Fetch Results:</h3> 
            <ul> 
                {fetchResults.map((item) => ( 
                    <li key={item.API}>{item.Description}</li> 
                ))} 
            </ul> 
            <h3>Axios Results:</h3> 
            <ul> 
                {axiosResults.map((post) => ( 
                    <li key={post.id}>{post.title}</li> 
                ))} 
            </ul> 
        </div> 
    ); 
} 
export default Theme;