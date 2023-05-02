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
    title.innerText = "New Restaurant";
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
