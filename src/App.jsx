import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Profile from './Components/Profile';






// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <Profile
      
//         name= "shayam"
//         place="chennai"
//         role="UI/UX"
//         status="active"
//         img="https://tse4.mm.bing.net/th?id=OIP.MXXcVA3-a55KwAUXCG5HAAHaE8&pid=Api&P=0&h=180"
//         skill={['html','css','ui/ux','js']}
      
//       />
//     </>
//   )
// }

const UserData = [
  {
    name: "Anto",
    place: "Chennai",
    role: "Software Developer",
    status: "Active",
    img: "https://tse3.mm.bing.net/th?id=OIP.E3UNwm389l_qdOdJ6zbhCAHaE8&pid=Api&P=0&h=180",

    skills: ['html', 'css', 'react', 'js']
  },
  {
    name: "sowmiya",
    place: "kochi",
    role: "Software Developer",
    status: "Active",
    img: "https://tse3.mm.bing.net/th?id=OIP.E3UNwm389l_qdOdJ6zbhCAHaE8&pid=Api&P=0&h=180",

    skills: ['html', 'css', 'react', 'js']
    },
   
      {
        name: "kavya",
        place: "madurai",
        role: "Software Developer",
        status: "Active",
        img: "https://tse3.mm.bing.net/th?id=OIP.E3UNwm389l_qdOdJ6zbhCAHaE8&pid=Api&P=0&h=180",

        skills: ['html', 'css', 'react', 'js']
        },
        {
          name: "anto",
          place: "chennai",
          role: "Software Developer",
          status: "Active",
          img: "https://tse3.mm.bing.net/th?id=OIP.E3UNwm389l_qdOdJ6zbhCAHaE8&pid=Api&P=0&h=180",

          skills: ['html', 'css', 'react', 'js']
          },
          {
            name: "Rahul",
            place: "Bangalore",
            role: "Software Developer",
            status: "Active",
            img: "https://tse3.mm.bing.net/th?id=OIP.E3UNwm389l_qdOdJ6zbhCAHaE8&pid=Api&P=0&h=180",
            skills: ['html', 'css', 'react', 'js']
            },
            
];

const App = () => {
  return(
    <div 
    className='Profile-cards-container'>
      {UserData.map((user, index) => (
        <Profile
        key={index}
        name={user.name}
        place={user.place}
        role={user.role}
        status={user.status}
        img={user.img}
        skill={user.skills}
        />
        ))}
    </div>
  );
  };

export default App
