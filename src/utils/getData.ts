export const getData = async (query: string) => {
  const options = {
    method: "POST",
    mode: "cors" as RequestMode,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Token ${process.env.REACT_APP_API_BASE_TOKEN}`,
      //"X-Secret": process.env.REACT_APP_API_BASE_SECRET,
    },
    body: JSON.stringify({ query: query }),
  };

  const response = await fetch(
    "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address",
    options
  );
  let data;

  try {
    data = await response.json();
  } catch (error) {
    console.error(error);
  }
  return data;
};
