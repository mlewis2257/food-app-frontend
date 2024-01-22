// import React from 'react'
// import axios from 'axios';
// import { useState, useEffect } from 'react';

// export default function Homepage() {
//     const [foods, setFoods] = useState([]);
//     const [error, setError] = useState('');

//     useEffect(() => {
//         async function fetchFoods() {
//             try {
//                 const response = await axios.get('http://localhost:8000/api/foods/', {
//                     headers: {
//                         Authorization: `Bearer ${localStorage.getItem('access')}`
//                     }
//                 });
//                 setFoods(response.data);
//             } catch (error) {
//                 setError('Error fetching data');
//                 console.error('There was an error!', error);
//             }
//         }
//         fetchFoods();
//     }, []);

//     return (
//         <div>
//             <h2>Food List</h2>
//             {error ? <p>{error}</p> : (
//                 <ul>
//                     {foods.map(food => (
//                         <li >{food.title}, {food.description} - Completed: {food.completed ? 'True' : 'False'}</li>
//                     ))}
//                 </ul>
//             )}
//         </div>
//     );
// }

import React, { useEffect } from 'react';
import useApi from '../../hooks/useApi';
import api from '../../utilities/user-services';

export default function Homepage() {
    
return (
    <div>HOMEPAGE</div>
)
}
