import { addFavourite, getFavourites, removeFavourite } from "./data.js"

  function listFavourites(faveTrailer) {
    let html = ''
    const faveItem = document.querySelector('#here')
    for (let rec of faveTrailer) {
      html +=
      
        ` <tr>  
            <td>${rec.title}</td> 
            <td><button onclick="removeFave('${rec.title.id}')">remove</button></td>
            <br>
            </tr> 
        `
    } faveItem.innerHTML = html
  }
  async function favourite(title) {
        let result = await addFavourite(title)
        alert(result.id);
  }
  window.favourite = favourite;

  function renderFavourites(favourites) {
        console.log(favourites);
        listFavourites(favourites);
  }

  async function removeFave(userid) {
    const result = await removeFavourite(userid)
    if(result !== null)
    alert(result);
    else
    alert(result, 'Not found')
}
window.removeFave = removeFave;

  getFavourites(renderFavourites);

 
