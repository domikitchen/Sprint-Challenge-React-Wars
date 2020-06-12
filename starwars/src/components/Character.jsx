// Write your Character component here
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import CharStyles from './CharStyles';

export default function Character(props) {
    const [ characterIcon, setCharacteIcon ] = useState('');
    const [ characterName, setCharacterName ] = useState('');
    const [ characterStats, setCharacterStats ] = useState([]);
    const [ characterType, setCharacterType ] = useState([]);
    const [ characterAbilities, setAbilities ] = useState([]);

    const { characters } = props;

    useEffect(() =>{
        axios.get(`${characters.url}`)
            .then(response => {
                console.log(response.data);
                setCharacteIcon(response.data.sprites)
                setCharacterName(response.data.species.name);
                setCharacterStats(response.data.stats)
                setCharacterType(response.data.types);
                setAbilities(response.data.abilities);
            })
            .catch(error => {
                console.log(error);
            });
    }, [])
    return (
        <CharStyles>
            <h2>{characterName}</h2>
            <div className = 'imgContainer'>
                <img src = {characterIcon['front_default']} alt = "pokemon img" />
            </div>
            <div className = 'types'>
                {
                    characterType.map(function(pokeType, index) {
                        return (
                        <p key = {index}>{pokeType.type.name}</p>
                        );
                    })
                }
            </div>
            <div>
                {
                    characterAbilities.map(function(abilityUrl, index) {
                        return (
                            <p key = {index}>{abilityUrl.ability.name}</p>
                        );
                    })
                }
            </div>
            <div className = 'stats'>
                {
                    characterStats.map(function(stats, index) {
                        return (
                        <p key = {index}><span className = 'underline' >{stats.stat.name}</span>: {stats['base_stat']}</p>
                        );
                    })
                }
            </div>
        </CharStyles>
    );
}