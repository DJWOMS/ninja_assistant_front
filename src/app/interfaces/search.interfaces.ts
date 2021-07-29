export interface WordCreate {
  word_en: string;
  word_ru: string;
  game_id: number;
}


export interface WordList {
  id: number;
  word_en: string;
  word_ru: string;
  image: string;
  game: {
    name: string
  }
}


export interface WordSingle {
  id: number;
  word_en: string;
  word_ru: string;
  definition: string;
  image: string;
  create_at: string;
  update_at: string;
  game: {
    name: string
  };
  user: {
    id: number,
    username: string,
    avatar: string
  };
}


export interface GameList {
  id: number;
  name: string;
}

