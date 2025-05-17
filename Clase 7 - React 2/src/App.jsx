import './App.css'
import MyButton from './MyButton.jsx'
import { useState } from 'react'

const pikachu = {
  name: 'Pikachu',
  type: 'Electric',
  level: 25,
  moves: ['Thunder Shock', 'Quick Attack', 'Electro Ball', 'Iron Tail'],
  image: 'https://pngimg.com/uploads/pokemon/pokemon_PNG14.png'
}

const pikachumoves = pikachu.moves.map(
  (move) => {
    return {
      title: move,
      id: Math.random()
    }
  }
)

function MovesList() {
  const allMoves = pikachumoves.map((move) => {
    return (
      <li key={move.id}>
        {move.title}
      </li>
    )
  })

  return allMoves;
}

function App() {
  const [count, setCount] = useState(0);

  function incrementCount() {
    setCount(count + 1);
  }

  return (
    <>
      <h1 className='skyblue text-s24'>Tarjeta Pokemon</h1>
      <img src={pikachu.image} width={100} />
      <h3 className='left'>
        Información:
      </h3>
      <ul className='left'>
        <li>
          Nombre: {pikachu.name}
        </li>
        <li>
          Tipo: {pikachu.type}
        </li>
        <li>
          Nivel: {pikachu.level}
        </li>
      </ul>
      <h3 className='left'>Movimientos:</h3>
      <ul className='left'>
          <MovesList />
      </ul>
      <MyButton
        count={count}
        incrementCount={incrementCount}
      />
      <MyButton
        count={count}
        incrementCount={incrementCount}
      />
    </>
  )
}

export default App
