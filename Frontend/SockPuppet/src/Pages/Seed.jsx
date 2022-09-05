import { useParams } from 'react-router-dom'
import { useState, useEffect } from "react"
import axios from "axios"

function SeedPage() {
  const { seed } = useParams()
  const [seedData, setSeedData] = useState({})

  function FetchSeed() {
    axios.get(`http://127.0.0.1:5000/seed/${seed}`)
      .then((resp) => {
        setSeedData(resp.data)
      })
  }

  useEffect(() => {
    FetchSeed()
  }, [])
  
  return (
    <div className="App">
      <pre style={{ textAlign: "left" }}>{JSON.stringify(seedData, undefined, 4)}</pre>
    </div>
  )
}

export default SeedPage;