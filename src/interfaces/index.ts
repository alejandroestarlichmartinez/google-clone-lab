export interface ISearchResult {
  kind: string;
  url: URL;
  queries: Queries;
  context: Context;
  searchInformation: SearchInformation;
  items: Item[];
}

export interface Context {
  title: string;
}

export interface Item {
  kind: Kind;
  title: string;
  htmlTitle: string;
  link: string;
  displayLink: string;
  snippet: string;
  htmlSnippet: string;
  cacheId?: string;
  image: Image;
  formattedUrl: string;
  htmlFormattedUrl: string;
  pagemap: Pagemap;
}

export interface Image {
  contextLink:     string;
  height:          number;
  width:           number;
  byteSize:        number;
  thumbnailLink:   string;
  thumbnailHeight: number;
  thumbnailWidth:  number;
}

export enum Kind {
  CustomsearchResult = "customsearch#result",
}

export interface Pagemap {
  cse_thumbnail?: CSEThumbnail[];
  metatags: { [key: string]: string }[];
  cse_image?: CSEImage[];
  imageobject?: Imageobject[];
  person?: Person[];
  interactioncounter?: Interactioncounter[];
  videoobject?: Videoobject[];
  collection?: Collection[];
  creativework?: Creativework[];
  socialmediaposting?: Socialmediaposting[];
  hcard?: Hcard[];
}

export interface Collection {
  name: string;
}

export interface Creativework {
  name: CreativeworkName;
  url: string;
}

export enum CreativeworkName {
  ExpandedTweetURLs = "Expanded Tweet URLs",
}

export interface CSEImage {
  src: string;
}

export interface CSEThumbnail {
  src: string;
  width: string;
  height: string;
}

export interface Hcard {
  url_text?: string;
  bday?: string;
  fn: string;
  label?: string;
  category?: string;
  url: string;
}

export interface Imageobject {
  contenturl?: string;
  width: string;
  caption?: string;
  thumbnailurl?: string;
  url?: string;
  height?: string;
}

export interface Interactioncounter {
  userinteractioncount: string;
  interactiontype: string;
  name: InteractioncounterName;
  url: string;
}

export enum InteractioncounterName {
  Likes = "Likes",
  Quotes = "Quotes",
  Replies = "Replies",
  Retweets = "Retweets",
}

export interface Person {
  identifier?: string;
  givenname?: string;
  additionalname?: string;
  disambiguatingdescription?: string;
  name?: string;
  url?: string;
}

export interface Socialmediaposting {
  identifier: string;
  commentcount?: string;
  articlebody?: string;
  position?: string;
  datecreated: Date;
  datepublished: Date;
  url?: string;
  ispartof?: string;
}

export interface Videoobject {
  duration: string;
  embedurl: string;
  contenturl: string;
  uploaddate: Date;
  name: string;
  description: string;
  caption: string;
  thumbnailurl: string;
}

export interface Queries {
  request: NextPage[];
  nextPage: NextPage[];
}

export interface NextPage {
  title: string;
  totalResults: string;
  searchTerms: string;
  count: number;
  startIndex: number;
  inputEncoding: string;
  outputEncoding: string;
  safe: string;
  cx: string;
}

export interface SearchInformation {
  searchTime: number;
  formattedSearchTime: string;
  totalResults: string;
  formattedTotalResults: string;
}

export interface URL {
  type: string;
  template: string;
}
