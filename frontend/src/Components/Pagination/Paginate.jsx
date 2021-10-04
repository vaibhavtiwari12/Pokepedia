import { useDispatch, useSelector } from "react-redux";
import { Button, ButtonGroup } from "reactstrap";
import { clearDisplayCards } from "../../Actions/actions";
import { getAllPokemonBasicData } from "../Utility/utils";
const Paginate = () => {
  const dispatch = useDispatch();
  const next = useSelector((state) => state.pokemonReducer.next);
  const previous = useSelector((state) => state.pokemonReducer.previous);

  const handleNext = () => {
    clearDisplayCards(dispatch);
    getAllPokemonBasicData(dispatch, next, true, true);
  };
  const handlePrevious = () => {
    clearDisplayCards(dispatch);
    getAllPokemonBasicData(dispatch, previous, true, true);
  };
  return (
    <div className="mx-3 mt-3 d-flex justify-content-end">
      <ButtonGroup size="md">
        {previous ? (
          <Button onClick={handlePrevious}>{"< "}Previous Page</Button>
        ) : (
          ""
        )}
        {next ? <Button onClick={handleNext}>Next Page {">"}</Button> : ""}
      </ButtonGroup>
    </div>
  );
};
export default Paginate;
