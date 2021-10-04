import {
  doSaveInitialDisplayCards,
  doSavePokemon,
  doSetNext,
  doSetPrevious,
} from "../../Actions/actions";

export const getAllPokemonBasicData = async (
  dispatch,
  url,
  isDisplayCardRequest,
  setPaginationData
) => {
  const response = await fetch(url);
  const res = await response.json();
  if (res && res.results.length > 0) {
    if (res.next && setPaginationData) {
      doSetNext(dispatch, res.next);
    }
    if (res.previous && setPaginationData) {
      doSetPrevious(dispatch, res.previous);
    }
    res.results.map(async (pokemon) => {
      await fetchPokemonData(pokemon, dispatch, isDisplayCardRequest);
    });
  }
};

const fetchPokemonData = async (pokemon, dispatch, isDisplayCardRequest) => {
  const response = await fetch(pokemon.url);
  const pokeData = await response.json();
  await savePokeData(
    pokemon.name,
    pokemon.url,
    pokeData,
    dispatch,
    isDisplayCardRequest
  );
};

const savePokeData = async (
  name,
  detailUrl,
  pokeData,
  dispatch,
  isDisplayCardRequest
) => {
  const preparedPokeData = {
    name,
    url: detailUrl,
    height: pokeData.height,
    weight: pokeData.weight,
    abilities: getAbilityData(pokeData.abilities),
    picture: pokeData.sprites.other["official-artwork"].front_default,
  };
  isDisplayCardRequest
    ? doSaveInitialDisplayCards(dispatch, preparedPokeData)
    : await doSavePokemon(dispatch, preparedPokeData);
};

const getAbilityData = (abilities) => {
  return abilities.map((abilities) => abilities.ability.name);
};

export const sortPokemonData = (type, data) => {
  switch (type) {
    case "Name":
      return data.sort((a, b) =>
        a.name > b.name ? 1 : b.name > a.name ? -1 : 0
      );
    case "Height":
      return data.sort((a, b) =>
        a.height > b.height ? 1 : b.height > a.height ? -1 : 0
      );
    case "Weight":
      return data.sort((a, b) =>
        a.weight > b.weight ? 1 : b.weight > a.weight ? -1 : 0
      );
    default:
      return data;
  }
};
