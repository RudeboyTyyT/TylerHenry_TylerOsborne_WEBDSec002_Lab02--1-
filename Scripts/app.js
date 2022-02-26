/*  Authors: Tyler Osborne & Tyler Henry
*   Student IDs: 100757532 & 100593023
*   Version: Lab 2
*   Date Completed: 2022-02-26
*   Description: This javascript populates the webpages with information
*/

//              Global variables
var seconds = 0;
var currentNode;
var loggedIn = false;
//              Functions

// Ran when a page is loaded it populates the the page with the correct data
function checkPage()
{
    
    //Changes product link to projects using DOM
    currentNode = document.getElementById( "products" );
    currentNode.innerHTML =`<li id ="products"><a href="products.html">
    <i class="fa-solid fa-border-all"></i> Projects</a></li>`;

    // Finds the nav and sets it to the current node
    currentNode = document.getElementById("nav");
    // Creates the humanresources link to append
    var newNavLink = document.createElement("li");
    var newA = document.createElement("a");
    var newI=document.createElement("i");
    newA.setAttribute("id", "humanresources");
    newA.setAttribute("href", "humanresources.html");
    newI.setAttribute("class", "fas fa-user-tie");
    newA.textContent =" Human Resources";
    newA.prepend(newI);
    newNavLink.appendChild(newA);


    // Adds new human resoursces link to nav bar
    currentNode.insertBefore(newNavLink, currentNode.childNodes[4]);

    // Gets current url pathname to determine current page
    var path = window.location.pathname;
    var page = path.split("/").pop();

    // Builds the index page if the index page was opened
    if (page == "index.html")
    {
        indexPage();
    }

    // Builds the products/ projects page if the products page was opened
    else if (page == "products.html")
    {
        productsPage();
    }

    // Builds the services page if the services page was opened
    else if (page == "services.html")
    {
        servicesPage();
    }

    // Builds the about page if the about page was opened
    else if (page == "about.html")
    {
        aboutPage();
    }

    //Builds the contact page if the contact page was opened
    else if (page == "contact.html")
    {
        contactPage();
    }
    else if (page == "register.html")
    {
        registerPage();
    }
    
}

// Builds the index page
function indexPage()
{
    // Creates and outputs index message
    var indexMessage = document.getElementById( "indexMessage" );
    indexMessage.innerHTML = "Welcome to our home page for WEBD-4202 Lab 1. This page was created by Tyler Henry and Tyler Osborne." + 
    " Please use the nav bar to get to the other pages.";
}

//Builds the products / projects page
function productsPage()
{
    // Outputs the information for the page to the page by selecting each section
    // and adding children
    // Project 1 img
     currentNode = document.getElementById("project1Img");
     var newNode = document.createElement("img")
     newNode.setAttribute("src", "Content/Images/project1.JPG");
     newNode.setAttribute("width", "200px");
     newNode.setAttribute("height", "200px");
     currentNode.appendChild(newNode);
     // Project 1 text
     currentNode = document.getElementById("project1Text")
     newNode = document.createTextNode("For this project from .NET development where we had to create several applications through the semester that were very closely related to one another." +
     "Each next assignemnt required us to add or rework parts to for the next “Deliverable”." + 
     "These projects were great at emphasizing code reuse.");
     currentNode.appendChild(newNode);
    // Project 2 img
     currentNode = document.getElementById("project2Img");
     newNode = document.createElement("img")
     newNode.setAttribute("src", "Content/Images/project2.JPG");
     newNode.setAttribute("width", "200px");
     newNode.setAttribute("height", "200px");
     currentNode.appendChild(newNode);
    // Project 2 text 
     currentNode = document.getElementById("project2Text")
     newNode = document.createTextNode("This project from WEBD was a project where we had multiple deliverables that added on to the previous work done. This project was good because it allowed a sense on working and progressing on a larger project… if you saw it that’s way.");
     currentNode.appendChild(newNode);
    // Project 3 img
     currentNode = document.getElementById("project3Img");
     newNode = document.createElement("img")
     newNode.setAttribute("src", "./Content/Images/project3.JPG");
     newNode.setAttribute("width", "200px");
     newNode.setAttribute("height", "200px");
     currentNode.appendChild(newNode);
    // Project 3 text
     currentNode = document.getElementById("project3Text");
     newNode = document.createTextNode("This final project from SYSA was time consuming but it was very different from the other final project I have completed. In this project in a group, we were to create a whole test suite for testing a fake shopping sight. I found this project to be the most unique because it had use using a new skill effectively that we had just learned through that course.");
     currentNode.appendChild(newNode);
}

