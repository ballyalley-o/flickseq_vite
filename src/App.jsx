import { useState } from 'react'
import readFile from './utils/fs-read'

const App = () => {
  const [jsonData, setJsonData] = useState([])

  const handleFileSelect = (event) => {
    const file = event.target.files[0]

    const appStateData = readFile(file)

    setJsonData(appStateData)

    console.log(appStateData)
    // fsRead(file, (err, jsonData) => {
    //   if (err) {
    //     console.error('Error reading JSON:', err)
    //     return
    //   }
    //   console.log('JSON data:', jsonData)
    //   setJsonData(jsonData)
    // })
  }

  return (
    <div>
      <h1 className='text-8xl'>Flick SeQ</h1>

      <input type='file' onChange={handleFileSelect} />

      <ul>
        {jsonData?.map((item) => (
          <li key={item.id}>{item.componentSequenceNumberCounter}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
