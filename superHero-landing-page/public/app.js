import superHero from "./api/callToAPI.js";
const searchBtn = document.getElementById("search-btn");
const btnToTop = document.getElementById("btnTotop");
const heroDetailCardSec = document.getElementById("heroDetailSec");
searchBtn.addEventListener("click", (event) => {
    event.preventDefault();
    const input = document.getElementById("search-input");
    input.value
        ? superHero(input.value).then((resp) => {
            let heros = resp;
            let cards = "";
            if (Array.isArray(resp)) {
                for (const hero of heros) {
                    cards += HeroCard(hero);
                }
            }
            else {
                cards = resp;
            }
            const slidersec = document.getElementById("slider-sec");
            const cardsec = document.getElementById("cardSec");
            slidersec.innerHTML = cards;
            cardsec.classList.remove("d-none");
            ScrollTo(slidersec === null || slidersec === void 0 ? void 0 : slidersec.offsetTop);
            if (Array.isArray(resp)) {
                const sliderCards = document.querySelectorAll(".card");
                EventOnCard(sliderCards, heros);
            }
            else {
                heroDetailCardSec.innerHTML = "";
            }
        })
        : alert("input required");
});
btnToTop.addEventListener("click", () => {
    ScrollTo(0);
});
const HeroCard = (hero) => {
    return `
        <div class="slide">
            <div class="card" data-cardid="${hero.id}">
            <img src="${hero.image.url}" alt="" class="img-responsive" />
            <h1>${hero.name} </h1>
            </div>
        </div>    
        `;
};
const ScrollTo = (scrollSec) => {
    window.scrollTo({
        top: scrollSec,
        left: 0,
        behavior: "smooth",
    });
    window.addEventListener("scroll", () => {
        const scrollPosition = window.scrollY;
        if (scrollPosition > 100) {
            btnToTop.classList.remove("d-none");
        }
        else {
            btnToTop.classList.add("d-none");
        }
    });
};
const EventOnCard = (sliderCards, hero) => {
    sliderCards.forEach((Element) => {
        Element.addEventListener("click", (e) => {
            e.preventDefault();
            const currHero = hero.find((item, index) => item.id == Element.dataset.cardid);
            const heroDetailCard = HeroCardDetails(currHero, hero);
            heroDetailCardSec.innerHTML = heroDetailCard;
            heroDetailCardSec.classList.remove("d-none");
            ScrollTo(heroDetailCardSec.offsetTop);
            const heroTabs = document.querySelectorAll(".hero-tab-item");
            const heroTabsContent = document.querySelectorAll(".hero-tab-content");
            HeroTabs(heroTabs, heroTabsContent);
        });
    });
};
const HeroCardDetails = (currHero, heros) => {
    let relCard = "";
    heros.forEach((element) => {
        relCard += `
          <li class="hero-rel-item">
                <img src="${element.image.url}" alt="">
              </li>`;
    });
    return `
        <div class="card">
        <div class="hero-img text-center">
          <img src="${currHero.image.url}" alt="">
        </div>
        <div class="hero-detail">
          <h1 class="text-xl">${currHero.name}</h1>
          <ul class="hero-tab">
            <li class="hero-tab-item active" data-current="biography">
              Biography
            </li>
            <li class="hero-tab-item" data-current="appearance">
              Appearance
            </li>
            <li class="hero-tab-item" data-current="connections">
              Connections
            </li>
            <li class="hero-tab-item" data-current="work">
              Work
            </li>
          </ul>
          <div class="hero-tab-container">
            <div class="hero-tab-content active" id="biography">
              <p>Full Name : ${currHero.biography["full-name"]} </p>  
              <p>DOB : ${currHero.biography["place-of-birth"]}</p>
              <p>Alter-egos : ${currHero.biography["alter-egos"]}</p>
              <p>First-Appearance : ${currHero.biography["first-appearance"]}</p>
              <p>Publisher : ${currHero.biography.publisher}</p> 
              <p>Alignment : ${currHero.biography.alignment}</p>
            </div>
            <div class="hero-tab-content " id="appearance">
              <p>${currHero.appearance}</p>
            </div>
            <div class="hero-tab-content " id="connections">
              <p>${currHero.connections}</p>
            </div>
                 <div class="hero-tab-content " id="work">
              <p>${currHero.work}</p>
            </div>
          </div>
          <div class="hero-related-container">
            <h3>Related Heros</h3>
            <ul class="hero-rel">
                ${relCard}
            </ul>
          </div>
        </div>
      </div>
        `;
};
const HeroTabs = (heroTabs, heroTabsContent) => {
    heroTabs.forEach((element) => {
        element.addEventListener("click", (e) => {
            e.preventDefault();
            heroTabs.forEach((element) => {
                element.classList.remove("active");
            });
            heroTabsContent.forEach((element) => {
                element.classList.remove("active");
            });
            const currTab = e.target;
            const currContentTabId = e.target.dataset.current;
            const tab = document.getElementById(`${currContentTabId}`);
            currTab.classList.add("active");
            tab.classList.add("active");
        });
    });
};
