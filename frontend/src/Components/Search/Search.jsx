import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import useSearch from "./useSearch";
const Search = () => {
  const {
    handleChange,
    handleSubmit,
    handleSelectChange,
    searchTerm,
    searchType,
    handleReset,
  } = useSearch();
  return (
    <div className="mx-3 mt-3 shadow px-3 py-4">
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="searchType">Search By:</Label>
          <Input
            type="select"
            name="select"
            id="searchType"
            value={
              searchType === "Name" || searchType === "" ? "Name" : "Ability"
            }
            onChange={(e) => handleSelectChange(e)}
          >
            <option value="Name">Name</option>
            <option value="Ability">Ability</option>
          </Input>
        </FormGroup>
        <FormGroup className="mt-2">
          <Label for="search">Search Pokemon</Label>
          <Input
            name="search"
            value={searchTerm}
            onChange={(e) => handleChange(e)}
          />
        </FormGroup>
        <FormGroup inline>
          <Button size="md" color="primary" className="mt-3" type="submit">
            Submit
          </Button>
          <Button
            size="md"
            color="primary"
            onClick={handleReset}
            className="mt-3 ms-2"
          >
            Reset
          </Button>
        </FormGroup>
      </Form>
    </div>
  );
};
export default Search;
