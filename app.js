const token = "Rl5sN8oj6HlOtisslGhhMPCMJPvvtUAZ"
const searchBar = document.querySelector('#searchBar');
const submitBtn = document.querySelector('#submitBtn')
const form = document.querySelector('#gifForm')
const gifMainDiv = document.querySelector('#gifMainDiv')
const gifCanvas = document.querySelector('#gifCanvas')
const baleeted = document.querySelector('#delete')




form.addEventListener('submit', async function(e){
    e.preventDefault();
    const res = await axios.get('https://api.giphy.com/v1/gifs/search', {
        params: {
            q: searchBar.value,
            api_key: token
        }
    });

    let giphyArr = res.data.data.length;
    let randomIndex = Math.floor(Math.random() * giphyArr)

    let gifRow = document.createElement('div');
    gifRow.classList.add('col-6');
    gifCanvas.append(gifRow);

    let gifImg = document.createElement('img');
    gifImg.src = res.data.data[`${randomIndex}`].images.original.url;
    gifImg.classList.add('createdGif');
    gifImg.classList.add('img-fluid')
    gifRow.append(gifImg);
    
    searchBar.value = "";
})

baleeted.addEventListener('click', function(e){
    let player = document.querySelector('#homestar');
    player.play();
    gifCanvas.innerHTML = '';
})
