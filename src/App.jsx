import {Welcome} from './Welcome';
import { UserCard } from './UserCard';
import { Footer } from './footer';
import { Card } from './Card';
import './App.css'

function App() {
  const name = 'Mike';
  const items =[1,2,3];
  const styles = {backgroundColor: 'pink', color: 'blue', padding: '10px'}
  return (
    <>
      <Welcome name='Joe' />
      <UserCard name='John' role='Developer'/>
      <input type= "text" defaultValue={name} />
      <p style={styles}>Items: {items.length}</p>
      <Card title='My Card' content='This is the card content.' />
      <Footer />

    </> 
  )
}

export default App
