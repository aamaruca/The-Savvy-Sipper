//globally grab area where data will be rendered
//make axios request for data console.log to check for results
  // call renderList from eventListener and pass it to axios
  const cocktailList = document.querySelector(`.cocktail-list`);
  
  async function getCocktailData(input) {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${input}`;
    try {
      const response = await axios.get(url);
      const returnedData = response.data.drinks;
      renderList(returnedData);
    } catch (error) {
      console.error(error);
    }
  }
  
  // DATA
  // write a func called renderList that forEach cocktail object recieved the name, recipe, ingredents, measurements are taken and appened to DOM
  
  function renderList(data) {
    console.log(data);
    //identify ojects in array with paramenter(aka give it a name)
    data.forEach((cocktail) => {
      const cocktailDiv = document.createElement("div");
      cocktailDiv.classList.add("cocktail-content");
      cocktailList.append(cocktailDiv);
      
  
  
      //RETRIEVE COCKTAIL NAME (strDrink):
      //create vari to store cocktail name data from array object retreived from api
      //create  vari that makes a h3 tag element to store name data collected
      const cocktailName = cocktail.strDrink;
        let nameTag = document.createElement("h3");
          nameTag.textContent = `${cocktailName}`;
            cocktailDiv.append(nameTag);
      
      //RETRIEVE IMAGE(strDrinkThumb):
      //create a vari to store image data in
      //create an img element stored in a vari
      //move newly created tag into div created previously for holding data
      const drinkPic = cocktail.strDrinkThumb;
      const imageTag = document.createElement("img");
      cocktailDiv.append(imageTag);
        imageTag.classList.add("drink-thumb");
          imageTag.setAttribute("src", cocktail.strDrinkThumb);
      //RETIREVE INGREDENTS/MEASUREMENTS:
      //create vari for ingredient data
      const recipeWraper = document.createElement('section')
        cocktailDiv.append(recipeWraper)
          recipeWraper.classList.add('ingredMeas')
      const sectionIng = document.createElement('div')
        sectionIng.classList.add('ingredients')
      
      const sectionMea = document.createElement('div')
      sectionMea.classList.add('measurements')
      for (i in cocktail) {
        if (i.substring(0, 6) === "strIng") {
          if (cocktail[i] !== null) {
            const recipeTag = document.createElement("p");
            recipeTag.textContent = `${cocktail[i]}`
            sectionIng.append(recipeTag);
          }
        }
      }
      for (i in cocktail) {
        if (i.substring(0, 6) === "strMea") {
          //filter data for null values
          if (cocktail[i] !== null) {
            //create a tag to store data in
            const recipeTag = document.createElement("p");
            //insert data collected into above tag
            recipeTag.textContent = `${cocktail[i]}`
            //move data to dom
            sectionMea.append(recipeTag);
            
          }
        }
      }
      recipeWraper.appendChild(sectionIng)
      recipeWraper.appendChild(sectionMea)
      
      //RETIREVE INSTRUCTIONS(strInstructions):
      //create vari for instruction data
      const instructionSec = document.createElement('div')
        cocktailDiv.append(instructionSec)
          instructionSec.classList.add('instructions')
      const instructions = cocktail.strInstructions
      const instructionTag = document.createElement('p')
        instructionTag.setAttribute('id', 'recipe')
      //insert data collected into above tag
        instructionTag.textContent = `INSTRUCTIONS: ${instructions}`
      //move data to dom
      instructionSec.append(instructionTag)
  
    });
  }
  
  //EVENTLISTENER
  // create vari for button id
const send = document.querySelector(`form`);
  
  send.addEventListener("submit", (e) => {
    e.preventDefault();
    const inputValue = document.querySelector("#blank");
    const userInput = inputValue.value;
      removeData();
   
    getCocktailData(userInput);
  });
  
  
  //REMOVE OLD DATA
  //write a function to remove old data before new data is rendered
function removeData() {
  while (cocktailList.lastChild) {
    cocktailList.removeChild(cocktailList.lastChild);
  }
}
