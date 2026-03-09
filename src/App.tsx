//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
//import './App.css'
import { Header, Hero, } from './assets/components'

function App() {
//  const [count, setCount] = useState(0)

  return (
    <main className='w-[375px] m-auto'>
      <section className='bg-Navy-850 p-6 h-[420px] relative'>
        <Header />
        
        <img 
          className='relative z-10 mt-12'
          src="/public/images/illustration-intro.png" 
          alt="intro illustration" 
        />
        
        <img 
          className='absolute bottom-0 left-0 w-full '
          src="/public/images/bg-curvy-mobile.svg" 
          alt="bg curvy mobile" 
        />
      </section>

      <section className='bg-Navy-900 p-6'>
        <Hero />
      </section>

    </main>
  )
}

export default App
