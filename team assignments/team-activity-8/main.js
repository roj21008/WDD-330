
/*const requestURL = "https://swapi.dev/api/"

let dataRequest;
fetch(requestURL)
    .then(request => request.json())
    .then(data => console.log(data));
     

*/


let starwarsAPI = "https://swapi.dev/api/starships/";


fetch(starwarsAPI)
  .then((response) => response.json())
  
  .then((ships) => {showShips(ships.results);
                    console.log(ships);});

showShips = (ships) =>{
    const shipsDiv = document.querySelector("#shiplist");

    ships.forEach((ship) => {
        const tableRowEle = document.createElement('tr');

        tableRowEle.innerHTML = `
            <td><a href="${ship.url}">${ship.name}</a></td>
            <td>${ship.length}</td>
            <td>${ship.crew}</td>
            `;
        shipsDiv.append(tableRowEle);
    });

};



    