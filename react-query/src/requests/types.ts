export interface Items {
  count: number;
  total: number;
  per_page: number;
}

export interface Pagination {
  last_visible_page: number;
  has_next_page: boolean;
  current_page: number;
  items: Items;
}

export interface Jpg {
  image_url: string;
  small_image_url: string;
  large_image_url: string;
}

export interface Webp {
  image_url: string;
  small_image_url: string;
  large_image_url: string;
}

export interface Images {
  jpg: Jpg;
  webp: Webp;
}

export interface Title {
  type: string;
  title: string;
}

export interface From {
  day: number;
  month: number;
  year: number;
}

export interface To {
  day?: number | null;
  month?: number | null;
  year?: number | null;
}

export interface Prop {
  from: From;
  to: To;
}

export interface Published {
  from: Date | string | null;
  to?: Date | string | null;
  prop: Prop;
  string: string;
}

export interface Author {
  mal_id: number;
  type: string;
  name: string;
  url: string;
}

export interface Serialization {
  mal_id: number;
  type: string;
  name: string;
  url: string;
}

export interface Genre {
  mal_id: number;
  type: string;
  name: string;
  url: string;
}

export interface Theme {
  mal_id: number;
  type: string;
  name: string;
  url: string;
}

export interface Demographic {
  mal_id: number;
  type: string;
  name: string;
  url: string;
}

export interface TopManga {
  mal_id: number;
  url: string;
  images: Images;
  approved: boolean;
  titles: Title[];
  title: string;
  title_english: string | null;
  title_japanese: string;
  title_synonyms: string[];
  type: string;
  chapters?: number | null;
  volumes?: number | null;
  status: string;
  publishing: boolean;
  published: Published;
  score: number;
  scored: number;
  scored_by: number;
  rank: number;
  popularity: number;
  members: number;
  favorites: number;
  synopsis: string;
  background: string | null;
  authors: Author[];
  serializations: Serialization[];
  genres: Genre[];
  explicit_genres: any[];
  themes: Theme[];
  demographics: Demographic[];
}

export interface TopMangaApiResponse {
  pagination: Pagination;
  data: TopManga[];
}
