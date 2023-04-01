/*
Author: Lee Donald
Javascript for HP project
*/


// variables
const select = document.querySelector(".form select");
const grid = document.querySelector(".grid");

//house type
function showHouse(house) {
  fetch("https://hp-api.onrender.com/api/characters/house/" + house)
    .then((res) => res.json())
    .then((data) => {
      data.forEach((el) => {
        var card = document.createElement("div");
        card.classList.add("card");

        var name = document.createElement("p");
        name.textContent = el.name;

        var actor = document.createElement("p");
        actor.textContent = "Actor: " + el.actor;

        var house = document.createElement("p");
        house.textContent = el.house;
        if (el.house == "Gryffindor") {
          house.style.color = "red";
        } else if (el.house == "Slytherin") {
          house.style.color = "green";
        } else if (el.house == "Hufflepuff") {
          house.style.color = "orange";
        } else if (el.house == "Ravenclaw") {
          house.style.color = "lightgreen";
        }

        var img = document.createElement("img");
        img.setAttribute("src", el.image);

        grid.appendChild(card);
        card.appendChild(img);
        card.appendChild(name);
        card.appendChild(actor);
        card.appendChild(house);
      });
    })
    .catch((e) => console.log(e));
}

//character type
function hogwartsType(type) {
  fetch("https://hp-api.onrender.com/api/characters" + type)
    .then((res) => res.json())
    .then((data) => {
      data.forEach((el) => {
        var card = document.createElement("div");
        card.classList.add("card");

        var name = document.createElement("p");
        name.textContent = el.name;

        var actor = document.createElement("p");
        actor.textContent = "Actor: " + el.actor;

        var house = document.createElement("p");
        house.textContent = el.house;
        if (el.house == "Gryffindor") {
          house.style.color = "red";
        } else if (el.house == "Slytherin") {
          house.style.color = "green";
        } else if (el.house == "Hufflepuff") {
          house.style.color = "orange";
        } else if (el.house == "Ravenclaw") {
          house.style.color = "lightgreen";
        }

        var img = document.createElement("img");
        img.setAttribute("src", el.image);

        grid.appendChild(card);
        card.appendChild(img);
        card.appendChild(name);
        card.appendChild(actor);
        card.appendChild(house);
      });
    })
    .catch((e) => console.log(e));
}

//spell type
function spellType(spells) {
  fetch("https://hp-api.onrender.com/api/spells" + spells)
    .then((res) => res.json())
    .then((data) => {
      data.forEach((el) => {
        var card = document.createElement("div");
        card.classList.add("card");

        var name = document.createElement("p");
        name.textContent = el.name;

        var description = document.createElement("p");
        description.textContent = "description: " + el.description;

        var img = document.createElement("img");
        img.setAttribute("src", el.image);

        grid.appendChild(card);
        card.appendChild(name);
        card.appendChild(description);
        });
    })
    .catch((e) => console.log(e));
}

// drop down list change
select.addEventListener("change", () => {
  console.log(select.value);
  if (select.value == "Select Characters") {
    grid.innerHTML = "";
  } else if (select.value == "All Characters") {
    grid.innerHTML = "";
    hogwartsType("");
  } else if (select.value == "Students") {
    grid.innerHTML = "";
    hogwartsType("/students");
  } else if (select.value == "Teachers") {
    grid.innerHTML = "";
    hogwartsType("/staff");
  } else if (select.value == "Gryffindor") {
    grid.innerHTML = "";
    showHouse("gryffindor");
  } else if (select.value == "Hufflepuff") {
    grid.innerHTML = "";
    showHouse("hufflepuff");
  } else if (select.value == "Ravenclaw") {
    grid.innerHTML = "";
    showHouse("ravenclaw");
  } else if (select.value == "Slytherin") {
    grid.innerHTML = "";
    showHouse("slytherin");
  } else if (select.value == "Spells") {
    grid.innerHTML = "";
    spellType("");
  }
}
);