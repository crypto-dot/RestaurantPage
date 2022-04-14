export function displayMenuPage() {
    const containerDiv = document.createElement('div');
    const contentDiv = document.getElementById("content");
    const title = document.createElement("h1");
    const menuItems = document.createElement("div");
    const arrayItems = ["Galatic Crumpets -------- ƺ20.00","Schleep Moops --------  ƺ10.00","Creep Adoops -------- ƺ30.00", "Lunar fragments -------- ƺ2.00","Gleep Gloop -------- ƺ15.00","Schloop Zan -------- ƺ25.00"];
    contentDiv.innerHTML = " ";
    for(let i = 0; i < 7; i++){
        let menuItem = document.createElement("div");
        menuItem.textContent = arrayItems[i];
        menuItems.appendChild(menuItem);
    }
    title.textContent = "Menu";
    containerDiv.appendChild(title);
    containerDiv.appendChild(menuItems);
    contentDiv.appendChild(containerDiv);

}