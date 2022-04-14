export function displayAboutPage() {
    const containerDiv = document.createElement('div');
    const paragraphIntroduction = document.createElement('div');
    const contentDiv = document.getElementById('content');
    const title = document.createElement('h1');

    //lines for animation
    const line1 = document.createElement("div");
    const line2 = document.createElement("div"); 
    const line3 = document.createElement("div");
    const line4 = document.createElement("div");
    const line5 = document.createElement("div");
    const line6  = document.createElement("div");

    line1.textContent = "Welcome to Lunar Plates. Our";
    line2.textContent = "fine cuisine of interstellar "; 
    line3.textContent = "foods is made with love and ";
    line4.textContent = "care. We have been voted ";
    line5.textContent = "number one in interstellar";
    line6.textContent = "dining for the past 10 years. ";    

    paragraphIntroduction.classList.add("paragraphIntroduction");
    paragraphIntroduction.appendChild(line1);
    paragraphIntroduction.appendChild(line2);
    paragraphIntroduction.appendChild(line3);
    paragraphIntroduction.appendChild(line4);
    paragraphIntroduction.appendChild(line5);
    paragraphIntroduction.appendChild(line6);


    contentDiv.innerHTML = " ";
    title.textContent = "About";
    containerDiv.appendChild(title);
    containerDiv.appendChild(paragraphIntroduction);
    contentDiv.appendChild(containerDiv);
}