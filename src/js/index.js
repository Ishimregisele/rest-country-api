// const countriesApi = document.getElementsByClassName("Countries-container");

// async function getApi () {
//     try {
//     const response = await fetch("https://restcountries.com/v3.1/all")
//     const data = await response.json();
//     console.log(data)
//     getCountries(data)
//     }
//     catch(err){
//         console.log(err);
//     }
//  function getCountries(coutries){
//     // countriesApi.innerHTML='';
//     coutries.forEach((country)=>{
//     const divElt = document.createElement('div')
//     div.innerHTML=`
//     <p>${country.name.common}</p>
//     `
//     countriesApi.append(divElt)
//     })
//  }
    
    
    
// }
// getApi();


// const countriesContainer =document.querySelector(".Countries-container");
// const searchInput = document.querySelector(".search");
//  let countriesArr= [];

// async function crtElt(){
//     try {
//         const response =await fetch("https://restcountries.com/v3.1/all");
//         const data = await response.json();

        
        
//         countriesArr = data;
//         displayCountries(countriesArr);
//     }
//     catch(error){
//         console.log(error)
//     }

//     function displayCountries(countries){
//         countriesContainer.innerHTML="";
//         countries.forEach(country => {
//             const div = document.createElement("div");
//             div.innerHTML=`
//             <img class="w-full h-[200px]"  src="${country.flags.png}"  alt="${country.flags.alt}"/>
//             <h2>${country.name.common}</h2>
//             <p>${country.population}</p>
//             `
//             countriesContainer.append(div);
//         })
//     }
    
// }
// crtElt();

// searchInput.addEventListener("keyup", (e) => {
//     const term = e.target.value.toLowerCase();
  
//     const filteredCountries = countriesArr.filter(country => 
//         country.name.common.toLowerCase().includes(term));
  
//     displayCountries(filteredCountries);
//   });

const countriesContainer = document.querySelector('.Countries-container');
const searchInput = document.querySelector('.search');
let countriesArr = [];

async function crtElt() {
    try {
        const response = await fetch('https://restcountries.com/v3.1/all');
        const data = await response.json();
        countriesArr = data;
        displayCountries(countriesArr);
    } catch (error) {
        console.log(error);
    }
}

function displayCountries(countries) {
    countriesContainer.innerHTML = ''; // Clear previous results
    countries.forEach(country => {
        const div = document.createElement('div'); // Create a div element
        div.innerHTML = `
            <img class="w-full h-[200px]" src="${country.flags.png}" alt="${country.flags.alt}" />
            <h2>${country.name.common}</h2>
            <p>${country.population}</p>
        `;
        countriesContainer.append(div);
    });
}

crtElt();

searchInput.addEventListener('keyup', (e) => {
    const term = e.target.value.toLowerCase();
    const filteredCountries = countriesArr.filter(country =>
        country.name.common.toLowerCase().includes(term)
    );
    displayCountries(filteredCountries);
});
