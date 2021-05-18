//globally grab area where data will be rendered
// if (typeof window === 'object') {
const cocktailList = document.querySelector(`.cocktail-list`);
// }
//make axios request for data console.log to check for results
async function getCocktailData(input) {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${input}`;
  try {
    const response = await axios.get(url);
    //console.log(response)
    const returnedData = response.data.drinks;
    //console.log(returnedData)
    // call renderList from eventListener and pass it to axios
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
    //create div to hold all data (data.content) from api
    const cocktailDiv = document.createElement("div");
    //add a class list to above div
    cocktailDiv.classList.add("cocktail-content");
    //add newly created div to dom
    cocktailList.append(cocktailDiv);
    // console.log(cocktail);

    //RETRIEVE COCKTAIL NAME (strDrink):
    //create vari to store cocktail name data from array object retreived from api
    let cocktailName = cocktail.strDrink
    console.log(cocktailName)
    //create loop to go over each object within the data obeject and return strDrink value
  
    
  
    //create  vari that makes a p tag element to store name data collected
    let nameTag = document.createElement("h3");
    // put data from array collected into created h3 tag
    nameTag.textContent = `${cocktailName}`
    //move data to the dom
    cocktailDiv.append(nameTag)
    console.log(nameTag)

    //RETRIEVE IMAGE(strDrinkThumb):

    //create an img element stored in a vari
    //move newly created tag into div created previously for holding data

    //add a class name to above tag

    //create a vari to store image data in

    //set imageTag with proper attributes ('src' , data path)

    //RETIREVE INGREDENTS(strIngredient):
    //create vari for ingredient data

    //filter data for null values

    //create a tag to store data in

    //insert data collected into above tag

    //move data to dom

    //RETIREVE MEASUREMENTS(strMeasure):
    //create vari for ingredient data

    //filter data for null values

    //create a tag to store data in

    //insert data collected into above tag

    //move data to dom

    //RETIREVE INSTRUCTIONS(strInstructions):
    //create vari for ingredient data

    //filter data for null and other lang values

    //create a tag to store data in

    //insert data collected into above tag

    //move data to dom
  });
  // console.log(renderList)
}

//EVENTLISTENER
// create vari for button id
const send = document.querySelector(`form`);
//used button vari to add click event listenter with anonomous func
send.addEventListener("submit", (e) => {
  e.preventDefault()
  //grab area where user inputs request value with id
  const inputValue = document.querySelector("#blank");
  //created a vari to store the value of the input field
  const userInput = inputValue.value;
  //when new input is recived from api remove old data
  //call func
  getCocktailData(userInput)
});

//REMOVE OLD DATA
//write a function to remove old data before new data is rendered
