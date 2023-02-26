import superHero from "./api/callToAPI.js";
const searchBtn = document.getElementById('search-btn');
searchBtn.addEventListener('click', (event) => {
    event.preventDefault();
    const input = document.getElementById('search-input');
    input.value ? (superHero(input.value).then(resp => {
        let heros = resp;
        let card = "";
        if (Array.isArray(resp)) {
            for (const hero of heros) {
                card += HeroCard(hero);
            }
        }
        else {
            card = resp;
        }
        const slidersec = document.getElementById('slider-sec');
        slidersec.classList.add('slider');
        slidersec.innerHTML = card;
        window.scrollTo({
            top: slidersec === null || slidersec === void 0 ? void 0 : slidersec.scrollHeight,
            left: 0,
            behavior: 'smooth'
        });
    })) : alert("input required");
});
const HeroCard = (hero) => {
    return (`
        <div class="slide">
            <div class="card">
            <img src="${hero.image.url}" alt="" class="img-responsive" />
            <h1>${hero.name} </h1>
            </div>
        </div>    
        `);
};
