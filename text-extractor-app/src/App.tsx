
import './App.css'
import TextExtractor from './components/TextExtractor'


function App() {
  
  return (
    <>
      <div style={{ backgroundColor: '#C4D7FF',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: '10px',
          }} className='container'>
            
            <div style={{ maxWidth: '600px', width: '100%' }}>
          <TextExtractor />
        </div>
        
        </div>
    </>
  )
}

export default App
