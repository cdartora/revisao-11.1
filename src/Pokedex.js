import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      index: 0,
      type: 'fire',
    };

    this.nextPokemon = this.nextPokemon.bind(this);
  };

  filterPokemon = ({target}) => {
    this.setState({ type: target.innerText })
  };

  // callback de filtragem da HOF filter
  byType = (pokemon) => {
    const { type } = this.state;
    return pokemon.type.toLowerCase() === type;
  };

  nextPokemon() {
    const { pokemons } = this.props;
    const pokemonsFiltered = pokemons.filter(this.byType); // função byType definida na linha 17
    this.setState((estadoAnterior, _props) => {
      if (estadoAnterior.index === pokemonsFiltered.length - 1) {
        return { index: 0 }
      }

      return {
        index: estadoAnterior.index + 1,
      }
    });

  }

  render() {
    const { pokemons } = this.props;
    const { index } = this.state;
    return (
      <div className="pokedex">

        <Pokemon pokemon={pokemons.filter(this.byType)[index]} /> 

        <button onClick={ this.nextPokemon } >
          Próximo Pokemon
        </button>

        <button onClick={this.filterPokemon} >
          fire
        </button>

        <button onClick={this.filterPokemon} >
          psychic
        </button>

        <button onClick={this.resetPokemon} >
          all
        </button>
      </div>
    );
  }
}

export default Pokedex;