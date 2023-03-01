interface OfficialArtwork {
  front_default: string;
}

interface Other {
  'official-artwork': OfficialArtwork;
}

interface Sprites {
  other: Other;
}

export interface PokemonResponse {
  id: number;
  name: string;
  sprites: Sprites;
}
