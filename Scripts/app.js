/* JavaScript File */
"use strict";

(function () { // Start of IIFE
 
    // Ryan Quigley
    // 200239087
    // Georgian College
    // COMP1073-W2017

  console.log("App Started"); // JS test

  switch (document.title) { // Switch statement to target the different pages with one js file
    case "Bio": { // Targets the page with the title of "Bio"

      let data = {};
        let XHR = new XMLHttpRequest();
        XHR.open("GET", "./bio.json", true);
        XHR.send();
        XHR.onreadystatechange = function () {
            if ((this.readyState === 4) && (this.status === 200)) {
                data = JSON.parse(this.responseText);
            }
        };

           XHR.addEventListener("load", function () {
            let BioContent = document.getElementById("SecondParagraph");
            data.content.forEach(function(content) {
              let paragraph = document.createElement("p");
              paragraph.innerHTML = "\n <p>" + content.paragraph + "</p>\n ";
              BioContent.appendChild(paragraph);
            }, this);         
        });
    }  //End of Bio page
      break;

    case "Projects": {

let ClickButton = document.getElementById("ClickButton");
ClickButton.addEventListener("click", Click);

// Objects created from html ids
let SecondParagraph = document.getElementById("SecondParagraph");

// Content injection strings
let Content = `<img src='../images/Treesharks1.svg' height='240px' width='200px'>
                <p>This is a logo I created with Adobe Illustrator for my YouTube channel.</p>
                <img src='../images/TSWeb.svg' height='240px' width='200px'>
                <p>This is a website design I created around the theme of the logo.</p>
                <img src='../images/Icon.svg' height='200px' width='200px'>
                <p>This is a basic envelope icon I created from scratch using Adobe Illustrator.</p>`;

// Clicking the button will show the second paragraph element and hide the button afterwards
function Click() {
   SecondParagraph.innerHTML = Content;
   ClickButton = document.getElementById("ClickButton").style.visibility = "hidden";
}
    } //End of Projects page
      break;

    case "Contact": {

        //Selects the different inputs of the form and assigns an object to them
      let FullName = document.getElementById("FullName");
      let PhoneNumber = document.getElementById("PhoneNumber");
      let Email = document.getElementById("Email");
      let Message = document.getElementById("Message");
      let SendButton = document.getElementById("SendButton");

        //When the 'submit' button is pushed it prevents the page from going through the default process
      SendButton.addEventListener("click", function(event){
        event.preventDefault();

            //Writes the values of the input fields to the console
        console.log(`Name: ${FullName.value}`);
        console.log(`Phone Number: ${PhoneNumber.value}`);
        console.log(`Email: ${Email.value}`);
        console.log(`Message: ${Message.value}`);

      });
    } //End of Contact page
      break;
  }

})(); // end of IIFE

