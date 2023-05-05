import './style.css';

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
    navDiv.appendChild(homeTab);

    const menuTab = document.createElement("h2");
    menuTab.innerText = "Menu";
    navDiv.appendChild(menuTab);

    const contactTab = document.createElement("h2");
    contactTab.innerText = "Contact Us";
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
    about.innerText = "Come in and enjoy a meal with some of your favorite princesses! Many princesses visit our dining room so be sure to check our site so you don't miss your favorite one."
    aboutDiv.appendChild(about);
    homeDiv.appendChild(aboutDiv);

    //Div container for visitor information
    const visitorDiv = document.createElement('div');
    visitorDiv.setAttribute('class', 'container');

    const visitorTitle = document.createElement('h3');
    visitorTitle.innerText = "This week's visitor";
    visitorDiv.appendChild(visitorTitle);

    const visitorImg = document.createElement('image');
    visitorImg.setAttribute('src', './cinderella.jpg')
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

    content.appendChild(contactDiv);
    const displayOn = () => {
        contactDiv.style.display = "flex";
    }

    const displayOff = () => {
        contactDiv.style.display = "none"
    };

    return{contactDiv, displayOn, displayOff}
})();