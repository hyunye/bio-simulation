import './styles/App.css'

function App() {
  return (
    <div className="app-container">
      <header>
        <h1>Bio-Simulation</h1>
      </header>
      <main>
        <div className="simulation-wrapper">
          {/* SimulationCanvas will go here */}
          <div className="placeholder-canvas">
            Simulation Canvas Placeholder
          </div>
        </div>
      </main>
      <aside className="controls">
        <h2>Controls</h2>
        <button onClick={() => console.log('Start simulation')}>Start</button>
        <button onClick={() => console.log('Reset simulation')}>Reset</button>
      </aside>
    </div>
  )
}

export default App
