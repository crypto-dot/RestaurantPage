import './style.css';
import {displayAboutPage} from './aboutPage.js';
import {displayContactPage} from './contactPage.js';
import {displayMenuPage} from './foodPage.js';
import ufo from './images/---pngtree---blue-ufo-alien-sp.png';


function buttonClicked(e) {
    let boolFirstTimeClicked = true;
    let buttons = document.querySelectorAll("header > div > div");
 

    if(boolFirstTimeClicked){
        let buttonAbout = document.querySelector("header > div > div");
        buttonAbout.addEventListener("click", buttonClicked);
        boolFirstTimeClicked = false;
    }   
    buttons.forEach( button => {
        if(button.classList.item(0) == "buttonClicked"){
            button.classList.remove("buttonClicked");
            document.querySelector("header  > div > div > img").remove();
            button.classList.add("buttonClickable");
        }
    }
    );
    switch(this.textContent){
        case "About":
            displayAboutPage();

            break;

        case "Menu":
            displayMenuPage();
            break;
        case "Contact":
            displayContactPage();

            break;
        default:
            console.error("Unknown button");
    }
    

    this.classList.remove('buttonClickable');
    this.classList.add('buttonClicked');



    const ufoIcon = new Image();
    ufoIcon.src = ufo;
    ufoIcon.classList.add('ufo');
    
    this.appendChild(ufoIcon);
}
function header(){
    displayAboutPage();
    const contentDiv = document.getElementById('content');
    const header = document.createElement('header');
    const buttonAbout = document.createElement('div');
    const buttonMenu = document.createElement('div');
    const buttonContact = document.createElement('div');
    const buttonWrapper = document.createElement('div');
    const ufoIcon = new Image();

    ufoIcon.src = ufo;
    ufoIcon.classList.add('ufo');
    buttonWrapper.classList.add("buttonWrapper");

    
    buttonAbout.textContent = "About";
    buttonMenu.textContent = "Menu";
    buttonContact.textContent = "Contact";

    buttonContact.addEventListener("click",buttonClicked);
    buttonMenu.addEventListener("click",buttonClicked);

    buttonAbout.classList.add('buttonClicked');
    buttonAbout.appendChild(ufoIcon);
    buttonContact.classList.add('buttonClickable');
    buttonMenu.classList.add('buttonClickable');


    header.textContent = "Lunar Plates";
    header.appendChild(buttonWrapper);

    buttonWrapper.appendChild(buttonAbout);
    buttonWrapper.appendChild(buttonMenu);
    buttonWrapper.appendChild(buttonContact);
     
    document.body.appendChild(header);
    return contentDiv;
}
function footer() {
    const footer = document.createElement('footer');
    const anchorlink = document.createElement('a');

    anchorlink.href = "https://pngtree.com";
    anchorlink.textContent = "Pngtree.com";

    footer.textContent = "alien PNG Designed By sdesigns from ";
    footer.appendChild(anchorlink);
    return footer;
}
document.body.appendChild(header());
document.body.appendChild(footer());