import './App.css'
import MyButton from './MyButton.jsx'

const pikachu = {
  name: 'Pikachu',
  type: 'Electric',
  level: 25,
  moves: ['Thunder Shock', 'Quick Attack', 'Electro Ball', 'Iron Tail'],
  image: 'https://pngimg.com/uploads/pokemon/pokemon_PNG14.png'
}

// const pikachumoves = [
//   { title: 'Thunder Shock', id: 1 },
//   { title: 'Quick Attack', id: 2 },
//   { title: 'Electro Ball', id: 3 },
//   { title: 'Iron Tail', id: 4 },
// ];

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
      <MyButton />
    </>
  )
}

export default App
