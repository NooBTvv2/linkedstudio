var contributions = [
    {
        name: "Claus Carnage",
        desc: "Something went wrong with santa",

        link: "https://www.roblox.com/games/15276388087/Claus-Carnage",
        img: "Images/GameImages/CC.png",
        logo: "Images/logos/Redb-logo.webp"
    },

    {
        name: "Five Nights: Hunted",
        desc: "The Animatronics do tend to get freaky at night",

        link: "https://www.roblox.com/games/74161468227974/Five-Nights-Hunted",
        img: "Images/GameImages/FNH.webp",
        logo: "Images/logos/FNH-logo.webp"
    },

    {
        name: "Prison Brawl",
        desc: "Show your fighting supremacy, be the king of the prison",

        link: "https://www.roblox.com/games/72693274786471/Prison-Brawl",
        img: "Images/GameImages/PB.webp",
        logo: "Images/logos/PB-logo.webp"
    },

    {
        name: "Sudden Bombs",
        desc: "Bombs are raining from the sky! Quick head to shelter!",

        link: "https://www.roblox.com/games/76511758977637/Sudden-Bombs",
        img: "Images/GameImages/SB.webp",
        logo: "Images/logos/SP-logo.webp"
    },

    {
        name: "Blox Wars",
        desc: "Bedwars but Better",

        link: "https://www.roblox.com/games/5455985493/Blox-Wars",
        img: "Images/GameImages/BW.webp",
        logo: "Images/logos/Quant-logo.webp"
    },

    {
        name: "Aether Rush",
        desc: "Revolutionary TDS game",

        link: "https://www.roblox.com/games/3885697869/Aether-Rush",
        img: "Images/GameImages/AR.webp",
        logo: "Images/logos/Quant-logo.webp"
    },

    {
        name: "Walk or Die",
        desc: "Standing still is fatal...",

        link: "https://www.roblox.com/games/115156857343516/Walk-or-Die",
        img: "Images/GameImages/WoD.webp",
        logo: "Images/logos/WoD-logo.webp"
    },

    {
        name: "Hitchhikers Trip",
        desc: "This road is not what is seems",

        link: "https://www.roblox.com/games/132576380590709/Hitchhikers-Trip",
        img: "Images/GameImages/HHT.webp",
        logo: "Images/logos/CYAN-logo.webp"
    },

    {
        name: "CYOA",
        desc: "Create your very own army!",

        link: "https://www.roblox.com/games/18631989034/Create-Your-Own-Army",
        img: "Images/GameImages/CYOA.webp",
        logo: "Images/logos/CYAN-logo.webp"
    },
]

// Actual Code

var get_contcontainer = document.getElementById("contributions-container")

for (let i = 0; i < contributions.length; i++) {
    var node = `
        <div class="cd" style="background-image: url(`+ contributions[i].img + `);">
            <h2>`+ contributions[i].name + `</h2>
            <p>`+ contributions[i].desc + `</p>

            <a href=`+ contributions[i].link + `></a>
            <img src=`+ contributions[i].logo + ` alt="linked-studioslogo" draggable=false>
        </div>
    `
    $(get_contcontainer).append(node);
}

var getHam = document.getElementById("nav-ham")
var linksNav = document.getElementById("nav-links")

let NavActive = linksNav.dataset.isopen === false  

getHam.addEventListener("click", () => {
    NavActive = !NavActive

    if (NavActive) {
        linksNav.style.transform = "translateX(0%)" 
    } else {
        linksNav.style.transform = "translateX(125%)"
    }
})  