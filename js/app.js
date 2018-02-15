const btn = document.getElementById('search');
const responseContainer = document.getElementById('response-container');

window.onload = begin();

function begin (){
  for(i=1; i<88; i++)
getPeople()
}
  
function getPeople() {
  const articleRequest = new XMLHttpRequest();
  articleRequest.open('GET',`https://swapi.co/api/people/${i}`);
  articleRequest.onload = addPeople;
  articleRequest.onerror = handleError;
  articleRequest.send();
    }

function handleError(){
  console.log('se ha presentado un error');
}

function addPeople(){
  const data = JSON.parse(this.responseText);
  console.log(data);
  let names = data.name;
  let birthday = data.birth_year;
  let hair = data.hair_color;
  let skin = data.skin_color; 
  let gender = data.gender; 

  let name = document.createElement('ul');
  name.classList.add('details');
  name.classList.add('col-md-2');
  let liTitle = document.createElement('li');
  let birth = document.createElement('li');
  let hairColor = document.createElement('li');
  let skinColor = document.createElement('li');
  let TheGender = document.createElement('li');

  liTitle.innerText = `Name: ${names}`;
  birth.innerText = `Birthday: ${birthday}`; 
  hairColor.innerText = `Hair color: ${hair}`;
  skinColor.innerText = `Skin color: ${skin}`;
  TheGender.innerText = `Gender : ${gender}`;

  name.appendChild(liTitle);
  name.appendChild(birth);
  name.appendChild(hairColor);
  name.appendChild(skinColor);
  name.appendChild(TheGender);
  responseContainer.appendChild(name);


}