// Builds the services page
function servicesPage()
{
    // Outputs the information for the page to the page by selecting each section
    // and adding children
    // Service 1 img
    currentNode = document.getElementById("service1Img");
    var newNode = document.createElement("img")
    newNode.setAttribute("src", "Content/Images/service1.JPG");
    newNode.setAttribute("width", "200px");
    newNode.setAttribute("height", "200px");
    currentNode.appendChild(newNode);
    // Service 1 text
    currentNode = document.getElementById("service1Text")
    newNode = document.createTextNode("Using tools such as selenium, we can test your already existing web site and help suggest or fix anything we come across. We can also fix issues you have in mind and make sure everything continues to function as intended after each patch.");
    currentNode.appendChild(newNode);
   // Service 2 img
    currentNode = document.getElementById("service2Img");
    newNode = document.createElement("img")
    newNode.setAttribute("src", "Content/Images/service2.JPG");
    newNode.setAttribute("width", "200px");
    newNode.setAttribute("height", "200px");
    currentNode.appendChild(newNode);
   // Services 2 text 
    currentNode = document.getElementById("service2Text")
    newNode = document.createTextNode("We also provide website design services. This is where we will design and implement a fresh looking website that meets all of your needs.");
    currentNode.appendChild(newNode);
   // Service 3 img
    currentNode = document.getElementById("service3Img");
    newNode = document.createElement("img")
    newNode.setAttribute("src", "Content/Images/service3.JPG");
    newNode.setAttribute("width", "200px");
    newNode.setAttribute("height", "200px");
    currentNode.appendChild(newNode);
   // Services 3 text 
    currentNode = document.getElementById("service3Text");
    newNode = document.createTextNode("The last service we can complete for you is creating a custom application that does what you need when your need it and how you want it to be done.");
    currentNode.appendChild(newNode);
}

// Builds the about page
function aboutPage()
{
    // Creates message variable for Tyler Henry about section
    var henryMessage = document.getElementById("henryMessage");
    henryMessage.innerHTML ="My name is Tyler Henry and I am currently a second year student in the Computer Programming and Analysis program"+
    " at Durham college. While partaking in school I also work part time at Lowe's Canada as a lumber associate. After I gradute this course I am"+
    " hoping to be able to travel to Japan for a few week vacation before I do my best to try and find a career."+
    `<br><a href="https://www.linkedin.com/in/tyler-henry-271711227/">Linkdin Profile</a>`;

    //Creates message variable for Tyler Osborne about section
    var osborneMessage = document.getElementById("osborneMessage");
    osborneMessage.innerHTML ="Hello there. My name is Tyler Osborne, I’m currently in my second year in the Computer Programing and Analysis program at Durham college." +
    "At the same time, I work at a real Canadian superstore in the General merchandise department, meaning I don’t need to worry about food products hurray." +
    "My hobbies include Artistic ventures and gaming as I love a good story." +
    '<br><a href = "https://www.linkedin.com/in/tyler-osborne-33929a227/">Linkdin Profile</a></br>';
}

// Builds the contact page when page open
function contactPage()
{
    // Create button event listener
    var button = document.getElementById( "submit" );
    button.addEventListener( "click", displayContact, false );

}


// Builds the register page when the page opens
function registerPage()
{
    // Adds a hidden error message div
    $("#buttons").after('<div id="ErrorMessage"></div>');
}

