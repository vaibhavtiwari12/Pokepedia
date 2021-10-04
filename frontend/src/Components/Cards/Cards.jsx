import Card from "./PokeCard";
import { Row, Col } from "reactstrap";
import { useSelector } from "react-redux";
import { useState } from "react";
import CustomModal from "../Utility/CustomModal";
import Details from "../Details/Details";

const Cards = () => {
  const displayedCards = useSelector(
    (state) => state.pokemonReducer.displayedCards
  );
  const [pokemon, setPokemon] = useState({});
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const handleModal = (pokemon) => {
    setPokemon(pokemon);
    setModal(true);
  };
  return (
    <div>
      <Row className="mx-lg-3 mx-md-3 mx-sm-3">
        {displayedCards && displayedCards.length > 0
          ? displayedCards.map((pokemon) => (
              <Col
                key={pokemon.url}
                sm="12"
                md="4"
                lg="3"
                className="mt-sm-4 mt-lg-4 mt-md-4 "
              >
                <Card pokemon={pokemon} handleModal={handleModal} />
              </Col>
            ))
          : "Please Wait while we load the details..."}

        <CustomModal
          heading={pokemon.name}
          modal={modal}
          onHandleToggle={toggle}
        >
          <Details pokeData={pokemon}></Details>
        </CustomModal>
      </Row>
    </div>
  );
};
export default Cards;
