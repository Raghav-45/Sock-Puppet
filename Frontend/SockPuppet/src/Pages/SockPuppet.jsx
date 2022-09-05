import { useState, useEffect } from "react"
import axios from "axios"
// import '../App.css'
// import '../index.css'

function Puppet() {
  const urlParams = new URLSearchParams(location.search)
  const [sockPuppetData, setSockPuppetData] = useState({})
  
  function GenerateSockPuppet() {
    axios.get(`https://randomuser.me/api/?gender=${urlParams.get('gender')}&nat=${ (urlParams.get('nationality') == null) ? 'us' : urlParams.get('nationality') }&password=upper,lower,number,special,8-12&format=json`)
      .then((resp) => {
        setSockPuppetData(resp.data)
      })
  }

  function SaveSeed(data) {
    axios.post("http://127.0.0.1:5000/save/", data, {
      headers: {
        "Content-Type": "application/json",
      },
    })
  }

  useEffect(() => {
    GenerateSockPuppet()
  }, [])

  return (
    <div className="App">
      <pre style={{ textAlign: "left" }}>{JSON.stringify(sockPuppetData, undefined, 4)}</pre>
      <button onClick={() => {SaveSeed(sockPuppetData); navigator.clipboard.writeText('http://127.0.0.1:5173/seed/' + sockPuppetData.info.seed)}}>
        Save in DB & Copy Seed
      </button>
    </div>
  )
}

export default Puppet;