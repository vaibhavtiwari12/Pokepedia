const Details = ({ pokeData }) => {
  return (
    <div>
      <h6>General Information: </h6>
      <ul>
        <li>Weight: {pokeData.weight}</li>
        <li>Height: {pokeData.height}</li>
        <li>URL: {pokeData.url}</li>
      </ul>
      <h6>Abilities: </h6>
      <ul>
        {pokeData.abilities.map((ability) => {
          return <li key={ability}>{ability}</li>;
        })}
      </ul>
    </div>
  );
};
export default Details;
