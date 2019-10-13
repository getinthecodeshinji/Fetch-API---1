//https://api.github.com/users/${name}`



function init() {

    function createNode(element){
        return document.createElement(element);
    }

    function append(parent, el){
        return parent.appendChild(el);
    }

    const films_container = document.getElementById("films_container");
    const url = "https://ghibliapi.herokuapp.com/films";

    //Fetches the data from the URL provided in the fetch call
    fetch(url).then(function(response){
        return response.json();
    }).then(function(films){

        return films.map(function(film){
            let div = createNode("div");
            let heading = createNode("h2");
            let subheading = createNode("h3");
            let director = createNode("h5");
            let description = createNode("p");
            let characterList = createNode("ul");
            let characterHeading = createNode("h5");

            // fetch("https://ghibliapi.herokuapp.com/people").then(function(response){
            //     return response.json();
            // }).then(function(characters){

            //     return characters.map(function(character){
            //         if(character.films.includes(film.url)) {
            //             let character_Item = createNode("li");
            //             character_Item.innerHTML += character.name;
            //             append(characterList, character_Item);
            //         }
            //     })
            // })

            //Enrolling els in classes
            //characterList.classList.add("character_list");
            description.classList.add("description");
            subheading.classList.add("film_subheading");
            heading.classList.add("film_heading");
            director.classList.add("film_director");
            div.classList.add("film");
            
            //Coding lower levels first to keep code DRY
            //characterHeading.innerHTML += `Characters`;
            description.innerHTML += film.description;
            director.innerHTML += `Director — ${film.director}`;
            subheading.innerHTML += `— ${film.release_date}`;
            heading.innerHTML += `${film.title}`;

            //Append children and build teh structure
            
            append(div, heading);
            append(div, subheading);
            append(div, director);
            append(div, description);
            //append(div, characterHeading);
            //append(div, characterList);
            append(films_container, div);
        });
    });
}

//ON window load, run the init function
window.onload = init;