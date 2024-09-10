const API = 'https://spotify23.p.rapidapi.com/artist_albums/?id=4cJD9t5QBFTUQcd3xfbOb2&offset=0&limit=100';

const content = null || document.getElementById("content_albums");

const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '6406f93a86mshef8138252eb8ca8p1b0d94jsnbf0e8f74e41d',
        'x-rapidapi-host': 'spotify23.p.rapidapi.com'
	}
};


async function fetchData(urlApi) {
    const response = await fetch(urlApi, options);
    const data = await response.json();
    return data;
}

//Creamos una funcion que se invoca a si misma asi no tenemos que llamarla luego, sino
//es automatica
(async () => {
    try {
      const albums = await fetchData(API);
      let view = `${albums.data.artist.discography.albums.items.map(album => `
        <div class="group relative">
        <div
          class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
          <img src="${album.releases.items[0].coverArt.sources[0].url}" alt="${album.releases.items[0].name}" class="w-full">
        </div>
        <div class="mt-4 flex justify-between">
          <h3 class="text-sm text-gray-700 font-bold">
            <span aria-hidden="true" class="absolute inset-0"></span>
            ${album.releases.items[0].name}
          </h3>
        </div>
      </div>
        `).slice(0,4).join('')}
        `;
      content.innerHTML = view;
    } catch (error) {
      console.log(error);
    }
})();




// try {
//     const response = await fetch(url, options);
//     const result = await response.text();
//     console.log(result);
// } catch (error) {
//     console.error(error);
// }