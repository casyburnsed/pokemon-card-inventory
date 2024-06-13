const data = [
    {
        id: 1,
        name: "Alakazam",
        img: "./images/alakazam.jpg",
        hp: "80 HP",
        type: "Psychic",
    },

    {
        id: 2,
        name: "Beedrill",
        img: "./images/beedrill.jpg",
        hp: "80 HP",
        type: "Bug",
    },

    {
        id: 3,
        name: "Blastoise",
        img: "./images/blastoise.jpg",
        hp: "100 HP",
        type: "Water",
    },

    {
        id: 4,
        name: "Chansey",
        img: "./images/chansey.jpg",
        hp: "120 HP",
        type: "Normal",
    },

    {
        id: 5,
        name: "Charizard",
        img: "./images/charizard.jpg",
        hp: "120 HP",
        type: "Fire",
    },

    {
        id: 6,
        name: "Clefairy",
        img: "./images/clefairy.jpg",
        hp: "40 HP",
        type: "Fairy",
    },

    {
        id: 7,
        name: "Dragonair",
        img: "./images/dragonair.jpg",
        hp: "80 HP",
        type: "Dragon",
    },

    {
        id: 8,
        name: "Dugtrio",
        img: "./images/dugtrio.jpg",
        hp: "70 HP",
        type: "Ground",
    },

    {
        id: 9,
        name: "Gyarados",
        img: "./images/gyarados.jpg",
        hp: "100 HP",
        type: "water",
    },

    {
        id: 10,
        name: "Hitmonchan",
        img: "./images/hitmonchan.jpg",
        hp: "70 HP",
        type: "Fighting",
    },

    {
        id: 11,
        name: "Machamp",
        img: "./images/machamp.jpg",
        hp: "100 HP",
        type: "Fighting",
    },

    {
        id: 12,
        name: "Magneton",
        img: "./images/magneton.jpg",
        hp: "60 HP",
        type: "Electric",
    },
]

const pokemansContainer = document.querySelector(".pokemans");
const searchInput = document.querySelector(".search");
const typesContainer = document.querySelector(".classification");
const hpRange = document.querySelector(".hp"); 
const hpValue = document.querySelector(".healthValue");

const displayPokemon = (filteredPokemon) => {
    pokemansContainer.innerHTML = filteredPokemon.map(
        (pokemon) =>
            `
            <div class="pokemon"> 
                    <img 
                    src=${pokemon.img}
                    />
                    <span class="name">${pokemon.name}</span>
                    <span class="healthPoints">${pokemon.hp}</span>
                </div>
        `

    ).join("");
};

displayPokemon(data)

searchInput.addEventListener("keyup",(e)=>{
    const value = e.target.value.toLowerCase();
    if(value){
        displayPokemon(data.filter(item=> item.name.toLowerCase().indexOf(value) !== -1))
    } else {
        displayPokemon(data);
    }
})


const setTypes = () => {
    const allTypes = data.map((item) => item.type);
    const types = [
        "All",
        ...allTypes.filter((item,i) => {
            return allTypes.indexOf(item) === i;
        }),
    ]; 
    
    typesContainer.innerHTML = types.map( type => 
        `
        <span class="type">${type}</span>
        `).join("")

        typesContainer.addEventListener("click",(e) => {
            const selectedClassification = e.target.textContent;

            selectedClassification === "All" 
                ? displayPokemon(data) 
                : displayPokemon(data.filter((item) => item.type === selectedClassification));
        });
};

const setHp = () => {
    const hpList = data.map((item) => parseInt(item.hp, 10)); 
    const minHp = Math.min(...hpList);
    const maxHp = Math.max(...hpList);

    hpRange.min = minHp;
    hpRange.max = maxHp;
    hpRange.value = maxHp;
    hpValue.textContent = maxHp;


    hpRange.addEventListener("input", (e) => {
        hpValue.textContent = e.target.value;
        displayPokemon(data.filter((item) => parseInt(item.hp, 10) <= e.target.value));
    });
};

setTypes();
setHp();