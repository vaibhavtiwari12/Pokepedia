import { useDispatch, useSelector } from "react-redux";
import { Form, FormGroup, Label, Input } from "reactstrap";
import { clearDisplayCards, doSaveLimit } from "../../Actions/actions";
import { getAllPokemonBasicData } from "../Utility/utils";
const Limit = () => {
  const dispatch = useDispatch();
  const limit = useSelector((state) => state.pokemonReducer.limit);
  const handleLimitChange = (event) => {
    doSaveLimit(dispatch, event.target.value);
    clearDisplayCards(dispatch);
    getAllPokemonBasicData(
      dispatch,
      `https://pokeapi.co/api/v2/pokemon?limit=${event.target.value}`,
      true
    );
  };
  return (
    <div className="mx-3 mt-3">
      <Form>
        <FormGroup>
          <Label for="searchType">Number of Cards Visible</Label>
          <Input
            type="select"
            name="select"
            id="limit"
            value={limit}
            onChange={(e) => handleLimitChange(e)}
          >
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="50">50</option>
          </Input>
        </FormGroup>
      </Form>
    </div>
  );
};
export default Limit;
