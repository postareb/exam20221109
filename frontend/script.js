
function myFunction() {
    let whiteSpace = document.getElementById("whiteSpace");
    let moreText = document.getElementById("showMore");
    let btnText = document.getElementById("myBtn");
  
    if (whiteSpace.style.display === "none") {
      whiteSpace.style.display = "inline";
      btnText.innerHTML = "Show more";
      moreText.style.display = "none";
    } 
    
    else {
      whiteSpace.style.display = "none";
      btnText.innerHTML = "Show less";
      moreText.style.display = "inline";
    }
}


const getDatas = async () => {
    const request = await fetch("https://api.github.com/users");
    const requestInfos = await request.json();


        for (let i = 0; i < requestInfos.length; i++) {
        const createImg = document.createElement("img");
        createImg.innerHTML = `<img src="${requestInfos[i].avatar_url}"/>`
        const createLoginName = document.createElement("p");
        createLoginName.innerHTML = `<p id="${requestInfos[i].login}">${requestInfos[i].login}</p>`
        const createUserType = document.createElement ("p");
        createUserType.innerHTML = `<p id="${requestInfos[i].type}">${requestInfos[i].type}</p>`
        const createAdminType = document.createElement ("p");
        createAdminType.innerHTML = `<p id="${requestInfos[i].site_admin}">${requestInfos[i].site_admin}</p>`
        
        const createDiv = document.createElement("div");
        createDiv.classList.add("card");
        createDiv.innerHTML = `
        <img src="${requestInfos[i].avatar_url}"/>
        <p id="${requestInfos[i].login}">${requestInfos[i].login}</p>
        <p id="${requestInfos[i].type}">${requestInfos[i].type}</p>
        <p id="${requestInfos[i].site_admin}">${requestInfos[i].site_admin}</p>
        `


        card.appendChild(createDiv);

        }

}

getDatas();