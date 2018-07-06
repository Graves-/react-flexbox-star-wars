import React, { Component } from 'react';
import CharacterItem from './CharacterItem';

export default class CharacterGrid extends Component {
    constructor(props){
        super(props);
        this.state = {
            characters: []
        }
    }
    componentDidMount(){
        fetch('https://swapi.co/api/people/?format=json').then(res => {
            return res.json();
        }).then(jsonRes => {
            this.setState({ characters: jsonRes.results });
        });
    }
    render() {
        return (
            <div style={ESTILOS.cont}>
                {this.state.characters.map(val => {
                    return <CharacterItem key={val.url} info={val}  />
                })}
            </div>
        );
    }
}

const ESTILOS = {
    cont: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly'
    }
};
