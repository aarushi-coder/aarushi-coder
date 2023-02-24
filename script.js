// getting all required elements
 window.addEventListener('load', () => {
     const inputBox = document.querySelector(".inputField input");
     const addSubmit = document.querySelector("#new-task-submit");
 })

 inputBox.onkeyup = ()=> {
    let userData = inputBox.value; // getting user entered value
    if(userData.trim() != 0){   //if user values arent spaces
        addSubmit.classList.add("active"); //active the add submit
    }else{
        addSubmit.classList.remove("active"); //unactive the add button
    }
 }

 //if user clicks on the add submit
 addSubmit.onclick = () =>{
    let userData = inputBox.value; // getting user entered value
    let getLocalStorage = localStorage.getItem("New Todo"); //getting localstorage
    if(getLocalStorage == null){ //if localstorage is null
        listArr = []; //creating blank array
    }else{
        listArr = JSON.parse(getLocalStorage); //transforming json string into a js objects
    }
    listArr.push(userData); //pushing or adding user data
    localStorage.setItem("New Todo", JSON.stringify(listArr)); //transforming js objects into a json string
 }
 
function showTasks(){
    let getLocalStorage = localStorage.getItem("New Todo"); //getting localstorage


if(getLocalStorage == null){ //if localstorage is null
    listArr = []; //creating blank array
}else{
    listArr = JSON.parse(getLocalStorage); //transforming json string into a js objects
}
let newLiTag = '';
listArr.forEach((element , index) => {
    newLiTag = ``;
}) ;

}