
export const getCharateres = async () => {


    const url = 'https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=a469d537242aa86366793c4d967002ba&hash=7f20301e7b4fa19a61cffb032aab3714&limit=30';
    // const url = `https://gateway.marvel.com:443/v1/public/characters?name=${encodeURI(name)}ts=1&apikey=a469d537242aa86366793c4d967002ba&hash=7f20301e7b4fa19a61cffb032aab3714&limit=30`;

    const resp = await fetch(url);
    const { data } = await resp.json();
    // console.log(data);

    const characters = data.results.map(results => {
        return {
            id: results.id,
            name: results.name,
            description: results.description,
            thumbnail: results.thumbnail.path + "." + results.thumbnail.extension
        }
    })

    return characters;
}