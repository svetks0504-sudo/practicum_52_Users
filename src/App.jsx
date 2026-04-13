import './App.css'
import UserForm from './components/userForm'
import UserList from './components/userList'
import { useState } from 'react'

function App() {
const [editingUser, setEditingUser] = useState(null)

  return (
    <div>
      <UserList 
       setEditingUser={setEditingUser}/>
      <UserForm setEditingUser={setEditingUser}
      editingUser={editingUser}/>
    </div>
  )
}

export default App
