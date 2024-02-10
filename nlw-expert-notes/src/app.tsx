import logo from './assets/nlwexpert.svg'
import { NewNote } from './components/new-note-card'
import { NodeCard } from './components/note-card'
import './index.css'

export function App() {
  return (
    <div className='mx-auto max-w-6xl bg my-12 space-y-6'>
      <img src={logo} alt="" />

      <form className='w-full'>
        <input 
        type="text" 
        placeholder='Busque em suas notas...' 
        className='w-full bg-transparent text-3xl font-semibold tracking-tight placeholder: outline-none text-slate-500'
        />
      </form>

      <div className='h-px bg-slate-700'/>

      <div className='grid grid-cols-3 auto-rows-[250px] gap-6'>
      <NewNote/>
      <NodeCard note={{
          date: new Date(),
          content: 'Olá Mundo!'
        }}/>
      </div>
    </div>
  )
}

