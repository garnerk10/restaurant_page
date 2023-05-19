import './style.css';
import Cinderella from './cinderella.jpg';
import Crown from './crown.png';
import Food1 from './food1.jpg';
import Food2 from './food2.jpg';
import Food3 from './food3.jpeg';
import Food4 from './food4.jpeg';
import Food5 from './food5.jpg';
import Food6 from './food6.jpg';

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

    const homeHolder = document.createElement('div');
    homeHolder.setAttribute('class', 'btnHolder');
    homeHolder.setAttribute('id', 'homeHolder');
    const homeCrown = document.createElement('div');
    homeCrown.setAttribute('class', 'crownSpace');
    homeCrown.setAttribute('id', 'homeCrown');
    homeHolder.appendChild(homeCrown);
    const homeTab = document.createElement("h2");
    homeTab.innerText = "Home";
    homeTab.setAttribute('id', 'homeBtn');
    homeHolder.appendChild(homeTab);
    navDiv.appendChild(homeHolder);

    const menuHolder = document.createElement('div');
    menuHolder.setAttribute('class', 'btnHolder');
    menuHolder.setAttribute('id', 'menuHolder');
    const menuCrown = document.createElement('div');
    menuCrown.setAttribute('class', 'crownSpace');
    menuCrown.setAttribute('id', 'menuCrown');
    menuHolder.appendChild(menuCrown);
    const menuTab = document.createElement("h2");
    menuTab.innerText = "Menu";
    menuTab.setAttribute('id', 'menuBtn');
    menuHolder.appendChild(menuTab);
    navDiv.appendChild(menuHolder);

    const contactHolder = document.createElement('div');
    contactHolder.setAttribute('class', 'btnHolder');
    contactHolder.setAttribute('id', 'contactHolder');
    const contactCrown = document.createElement('div');
    contactCrown.setAttribute('class', 'crownSpace');
    contactCrown.setAttribute('id', 'contactCrown');
    contactHolder.appendChild(contactCrown);
    const contactTab = document.createElement("h2");
    contactTab.innerText = "Contact Us";
    contactTab.setAttribute('id', 'contactBtn');
    contactHolder.appendChild(contactTab);
    navDiv.appendChild(contactHolder);

    content.appendChild(navDiv);
})();

const homeTab = (() => {
    const homeDiv = document.createElement("div");
    const bgDiv = document.createElement('div');
    bgDiv.setAttribute('class', 'background');
    homeDiv.appendChild(bgDiv);
    homeDiv.setAttribute('class', 'tab');
    homeDiv.setAttribute('id', 'homeTab');

    //Div container for about paragraph
    const aboutDiv = document.createElement('div');
    aboutDiv.setAttribute('id', 'aboutContainer');

    const homeHead = document.createElement('h3');
    homeHead.innerText = 'Welcome to the Palace!';
    aboutDiv.appendChild(homeHead);
    
    const about = document.createElement('p');
    about.innerText = "Come in and enjoy a meal with some of your favorite royal characters! Many royalty visit our dining room so be sure to check our site. You don't miss your favorite one!"
    aboutDiv.appendChild(about);
    homeDiv.appendChild(aboutDiv);

    //Div container for visitor information
    const visitorDiv = document.createElement('div');
    visitorDiv.setAttribute('id', 'visitorContainer');

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

        const bgDiv = document.createElement('div');
        bgDiv.setAttribute('class', 'background');
        menuDiv.appendChild(bgDiv);

        const menuGrid = document.createElement('div');
        menuGrid.setAttribute('id', 'menuGrid');
            const food1 = new Image();
            food1.src = Food1;
            food1.setAttribute('class', 'foodPic');
            menuGrid.appendChild(food1);

            const food2 = new Image();
            food2.src = Food2;
            food2.setAttribute('class', 'foodPic');
            menuGrid.appendChild(food2);

            const food3 = new Image();
            food3.src = Food3;
            food3.setAttribute('class', 'foodPic');
            menuGrid.appendChild(food3);

            const food4 = new Image();
            food4.src = Food4;
            food4.setAttribute('class', 'foodPic');
            menuGrid.appendChild(food4);

            const food5 = new Image();
            food5.src = Food5;
            food5.setAttribute('class', 'foodPic');
            menuGrid.appendChild(food5);

            const food6 = new Image();
            food6.src = Food6;
            food6.setAttribute('class', 'foodPic');
            menuGrid.appendChild(food6);

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
    const bgDiv = document.createElement('div');
    bgDiv.setAttribute('class', 'background');
    contactDiv.appendChild(bgDiv);
    contactDiv.setAttribute('class', 'tab');
    contactDiv.setAttribute('id', 'contactTab');
    contactDiv.style.display = 'none';

    const partyDiv = document.createElement('div');
        partyDiv.setAttribute('id', 'partyDiv');
        const partyHeader = document.createElement('h3');
        partyHeader.innerText = "Special Events";
    partyDiv.appendChild(partyHeader);
        const partyInfo = document.createElement('p');
        partyInfo.innerText = "We can help you plan your special event here at our diner! Contact us with the details of your event and we will help make it a time you'll never forget!"
    partyDiv.appendChild(partyInfo);

    const infoDiv = document.createElement('div');
        infoDiv.setAttribute('id', 'infoDiv');
        const phoneNum = document.createElement('h4');
        phoneNum.innerText = "Phone: 444-333-1212";
        const email = document.createElement('h4');
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

//Navigation buttons and function
const homeBtn = document.getElementById('homeBtn');
const menuBtn = document.getElementById('menuBtn');
const contactBtn = document.getElementById('contactBtn');
const homeBtnCrown = document.getElementById('homeCrown');
const menuBtnCrown = document.getElementById('menuCrown');
const contactBtnCrown = document.getElementById('contactCrown');

homeBtn.onclick = function(){
    homeTab.displayOn();
    menuTab.displayOff();
    contactTab.displayOff();
    homeBtnCrown.style.backgroundImage = `url(${Crown})`;
    menuBtnCrown.style.backgroundImage = `none`;
    contactBtnCrown.style.backgroundImage = 'none';
};

menuBtn.onclick = function(){
    homeTab.displayOff();
    menuTab.displayOn();
    contactTab.displayOff();
    homeBtnCrown.style.backgroundImage = 'none';
    menuBtnCrown.style.backgroundImage = `url(${Crown})`;
    contactBtnCrown.style.backgroundImage = 'none';
};

contactBtn.onclick = function(){
    homeTab.displayOff();
    menuTab.displayOff();
    contactTab.displayOn();
    homeBtnCrown.style.backgroundImage = 'none';
    menuBtnCrown.style.backgroundImage = `none`;
    contactBtnCrown.style.backgroundImage = `url(${Crown})`;
};


