type PokemonResponse = { results: PokemonDetail[] };

type PokemonDetail = {
  name: string;
  url: string;
};

export default PokemonResponse;
