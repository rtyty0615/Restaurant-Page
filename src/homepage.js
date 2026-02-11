import imgDeKas from "./AboutDeKas.jpeg";

export default function homepage() {
    const contentHomepage = document.querySelector('#content');
    contentHomepage.innerHTML = "";
    const imgHomepage = document.createElement("img");
    imgHomepage.src = imgDeKas;
    imgHomepage.alt = "About De Kas";
    imgHomepage.width = 300;  
    contentHomepage.appendChild(imgHomepage);
    const titleAbout = document.createElement("h1");
    titleAbout.textContent = "ABOUT DE KAS";
    contentHomepage.appendChild(titleAbout);
    const subtitleAbout = document.createElement("h3");
    subtitleAbout.textContent = "HARVESTED IN THE MORNING, ON YOUR PLATE IN THE AFTERNOON.";
    contentHomepage.appendChild(subtitleAbout);
    const paraAbout = document.createElement("p");
    paraAbout.textContent = "We’ve been working with this philosophy, from plant to plate, since 2001. It’s in our DNA. Our gardens in Amsterdam and the Beemster are the heart and soul of our restaurant and our menu.They reflect the changing seasons and never fail to surprise. In our gardens – greenhouse and open air – we grow around 300 varieties of vegetables, herbs and fruits.Harvested at the very last minute and prepared in the kitchen as quickly as possible.";
    contentHomepage.appendChild(paraAbout);
    const titleStart = document.createElement("h1");
    titleStart.textContent = "HOW IT STARTED";
    contentHomepage.appendChild(titleStart);
    const subtitleStart = document.createElement("h3");
    subtitleStart.textContent = "RESTAURANT DE KAS IS TUCKED AWAY IN THE AMSTERDAM PARK FRANKENDAEL IN EAST AMSTERDAM.";
    contentHomepage.appendChild(subtitleStart);
    const paraStart = document.createElement("p");
    paraStart.textContent = "In 1927, a greenhouse was built here to supply other parks in the city with trees, grasses, and exotic plants. However, by the end of the 20th century, the greenhouse had become obsolete due to declining demand.It seemed destined for demolition until in 2000, the nursery found a new purpose when it was converted into a restaurant.Now, guests dine in the midst of the greenhouse, under the starry sky, overlooking the garden where vegetables and herbs are grown. Therefore, De Kas became one of the world's first farm-to-table restaurants.";
    contentHomepage.appendChild(paraStart);
}

