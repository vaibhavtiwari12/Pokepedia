import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearDisplayCards } from "../../Actions/actions";
import Cards from "../Cards/Cards";
import Limit from "../Limit/Limit";
import NavBar from "../NavBar/NavBar";
import Paginate from "../Pagination/Paginate";
import Search from "../Search/Search";
import Sort from "../Sort/Sort";
import { getAllPokemonBasicData } from "../Utility/utils";

const Home = () => {
  const dispatch = useDispatch();
  const limit = useSelector((state) => state.pokemonReducer.limit);
  const searchTerm = useSelector((state) => state.pokemonReducer.searchTerm);
  useEffect(() => {
    if (searchTerm === "") {
      const fetchData = async () => {
        clearDisplayCards(dispatch);
        await getAllPokemonBasicData(
          dispatch,
          `https://pokeapi.co/api/v2/pokemon?limit=${limit}`,
          true,
          true
        );
      };
      fetchData();
    }
  });
  return (
    <div className="mb-4">
      <NavBar></NavBar>
      <Search></Search>
      <Sort />
      {searchTerm === "" ? (
        <div>
          <Limit />
          <Paginate />
        </div>
      ) : (
        ""
      )}
      <Cards />
      {searchTerm === "" ? <Paginate /> : ""}
    </div>
  );
};
export default Home;
