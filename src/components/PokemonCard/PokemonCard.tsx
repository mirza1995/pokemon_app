import { Pokemon } from '@models/Pokemon';

type PokemonCardProps = {
  pokemon: Pokemon;
};

export const PokemonCard = ({ pokemon }: PokemonCardProps) => {
  return (
    <div className='relative aspect-[1/1.25] rounded-3'>
      <div className='absolute z-0 aspect-[1/1.25] w-full'>
        <img
          src={pokemon.image}
          onError={({ currentTarget }) =>
            (currentTarget.style.display = 'none')
          }
          className='absolute top-0 left-0 h-full w-full rounded-3'
        />
        <div className='absolute top-0 left-0 h-full w-full rounded-3 bg-photo-gradient' />
      </div>

      <div className='relative z-[5] flex h-full items-end font-ubuntu font-normal text-white'>
        <div className='mb-5 w-full text-center'>
          <h2 className='text-lg font-bold capitalize '>{pokemon.name}</h2>
        </div>
      </div>
    </div>
  );
};
