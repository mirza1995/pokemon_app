import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { injectIntl, IntlShape } from 'react-intl';

import { userSelector } from '@store/store';
import { SearchButton } from '@components/SearchButton';
import { HelmetWrapper } from '@components/HelmetWrapper';
import { PokemonsList } from '@components/PokemonsList';
import { Pokemon } from '@models/Pokemon';
import { PokemonShortInfo } from '@models/PokemonShortInfo';
import { PokemonResponse } from '@models/PokemonResponse';
import pokemonService from '@services/pokemonService';
import { PokemonsResponse } from '@models/PokemonsResponse';

type MainPageProps = {
  intl: IntlShape;
};

const MainPage = ({ intl }: MainPageProps) => {
  const { user } = useSelector(userSelector);

  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    fetchPokemons();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchPokemons = async () => {
    const pokemonsResponse: PokemonsResponse =
      await pokemonService.getPokemons();
    const pokemonsShortInfoList: PokemonShortInfo[] = pokemonsResponse.results;

    const pokemonsList = await getDetailPokemonList(pokemonsShortInfoList);
    setCount(pokemonsResponse.count);
    setPokemons(pokemonsList);
  };

  const getDetailPokemonList = async (pokemonsList: PokemonShortInfo[]) => {
    const pokemonPromises = pokemonsList.map(
      (pokemonShortInfo: PokemonShortInfo) => {
        return pokemonService.getPokemon(pokemonShortInfo.url);
      }
    );

    const pokemonsDetailInfoList: PokemonResponse[] = await Promise.all(
      pokemonPromises
    );

    return pokemonsDetailInfoList.map((pokemonDetailInfo: PokemonResponse) => {
      return {
        id: pokemonDetailInfo.id,
        name: pokemonDetailInfo.name,
        image: pokemonDetailInfo.sprites.other['official-artwork'].front_default
      };
    });
  };

  return (
    <>
      <HelmetWrapper
        title='Home'
        content='Pokemon list with their names and photos.'
        canonicalLink='/'
      />

      <main className='mt-7 lg:mt-[108px]'>
        <div className='h-[500px] w-full bg-banner bg-cover pt-[135px]'>
          <div>
            <div className='mx-auto text-center font-montserrat text-white sm:w-[385px] md:w-[506px]'>
              <h1 className='text-4xl font-semibold'>
                <FormattedMessage id='main.page.banner.discover' />
              </h1>
              <h6 className='mt-4 text-subtitle font-normal opacity-70'>
                <FormattedMessage
                  id='main.page.banner.explore'
                  values={{ count: count }}
                />
              </h6>
            </div>

            <div className='mx-auto mt-[45px] w-[307px] font-ubuntu text-base md:w-[458px] lg:w-[600px]'>
              <SearchButton
                name='search'
                placeholder={intl.formatMessage({
                  id: 'search.input.placeholder'
                })}
              />
            </div>
          </div>
        </div>

        <div className='mt-[40px] lg:mt-[70px]'>
          <PokemonsList pokemons={pokemons} />
        </div>
      </main>
      <div className='h-5'></div>
    </>
  );
};

export default injectIntl(MainPage);
