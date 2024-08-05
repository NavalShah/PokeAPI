// fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
//     .then(response => {
//         if(!response.ok){
//             throw new Error("COULD NOT FETCH RESOURCE")
//         }
//         return response.json();
//     })
//     .then(data => console.log(data.weight))
//     .catch(error => console.log(error));

fetchData();

async function fetchData() {
    try{
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/mewtwo');

        if(!response.ok){
            throw new Error ("Could not find resource");
        }

        const data = await response.json();
        console.log(data);
    }
    catch(error){
        console.log(error)
    }
}
