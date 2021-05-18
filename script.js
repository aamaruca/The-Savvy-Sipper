

//globally grab area where data will be rendered
if (typeof window === 'object') {
  const cocktailList = document.querySelector(`.cocktail-list`)
}
//make axios request for data console.log to check for results
async function getCocktailData(alcohol) {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${alcohol}`
  try {
    const response = await axios.get(url)
    // console.log(response)
    const returnedData = response.data
    console.log(returnedData)
    // call renderList from eventListener and pass it to axios
    // renderList(returnedData)
  } catch (error) {
    console.error(error)
  } 
  getCocktailData()
}

// DATA
// write a func called renderList that forEach cocktail object recieved the name, recipe, ingredents, measurements are taken and appened to DOM
function renderList(data) {
  data.forEach(cocktail => {
    //create div to hold all data (data.content) from api
    const cocktailDiv = document.createElement('div')
    //add a class list to above div
    cocktailDiv.classList.add("cocktail-content")
    //add newly created div to dom 
    cocktailList.append(cocktailDiv)
    

    //RETRIEVE COCKTAIL NAME (strDrink):
    //create vari to store cocktail name data from array retreived from api
    let cocktailName = data.strDrink
    //create  vari that makes a p tag element to store name data collected 
    let nameTag = document.createElement('h3')
    // put data from array collected into created p tag
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
if (typeof window === 'object') {
    const send = document.querySelector(`#send`)
  //used button vari to add click event listenter with anonomous func
    send.addEventListener('click', () => {
    //grab area where user inputs request value with id
    const inputValue = document.querySelector("#blank")
    //created a vari to store the value of the input field
    const userInput = inputValue.value
    //when new input is recived from api remove old data
    //call func
    getCocktailData(userInput)
  })
}


    //REMOVE OLD DATA
    //write a function to remove old data before new data is rendered
  