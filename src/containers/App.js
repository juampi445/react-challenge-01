import { useDispatch } from 'react-redux';
import { getPokemons, setLoader } from "../actions";
import { Button } from './../components/Button';
import { ListPokemons } from './../components/ListPokemons';
import { Routes, Route } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import './../styles/app.css';

function App() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const btnText = 'Abrir Pokedex';

  const makeCall = () => {
    dispatch(setLoader());
    dispatch(getPokemons(0));
    navigate('/pokedex');
  }

  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Button onClick={makeCall} children={btnText}/>}/>
        <Route path={'/pokedex'} element={<ListPokemons/>}/>
      </Routes>
    </div>
  );
}

export default App;
