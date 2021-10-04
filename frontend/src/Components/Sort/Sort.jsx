import { useDispatch, useSelector } from "react-redux";
import { Form, FormGroup, Label, Input } from "reactstrap";
import {
  clearDisplayCards,
  doSaveDisplayedCards,
  doSetSortOrder,
} from "../../Actions/actions";

import { sortPokemonData } from "../Utility/utils";

const Sort = () => {
  const dispatch = useDispatch();
  const displayedCards = useSelector(
    (state) => state.pokemonReducer.displayedCards
  );
  const sortBy = useSelector((state) => state.pokemonReducer.sortBy);
  const handleSort = (event) => {
    doSetSortOrder(dispatch, event.target.value);
    clearDisplayCards(dispatch);
    const updatedDisplayCards = sortPokemonData(
      event.target.value,
      displayedCards
    );
    doSaveDisplayedCards(dispatch, updatedDisplayCards);
  };
  return (
    <div className="mx-3 mt-3">
      <Form>
        <FormGroup>
          <Label for="sort">Sort By (Asc)</Label>
          <Input
            type="select"
            name="select"
            id="limisortt"
            value={sortBy}
            onChange={(e) => handleSort(e)}
          >
            <option value="Name">Name</option>
            <option value="Height">Height</option>
            <option value="Weight">Weight</option>
          </Input>
        </FormGroup>
      </Form>
    </div>
  );
};
export default Sort;
