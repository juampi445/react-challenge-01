import './../styles/card.css';

export const Card = ({ pokemon }) => {
  return (
    <div className='card'>
      <img className='card-img' src={pokemon.img}/>
      <label className='card-text'>{pokemon.name}</label>
    </div>
  )
}