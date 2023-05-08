import './style.css';
import Cinderella from './cinderella.jpg';

const createContent = () => {
    const contentDiv = document.createElement("div");
    contentDiv.setAttribute("id", "content");
    document.body.appendChild(contentDiv);
};
createContent();
const content = document.getElementById("content");

const createTitle = (() => {
    const title = document.createElement("h1");
    title.innerText = "Palace Diner";
    title.setAttribute("id", "title");
    content.appendChild(title);

})();

const createNavBar = (() => {
    const navDiv = document.createElement("div");
    navDiv.setAttribute("class", "nav");
    navDiv.setAttribute("id", "navDiv");

    const homeTab = document.createElement("h2");
    homeTab.innerText = "Home";
    homeTab.setAttribute('id', 'homeBtn');
    navDiv.appendChild(homeTab);

    const menuTab = document.createElement("h2");
    menuTab.innerText = "Menu";
    menuTab.setAttribute('id', 'menuBtn');
    navDiv.appendChild(menuTab);

    const contactTab = document.createElement("h2");
    contactTab.innerText = "Contact Us";
    contactTab.setAttribute('id', 'contactBtn');
    navDiv.appendChild(contactTab);

    content.appendChild(navDiv);
})();

const homeTab = (() => {
    const homeDiv = document.createElement("div");
    homeDiv.setAttribute('class', 'tab');
    homeDiv.setAttribute('id', 'homeTab');

    //Div container for about paragraph
    const aboutDiv = document.createElement('div');
    aboutDiv.setAttribute('class', 'container');

    const homeHead = document.createElement('h3');
    homeHead.innerText = 'Welcome to the Palace!';
    aboutDiv.appendChild(homeHead);
    
    const about = document.createElement('p');
    about.innerText = "Come in and enjoy a meal with some of your favorite princesses! Many princesses visit our dining room so be sure to check our site. You don't miss your favorite one!"
    aboutDiv.appendChild(about);
    homeDiv.appendChild(aboutDiv);

    //Div container for visitor information
    const visitorDiv = document.createElement('div');
    visitorDiv.setAttribute('class', 'container');

    const visitorTitle = document.createElement('h3');
    visitorTitle.innerText = "This week's visitor";
    visitorDiv.appendChild(visitorTitle);

    const visitorImg = new Image();
    visitorImg.src = Cinderella;
    visitorImg.setAttribute('id', 'visitorImg');
    visitorDiv.appendChild(visitorImg);

    const visitorP = document.createElement('p');
    visitorP.innerText = "Cinderella can't wait to meet you!";
    visitorDiv.appendChild(visitorP);
    homeDiv.appendChild(visitorDiv);

    content.appendChild(homeDiv);

    const displayOn = () => {
        homeDiv.style.display = "flex";
    }

    const displayOff = () => {
        homeDiv.style.display = "none"
    };

    return{homeDiv, displayOn, displayOff}
})();

const menuTab = (() => {
    const menuDiv = document.createElement("div");
    menuDiv.setAttribute('class', 'tab');
    menuDiv.setAttribute('id', 'menuTab');
    menuDiv.style.display = 'none'

    const menuGrid = document.createElement('div');

    menuDiv.appendChild(menuGrid);
    content.appendChild(menuDiv);
    const displayOn = () => {
        menuDiv.style.display = "flex";
    }

    const displayOff = () => {
        menuDiv.style.display = "none"
    };

    return{menuDiv, displayOn, displayOff}
})();

const contactTab = (() => {
    const contactDiv = document.createElement("div");
    contactDiv.setAttribute('class', 'tab');
    contactDiv.setAttribute('id', 'contactTab');
    contactDiv.style.display = 'none';

    const partyDiv = document.createElement('div');
    const partyHeader = document.createElement('h3');
    partyHeader.innerText = "Special Events";
    partyDiv.appendChild(partyHeader);
    const partyInfo = document.createElement('p');
    partyInfo.innerText = "We can help you plan your special event here at our diner! Contact us with the details of your event and we will help make it a time you'll never forget!"
    partyDiv.appendChild(partyInfo);

    const infoDiv = document.createElement('div');
    const phoneNum = document.createElement('h3');
    phoneNum.innerText = "Pone: 444-333-1212";
    const email = document.createElement('h3');
    email.innerText = "Email: PalaceDiner@realemail.com";
    infoDiv.appendChild(phoneNum);
    infoDiv.appendChild(email);


    contactDiv.appendChild(partyDiv);
    contactDiv.appendChild(infoDiv);
    content.appendChild(contactDiv);
    const displayOn = () => {
        contactDiv.style.display = "flex";
    }

    const displayOff = () => {
        contactDiv.style.display = "none"
    };

    return{contactDiv, displayOn, displayOff}
})();

const homeBtn = document.getElementById('homeBtn');
const menuBtn = document.getElementById('menuBtn');
const contactBtn = document.getElementById('contactBtn');

homeBtn.onclick = function(){
    homeTab.displayOn();
    menuTab.displayOff();
    contactTab.displayOff();
};

menuBtn.onclick = function(){
    homeTab.displayOff();
    menuTab.displayOn();
    contactTab.displayOff();
};

contactBtn.onclick = function(){
    homeTab.displayOff();
    menuTab.displayOff();
    contactTab.displayOn();
};