import './Player.css';
import { useState } from 'react';


// eslint-disable-next-line react/prop-types
export default function Player({namePlayer, onChangeName, keyName, playerSymbol, onChangeSymbol, keySymbol, isActive}){


    const [isEditing, setIsEditing] = useState(false); //crear estado para poder cambiar el valor del nombre

    function handleClickButton (){ //Crear una arrow function para dar valores al useState
    setIsEditing((isEditing)=>!isEditing);
    }

const playerNameField = isEditing
? (<input type="text" name="" id="" required value={namePlayer} onChange={(event)=>onChangeName(event, keyName)}/>) //establecer valor por defecto
: ( <span className="player-symbol">{playerSymbol}</span>);

const playerSymbolField = isEditing
? (<input type="text" name="" id="" maxLength='1' required value={playerSymbol} onChange={(event)=>onChangeSymbol(event, keySymbol)}/>) //establecer valor por defecto
: ( <span className="player-name">{namePlayer}</span>);

const buttonChangeValue = isEditing
? ("Guardar")
: ("Cambiar");

    return (
        <>
            <li className={isActive ? 'active': undefined}>
                <span className="player">
                    {playerNameField}
                    {playerSymbolField}
                </span>
                <button onClick={()=>handleClickButton()} disabled={!isActive}>{buttonChangeValue}</button>
            </li>
        
        </>
    );
}

//nuestros componentespueden tener tantos estados como necesitemos
// vinculación bidireccional