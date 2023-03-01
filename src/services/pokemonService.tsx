import { PokemonResponse } from '@models/PokemonResponse';
import { PokemonsResponse } from '@models/PokemonsResponse';
import { get } from './baseService';

const getPokemons: () => Promise<PokemonsResponse> = () => {
  return get('https://pokeapi.co/api/v2/pokemon?limit=20');
};

const getPokemon: (url: string) => Promise<PokemonResponse> = (url: string) => {
  return get(url);
};

export default {
  getPokemons,
  getPokemon
};
