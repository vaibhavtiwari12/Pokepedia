import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";

const PokeCard = ({ pokemon, handleModal }) => {
  const handleDetails = () => {
    handleModal(pokemon);
  };
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle tag="h5">{pokemon.name}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">
            Height : {pokemon.height}
          </CardSubtitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">
            Weight : {pokemon.weight}
          </CardSubtitle>
        </CardBody>
        <CardImg
          className="border-top border-bottom border-start-0 border-end-0"
          top
          width="25%"
          src={pokemon.picture}
          alt="Card image cap"
        />
        <CardBody>
          Abilities:
          <ul>
            {pokemon.abilities.map((ability) => {
              return <li key={ability}>{ability}</li>;
            })}
          </ul>
          <Button onClick={handleDetails} color="primary">
            View Details
          </Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default PokeCard;
