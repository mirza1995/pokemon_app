import { PokemonCard } from '@components/PokemonCard';
import { Pokemon } from '@models/Pokemon';

type PokemonsListProps = {
  pokemons: Pokemon[];
};

export const PokemonsList = ({ pokemons }: PokemonsListProps) => {
  return (
    <div className='grid gap-5 px-5 max-sm:px-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
      {pokemons?.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
};
