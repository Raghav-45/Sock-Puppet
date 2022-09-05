import { useParams } from 'react-router-dom'
import { useState, useEffect } from "react"
import axios from "axios"

function SeedPage() {
  const { seed } = useParams()
  const [seedfetchedData, setSeedfetchedData] = useState({})

  function FetchSeed() {
    axios.get(`http://127.0.0.1:5000/seed/${seed}`)
      .then((resp) => {
        setSeedfetchedData(resp.data)
      })
  }

  useEffect(() => {
    FetchSeed()
  }, [])
  
  return (
    <div className="App">
      <pre style={{ textAlign: "left" }}>{JSON.stringify(seedfetchedData, undefined, 4)}</pre>
    </div>
  )
}

export default SeedPage;