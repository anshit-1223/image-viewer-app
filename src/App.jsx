import { useState } from 'react'
import ImageViewer from './pages/ImageViewer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ImageViewer />
    </>
  )
}

export default App
