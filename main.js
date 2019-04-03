// XHR - XmlHttpRequest
let rides = [];


//constructors are introduced. to use a constructor 'new' then name of constructor. 
//constructor is a collectionsof functions or variables, like a pre defined object, like current date. like a method these are predefined, predetermined. 
//write functions for those two things
//key value pairs or functions that go along with them
//its like a pre dertermined object that you can modify later
//constructor is like a bunch of descisions you have to make 
//DO NOT WRITE A FAT ARROW FOR EITHER OF THESE FUNCTIONS.

const domStringBuilder = (arrayToPrint) => {
    console.log(arrayToPrint);
    // loops over arraToPrint and Buiild up domstring
    //call printToDom
}


function executeThisAfterFileLoads(){
    console.log('yay', this.responseText); //this is where is have access /// these are call back functions
    const data = JSON.parse(this.responseText); //this exact text pretty much you will need every time /// these are call back functions
    rides = data.rides;
    //console.log('yay', data);
    domStringBuilder(data.rides);
}

function executeThisCodeifXHRFails(){
    //console.log('oh snap');
}

const getRidesData = () => {
    const myRequest = new XMLHttpRequest(); // makes a copy of that in the js library
    myRequest.addEventListener('load',executeThisAfterFileLoads); //run this file on load, modifying constructor  
    myRequest.addEventListener('error', executeThisCodeifXHRFails); //run this if it fails on error
    myRequest.open('GET', './db/rides.json') //run a get request, requesting info from a site
    myRequest.send(); //this is where is trys loading the request
    //console.log(myRequest);
};


const init = () => {
    getRidesData();
};

init();