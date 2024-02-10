import { ChangeEvent, useState } from 'react'
import logo from './assets/nlwexpert.svg'
import { NewNote } from './components/new-note-card'
import { NoteCard } from './components/note-card'
import './index.css'

interface Note{
  id: string,
  date: Date,
  content: string
}

export function App() {

  const [search,setSearch] = useState('')
  const [notes,setNotes] = useState<Note[]>(()=>{
    const notesOnStorage = localStorage.getItem('notes')

    if(notesOnStorage){
      return JSON.parse(notesOnStorage)
    }

    return []
  })


  function onNoteCreated(content: string){
    const newNote ={
      id: crypto.randomUUID(),
      date: new Date(),
      content,
    }

  
     const noteArray = [newNote, ...notes]


    setNotes(noteArray)
    
    localStorage.setItem('notes', JSON.stringify(noteArray))

  }

  function handleSearch(event: ChangeEvent<HTMLInputElement>){
    const query = event.target.value

    setSearch(query)
  }

  const filteredNotes = search !== '' 
  ? notes.filter(note => note.content.toLocaleLowerCase().includes(search.toLocaleLowerCase())):notes
  
  return (
    <div className='mx-auto max-w-6xl bg my-12 space-y-6'>
      <img src={logo} alt="" />

      <form className='w-full'>
        <input 
        type="text" 
        onChange={handleSearch}
        placeholder='Busque em suas notas...' 
        className='w-full bg-transparent text-3xl font-semibold tracking-tight placeholder: outline-none text-slate-500'
        />
      </form>

      <div className='h-px bg-slate-700'/>

      <div className='grid grid-cols-3 auto-rows-[250px] gap-6'>
      <NewNote  onNoteCreated={onNoteCreated} />
      {filteredNotes.map(note =>{
        return <NoteCard key={note.id} note={note}/>
      })}
      </div>
    </div>
  )
}

