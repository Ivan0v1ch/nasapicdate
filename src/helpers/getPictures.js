export const getPictures = async (date) => {
    const urlApi = `https://api.nasa.gov/planetary/apod?api_key=HaEf3lF6ZUnrWVhNduhIIiNdBNLzLzhk67YRvwe4&date=${date}`;
    const resp = await fetch(urlApi);
    const data = await resp.json();
    const { explanation, hdurl, title,media_type,url } = data;

    return {
        explanation,
        hdurl,
        title,
        media_type,
        url,

    }
}

