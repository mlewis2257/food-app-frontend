import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([{}]);
  useEffect(function () {
    async function getData() {
      try {
        const res = await axios.get("http://127.0.0.1:8000/api/");
        setData(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, []);
  return (
    <div className="App">
      <div>
        <h1>Food List</h1>
        <h3>{data[0].title}</h3>
        <h3>{data[0].description}</h3>
        <h3>{data[0].completed}</h3>
      </div>
    </div>
  );
}

export default App;
