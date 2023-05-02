import './style.css';

const body = document.getElementsByTagName("body");

const createTitle = () => {
    const title = document.createElement("h1");
    title.innerText = "New Restaurant";
    title.setAttribute("id", "test");
    document.body.appendChild(title);

};

console.log(body)
createTitle();