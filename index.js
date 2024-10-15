const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


let generateButton = document.getElementById("btn");
let passwordOne = document.getElementById("password1");
let passwordTwo = document.getElementById("password2");
let copyButtonOne = document.getElementById("copy1");
let copyButtonTwo = document.getElementById("copy2");
function randomCharacter(){
    let newPassword = ""
    for (let i = 0; i< 15 ; i++){
        let index = Math.floor((Math.random() * characters.length));
        newPassword += characters[index];
    }
    return newPassword;
};

generateButton.addEventListener("click", function generatePassword(){
    passwordOne.textContent = randomCharacter();
    passwordTwo.textContent = randomCharacter();
});

copyButtonOne.addEventListener("click", function() {
    navigator.clipboard.writeText(passwordOne.textContent).then(function() {
        alert("First Password copied to clipboard!");
    }, function(err) {
        console.error("Could not copy text: ", err);
    });
    passwordOne.textContent = "Password copied, generate a new one!"
});

copyButtonTwo.addEventListener("click", function() {
    navigator.clipboard.writeText(passwordTwo.textContent).then(function() {
        alert("Second password copied to clipboard!");
    }, function(err) {
        console.error("Could not copy text: ", err);
    });
    passwordTwo.textContent = "Password copied, generate a new one!"
});
