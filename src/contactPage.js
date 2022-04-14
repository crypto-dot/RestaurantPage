export function displayContactPage() {
    const containerDiv = document.createElement("div");
    const contentDiv = document.getElementById("content");
    const title = document.createElement("h1");
    const title2 = document.createElement("h1");
    const title3 = document.createElement("h1");
    const contactInfo = document.createElement("div");
    const locationInfo = document.createElement("div");
    const hourInfo = document.createElement("div");
    const weekInfoArray= ["Sunday: Closed","Monday: 8am to 8pm","Tuesday: 9am to 5pm","Wednesday: 8am to 8pm","Thursday: 8am to 8pm","Friday: 8am to 8pm","Saturday: 8am to 8pm"];

    contentDiv.innerHTML = " ";

    for(let i = 0; i < 7; i++){
        let dayInfo = document.createElement("div");
        dayInfo.textContent = weekInfoArray[i];
        hourInfo.appendChild(dayInfo);
    }

    title.textContent = "Contact";
    title2.textContent = "Location";
    title3.textContent = "Hours";

    contactInfo.textContent= "1450 991 221 1050";
    locationInfo.textContent = "Mathers Lunar Base";
    containerDiv.appendChild(title);
    containerDiv.appendChild(contactInfo);
    containerDiv.appendChild(title2);
    containerDiv.appendChild(locationInfo);
    containerDiv.appendChild(title3);
    containerDiv.appendChild(hourInfo);

    contentDiv.appendChild(containerDiv);

}