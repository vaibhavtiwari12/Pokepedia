import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clearAllPokemons,
  doSaveDisplayedCards,
  doSetSearchTerm,
  doSetSearchType,
} from "../../Actions/actions";
import { getAllPokemonBasicData } from "../Utility/utils";

const useSearch = () => {
  const dispatch = useDispatch();
  const pokemons = useSelector((state) => state.pokemonReducer.pokemonDetails);
  const limit = useSelector((state) => state.pokemonReducer.limit);
  const savedTerm = useSelector((state) => state.pokemonReducer.searchTerm);
  const savedType = useSelector((state) => state.pokemonReducer.searchType);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchType, setSearchType] = useState("Name");
  useEffect(() => {
    if (pokemons.length === 0) {
      const fetchData = async () => {
        clearAllPokemons(dispatch);
        setTimeout(async () => {
          await getAllPokemonBasicData(
            dispatch,
            "https://pokeapi.co/api/v2/pokemon?limit=1118"
          );
          if (savedTerm !== "" && savedType !== "") {
            setSearchTerm(savedTerm);
            setSearchType(savedType);
            searchPokemon(savedType, savedTerm);
          }
        }, 500);
      };
      fetchData();
    } else {
      if (savedTerm !== "" && savedType !== "") {
        setSearchTerm(savedTerm);
        setSearchType(savedType);
        searchPokemon(savedType, savedTerm);
      }
    }
  }, []);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };
  const handleReset = async (event) => {
    setSearchTerm("");
    setSearchType("Name");
    await getAllPokemonBasicData(
      dispatch,
      `https://pokeapi.co/api/v2/pokemon?limit=${limit}`,
      true,
      true
    );
    doSetSearchTerm(dispatch, searchTerm);
    doSetSearchType(dispatch, searchType);
  };
  const handleSubmit = async (event) => {
    if (event) {
      event.preventDefault();
    }
    if (searchTerm) {
      searchPokemon(searchType, searchTerm);
    } else {
      await getAllPokemonBasicData(
        dispatch,
        `https://pokeapi.co/api/v2/pokemon?limit=${limit}`,
        true,
        true
      );
    }
    doSetSearchTerm(dispatch, searchTerm);
    doSetSearchType(dispatch, searchType);
  };
  const searchPokemon = (searchType, term) => {
    if (searchType === "Name") {
      const filteredPokemon = pokemons.filter((pokemon) => {
        return pokemon.name.toLowerCase() === term.toLowerCase();
      });
      doSaveDisplayedCards(dispatch, filteredPokemon);
    } else if (searchType === "Ability") {
      const filteredPokemon = pokemons.filter((pokemon) => {
        return pokemon.abilities.includes(term.toLowerCase());
      });
      doSaveDisplayedCards(dispatch, filteredPokemon);
    }
  };

  const handleSelectChange = (event) => {
    setSearchType(event.target.value);
  };
  return {
    handleChange,
    handleSubmit,
    searchTerm,
    searchType,
    handleSelectChange,
    handleReset,
  };
};

export default useSearch;
