import './../styles/button.css';
import pokeball from '../images/pokeball.png'
import pokemon from '../images/pokemon.png'
import {Button as MyButton}  from '@mui/material';

export const Button = ({ onClick, children }) => {

  const styles = {
    button: {
      color:'#0D1117', 
      borderColor:'#0D1117', 
      padding:'2%', 
      margin:'5%',
      fontSize:'1.6rem'
    }
  }

  return (
    <div className='container'>
      <div className='container-logos'>
        <img className='logo' src={pokeball}></img>
        <img className='word-logo' src={pokemon}></img>
      </div>
      <MyButton sx={styles.button} variant='outlined' onClick={onClick}>{children}</MyButton>
    </div>
  )
}