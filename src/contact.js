import imgContactDeKas from "./ContactDeKas.jpg";

export default function homepage() {
    const contentContact = document.querySelector('#content');
    contentContact.innerHTML = "";
    const imgContact = document.createElement("img");
    imgContact.src = imgDeKas;
    imgContact.alt = "De Kas Contact";
    imgContact.width = 300;  
    contentContact.appendChild(imgContact);
    const titleContact = document.createElement("h1");
    titleContact.textContent = "Contact";
    contentContact.appendChild(titleContact);
    const subtitleContact = document.createElement("h3");
    subtitleContact.textContent = "RESTAURANT AND NURSERY DE KAS IS SITUATED IN FRANKENDAEL PARK";
    contentContact.appendChild(subtitleContact);
    // 
    const address = document.createElement("h3");
    address.textContent = "Address";
    contentContact.appendChild(address);
    const addressLine1 = document.createElement("h5");
    addressLine1.textContent = "Kamerlingh Onneslaan 3";
    contentContact.appendChild(addressLine1);
    const addressLine2 = document.createElement("h5");
    addressLine2.textContent = "1097 DE Amsterdam";
    contentContact.appendChild(addressLine2);
    const telephone = document.createElement("h3");
    telephone.textContent = "Telephone Number";
    contentContact.appendChild(telephone);
    const telephoneNum = document.createElement("h5");
    telephoneNum.textContent = "+31204624562";
    contentContact.appendChild(telephoneNum);
    const email = document.createElement("h3");
    email.textContent = "Email";
    contentContact.appendChild(email);
    const emailAddress = document.createElement("h5");
    emailAddress.textContent = "info@restaurantdekas.nl";
    contentContact.appendChild(emailAddress);
}

