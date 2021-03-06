/* 

Business Logic:

1) If all the input fields are validated,the values from the input fields will be stored into an Array of Object 

2) Validation of the input fields include:
- All Fields are required
- For this project, only limit to 1 NFT upload per collection
- User has to select at least one experience from the checkboxes
- User has to select either agree or disagree from the radio buttons

 */

// Declaration of all Global variables
const nftCollection = new NftController();
let storeNft = "";

// function handle form submission
newNftForm.addEventListener('submit', (event) => {

    // Prevent default action - do not submit form first. (1) Form validation, (2) using own fetch method to send data over to backend
    event.preventDefault();
    // store input values into variables
    const title = document.querySelector("#nameOfCollection").value;
    const price = document.querySelector("#listPrice").value;
    const imageUrl = document.querySelector("#inputGroupFile02").value.replace("C:\\fakepath\\", "");
    const description = document.querySelector("#description").value;
    const category = document.querySelector("#categoryField").value;

    // pass inputs into addNft method
    nftCollection.addNft(title, price, imageUrl, description, category, storeNft);

    // clears user inputs in form
    clearInput();

    // reset category field to grey
    document.getElementById("categoryField").style.color = "grey";

    /*alert(
        "Thank you for your submission. Your NFT has been successfully uploaded."
    );*/

}); // End of addEventListener for submit form

/*
document
    .querySelector("button[type=submit]")
    .addEventListener("submit", (event) => {
        event.preventDefault();
    });

document
    .querySelector("button[type=submit]") 
    .addEventListener("click", (event) => {
        
        if (document.querySelector("form").checkValidity()) {
            submitForm();
        }
        
    });
*/

// function clears user inputs in form
function clearInput() {
    document.querySelector("#nameOfCollection").value = "";
    document.querySelector("#categoryField").value = "";
    document.querySelector("#listPrice").value = "";
    document.querySelector("#inputGroupFile02").value = "";
    document.querySelector("#description").value = "";
}

// select file input
const input = document.querySelector('#inputGroupFile02');

// add event listener
input.addEventListener('change', () => {
    storeNft = input.files[0];
});



