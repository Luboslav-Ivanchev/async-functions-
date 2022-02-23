
async function loadCommits(id) {

    let username = document.getElementById('username').value;
    let repo = document.getElementById('repo').value;
    let ul = document.getElementById('commits');

    try {


        let url = await fetch(`https://swapi.dev/api/people/${id}`)

        let response = await url.json();
        console.log(response);

        ul.innerHTML = `${response.name}: films`;

        let films = await (response.films);

        films.forEach(film => {
            let promise = fetch(film);

            promise
                .then(res => {
                    console.log(res.type);
                    console.log(res.url)
                    ul.innerHTML += `<li>${res.type}:<a href=${res.url}>Links for films</a></li>`;
                })


        })

    }catch(error){
        console.log(`error`);
        ul.innerHTML='error';
    }
}


loadCommits(4)



