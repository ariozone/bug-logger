import React from "react"
import axios from "axios"

const Logs = () => {
  const [logs, setLogs] = React.useState([])
  const [spinner, setSpinner] = React.useState(false)
  const getLogs = async () => {
    setSpinner(true)
    const res = await axios.get("/logs")
    setLogs(res.data)
    setSpinner(false)
  }
  React.useEffect(() => {
    getLogs()
  }, [])
  if (spinner) return <h2>Loading...</h2>
  return (
    <div>
      <ul className='collection-with-header'>
        <li className='collection-header'>
          <h3 className='center'>Logged Defects</h3>
        </li>
        {logs.map(log => (
          <li className='center'>{log.message}</li>
        ))}
      </ul>
    </div>
  )
}

export default Logs
