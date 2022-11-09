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
        <p id="${requestInfos[i].type}">Rank: ${requestInfos[i].type}</p>
        <p id="${requestInfos[i].site_admin}">Admin: ${requestInfos[i].site_admin}</p>
        `


        card.appendChild(createDiv);

        }

}

getDatas();