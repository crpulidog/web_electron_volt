//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
//import './App.css'
import { Header } from './assets/components/Header'

function App() {
//  const [count, setCount] = useState(0)

  return (
    <main className='border border-White w-[375px] m-auto'>
      <section className='bg-Navy-850 p-6 h-[420px]'>
        <Header />
      </section>
    </main>
  )
}

export default App
