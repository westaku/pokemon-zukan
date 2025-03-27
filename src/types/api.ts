export type PokemonListResponse = {
  count: number;
  next: string;
  previous: string;
  results: { name: string; url: string }[];
};

export type PokemonResponse = {
  id: number;
  name: string;
  height: number;
  weight: number;
  types: {
    slot: number;
    type: {
      name: string;
      url: string;
    };
  }[];
  sprites: {
    front_default: string;
  };
  abilities: {
    ability: {
      name: string;
      url: string;
    };
    is_hidden: boolean;
    slot: number;
  }[];
};
