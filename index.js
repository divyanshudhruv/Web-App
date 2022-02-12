let wrapper = document.getElementById("wrapper");
let header = document.getElementById("header");
let inputField = document.getElementById("inputField");
let input = document.getElementById("input");
let aField = document.getElementById("aField");
let spinnerField = document.getElementById("spinnerField")


function update() {
    console.log("Local Storage Updated")
}

function myFunction() {

    // Wrapper
    wrapper.style.transition = "0.4s";

    //Input Field
    inputField.style.transition = "0.4s";
    inputField.style.opacity = 0;
    inputField.style.visibility = "hidden";

    //'a' Field
    aField.style.transition = "0.4s";
    aField.style.opacity = 0;
    aField.style.visibility = "hidden";

    //Spinner Field 
    spinnerField.style.display = " flex";

    spinnerField.style.transition = "0.4s";
    spinnerField.style.opacity = 1;

    // Code For Changing Header 'Inner HTML' To Input Value
    header.style.transition = "0.4s";
    header.style.opacity = 0;
    header.style.visibility = "hidden";



    if (typeof (Storage) !== "undefined") {
        // Variable
        const a = document.getElementById("input").value;

        // Store an item to localStorage  
        localStorage.setItem("Nickname", a);

        // Retrieve the added item  
        const Nickname = localStorage.getItem("Nickname");

        // Some Inportant Outcomes
        setTimeout(function () {
            if (Nickname.length > 0) {
                console.log("Nickname Entered Successful");
                console.log("Nickname: " + Nickname)
                update();
            }
            else {
                console.log("Error In Reading Nickname")
            }
        }, 1000)

    } else {
        //display this message if browser does not support localStorage  
        console.log("Sorry, Your Browser Does Not Support Web Storage.")
    }
}


