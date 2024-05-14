import {useState} from 'react'

const PersonCard = (props) => {
    const {firstName, lastName, age: initAge, hairColor} = props
    const [age, setAge] = useState(initAge);   
   
    const handleClick = () => {
        setAge(age + 1);
    }
  return (
    <div>
     <h1>{firstName} ,  {lastName} </h1> 
      <h2>Age: {age}</h2>
      <h2>Hair Color: {hairColor}</h2>
      
      <button onClick={ handleClick }>Birthday Button for {firstName} {lastName}</button>
    </div>
    
  )
}

export default PersonCard
