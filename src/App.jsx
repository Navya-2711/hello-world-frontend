import { useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [responses, setResponses] = useState({})
  const [loading, setLoading] = useState({})

  const callEndpoint = async (endpoint, key) => {
    setLoading(prev => ({ ...prev, [key]: true }))
    try {
      const backendUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080'
      const response = await axios.get(`${backendUrl}${endpoint}`)
      setResponses(prev => ({ ...prev, [key]: response.data }))
    } catch (error) {
      setResponses(prev => ({ 
        ...prev, 
        [key]: `Error: ${error.response?.data || error.message}` 
      }))
    }
    setLoading(prev => ({ ...prev, [key]: false }))
  }

  return (
    <div className="App">
      <div className="container">
        <h1>Hello World React + Spring Boot Integration</h1>
        <p>Click the buttons below to call your Spring Boot backend APIs:</p>
        
        <div className="card">
          <h2>Spring Boot API Endpoints</h2>
          
          <div className="button-group">
            <button 
              onClick={() => callEndpoint('/', 'root')}
              disabled={loading.root}
            >
              {loading.root ? 'Loading...' : 'Call / (Root)'}
            </button>
            
            <button 
              onClick={() => callEndpoint('/hello', 'hello')}
              disabled={loading.hello}
            >
              {loading.hello ? 'Loading...' : 'Call /hello'}
            </button>
            
            <button 
              onClick={() => callEndpoint('/greet', 'greet')}
              disabled={loading.greet}
            >
              {loading.greet ? 'Loading...' : 'Call /greet'}
            </button>
          </div>

          <div className="responses">
            {Object.entries(responses).map(([key, response]) => (
              <div key={key} className="response">
                <strong>Response from {key === 'root' ? '/' : `/${key}`}:</strong>
                <div className={response.startsWith('Error:') ? 'error' : 'success'}>
                  {response}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="info">
          <h3>How it works:</h3>
          <ul>
            <li>React frontend runs on <code>http://localhost:3000</code></li>
            <li>Spring Boot backend runs on <code>http://localhost:8080</code></li>
            <li>Vite proxy forwards <code>/api/*</code> requests to the backend</li>
            <li>CORS is configured to allow cross-origin requests</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default App
