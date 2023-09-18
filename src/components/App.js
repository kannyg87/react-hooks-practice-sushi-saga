import React, {useState, useEffect} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushiData, setsushiData] = useState([])
  const [fourSushis, setFoursushies] = useState([])
const [budget, setBudget] = useState(100)
  useEffect(() => {
    fetch(API)
      .then(resp => resp.json())
      .then(data => {
        const allSushi = data.map(s => {
         return  {...s, eaten: false}
       })
        const four = allSushi.splice(0, 4)
        setsushiData(allSushi)
        setFoursushies(four)
      })
  }, [])

  const getSushi = () => {
    const allSushi =sushiData
    const four = allSushi.splice(0, 4)
    setFoursushies(four)
  }
  const eatsushi = (e) => {
    console.log(e.target)
    const newSushi = fourSushis.map(s => s.id == e.target.id ? { ...s, eaten: true } : s)
    setFoursushies(newSushi)
    const newBudget = budget - parseInt(e.target.dataset.price)
    setBudget(newBudget);

  }
  return (
    <div className="app">
      <SushiContainer four={ fourSushis} eatsushi={eatsushi} getSushi={getSushi} />
      <Table fourSushis={fourSushis} budget={budget} />
    </div>
  );
}

export default App;
