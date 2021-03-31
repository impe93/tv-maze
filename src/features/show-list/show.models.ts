export type ShowWithScore = {
  show: Show;
  score: number;
}

export type Show = {
  id: number;
  url: string;
  name: string;
  type: string;
  language: string;
  genres?: string[] | null;
  status: string;
  runtime: number;
  premiered: string;
  officialSite: string;
  schedule: Schedule;
  rating: Rating;
  weight: number;
  network: Network;
  webChannel?: null;
  externals: Externals;
  image: Image;
  summary: string;
  updated: number;
  _links: Links;
};

export type Schedule = {
  time: string;
  days?: string[] | null;
};

export type Rating = {
  average: number;
};

export type Network = {
  id: number;
  name: string;
  country: Country;
};

export type Country = {
  name: string;
  code: string;
  timezone: string;
};

export type Externals = {
  tvrage: number;
  thetvdb: number;
  imdb: string;
};

export type Image = {
  medium: string;
  original: string;
};

export type Links = {
  self: SelfOrPreviousepisode;
  previousepisode: SelfOrPreviousepisode;
};

export type SelfOrPreviousepisode = {
  href: string;
};
