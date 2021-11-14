export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=FVuIHOLMhnq9M7IHkMQoY3EuDiz55ZwI`;
  const res = await fetch(url);
  const { data } = await res.json();

  return data.map(({ id, title, images: { downsized_medium } }) => {
    const { url: image } = downsized_medium;

    return ({ id, title, image });
  });
};
