import { useState } from 'react'
import Landing from './pages/Landing'
import { RecoilRoot} from 'recoil';
function App() {
  const [count, setCount] = useState(0)

  return (
   <RecoilRoot>
      <Landing/>
    </RecoilRoot>
  )
}

export default App
