type Params = {
  searchTerm: string;
  startIndex?: string
  isImage?: boolean;
}

export const searchEngine = async ({ searchTerm, startIndex = "1", isImage = false }: Params) => {
  const country = await fetch(
    `http://ip-api.com/json`
  )
    .then((res) => res.json())
    .then((data) => data.countryCode.toLowerCase());

  const url = `${process.env.API_URL}?cx=${process.env.CONTEXT_KEY}&gl=${country}&lr=${country}&key=${process.env.API_KEY}&q=${searchTerm}${isImage ? "&searchType=image" : ""}&start=${startIndex}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  const data = await response.json();

  return data;
}