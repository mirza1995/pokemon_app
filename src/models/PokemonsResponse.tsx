import { PokemonShortInfo } from './PokemonShortInfo';

export interface PokemonsResponse {
  count: number;
  next: string;
  previous: string;
  results: PokemonShortInfo[];
}