// Function ran when the user clicks on login on the login page
function login()
{
    // Adds the username to the nav bar
    $(document).ready(function()
    {
        // Variable for holding the current username in username input
        var loginUserName = $("#loginUsername").val().trim();
        // Variable for hodling the current password in passsword input
        var loginPassword = $("#loginPassword").val().trim();
        // Checks that both inputs are not empty
        if(loginUserName == "" || loginPassword == "")
        {
            // Error message for blank input
            alert("Email and or password cannot be blank!");
        }
        else
        {
            // Checks that the user hasnt logged in already
            if(loggedIn == false)
            {
                // Adds the username from the input to the nav bar
                $("#login").after('<li id ="displayUsername"><a><i class="fa-solid fa-person"></i>' + loginUserName + '</a></li>');
                // Sets loggedIn to true to stop creation of more username displays
                loggedIn = true;

                // Changes login to be log out
                $("#loginText").text("Logout");
                
            }
            else
            {
                // Error for user already beeing logged in
                alert("You have already logged in");
            }
            
        }
    })
    

}

// Function that runs when the user clicks the register button (TO FINISH)
function register()
{
    // Variable for collecting errors
    var errors = "";

    document.getElementById("ErrorMessage").innerText ="";
    // Collects the data in the form
    var password = $("#password").val().trim();
    var confirmPassword = $("#confirmPassword").val().trim();
    
    // validates firstname
    if($("#firstName").val().length < 2)
    {
        errors += "First name needs to be 2 or more characters\n";
    }
    // Validates last name
    if($("#lastName").val().length < 2)
    {
        errors += "Last name needs to be 2 or more characters\n";
    }
    // Validates email
    if($("#email").val().length < 8)
    {
        errors += "Email needs to be 8 or more characters\n";
    }
    else if(!($("#email").val().includes("@")))
    {
        errors += "Please enter a valid email\n";
    }
    // Validates password and confirm password
    if($("#password").val().length < 6 )
    {
        errors += "The password needs to be 6 or more characters\n";
    }
    else if(password != confirmPassword)
    {
        errors += "Confirm password must match password\n";
    }
    
    // outputs errors if any
    if(errors != "")
    {   
        document.getElementById("ErrorMessage").innerText=errors; 
    }
    // Creates a user and outputs the details of said user to the console
    else
    {
        const user = new User($("#firstName").val(),$("#lastName").val(),$("#email").val(),$("#email").val(),$("#password").val());
        console.log(user.getFirstName);
        console.log(user.getLastName);
        console.log(user.getUsername);
        console.log(user.getEmail);
        console.log(user.getPassword);

        // Clears inputs
        $("#firstName").val("");
        $("#lastName").val("");
        $("#email").val("");
        $("#password").val("");
        $("#confirmPassword").val("");
    }


}

// Displays the contact in the console
function displayContact()
{
    // variables to contain value from input bozes
    var name = document.getElementById("name").value;
    var number = document.getElementById("contactNumber").value;
    var email = document.getElementById("emailAddress").value;
    var comments = document.getElementById("comments").value;

    // Messages variable to be outputed to console
    var consoleMessage = "Name: " + name + "\nContact Number: " + number
    + "\nEmail Address: " + email + "\nComments: " + comments;

    // Output message to console
    console.log(consoleMessage);

    // Start timer starting at 0 
    seconds = 0;
    window.setInterval( "updateTime()", 1000 );
}
// Updates the time
function updateTime()
{
    //Increment timer
    ++seconds; 

    //When timer hits 3 sec, redirect to home page
    if (seconds == 3) 
    {
        window.location.href = "./index.html"; 
    }
                  
} 
// Class for users
class User {
    // Constructor
    constructor(firstName,lastName,username,email,password) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.username = username;
        this.email = email;
        this.password = password;
    }
    // Getters
    get getFirstName(){
        return this.firstName;
    }
    get getLastName(){
        return this.lastName;
    }
    get getUsername(){
        return this.username;
    }
    get getEmail(){
        return this.email;
    }
    get getPassword(){
        return this.password;
    }
    // Setters
    set setFirstName(firstName){
        this.firstName = firstName;
    }
    set setLastName(lastName){
        this.lastName = lastName;
    }
    set setUsername(username){
        this.username = username;
    }
    set setEmail(email){
        this.email = email;
    }
    set setPassword(password){
        this.password = password;
    }

  }

// On launch check which page is the current page
window.addEventListener( "load", checkPage, false );