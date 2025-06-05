//microloans
var mixer = mixitup('.microloans__wrapper');

//hidden menu

const buttonMenu = document.querySelector('.button-menu');
const hiddenMenu = document.querySelector('.hidden-menu');
const hiddenMenuLinks = document.querySelectorAll('.hidden-menu .nav li a');

buttonMenu.addEventListener('click', function(){
    buttonMenu.classList.toggle('button-menu--active');
    hiddenMenu.classList.toggle('hidden-menu--active');
});

hiddenMenuLinks.forEach(function(item){
  item.addEventListener('click', function(){
    buttonMenu.classList.remove('button-menu--active');
    hiddenMenu.classList.remove('hidden-menu--active');
  })
})

//reviews
const swiper = new Swiper('.slider', {
    slidesPerView: 1,
    direction: 'horizontal',
    loop: true,
  
    navigation: {
        nextEl: '.reviews__button--right',
        prevEl: '.reviews__button--left',
    },
});

//search button
const searchButton = document.querySelector('.button--search img');
const searchInput = document.querySelector('.button--search input');
const cards = document.querySelectorAll('.card');
const notFoundMessage = document.querySelector('.not-found');
const vizitButtons = document.querySelectorAll('.button--vizit');

searchButton.addEventListener('click', function() {
  searchInput.classList.toggle('visible');
  searchButton.classList.toggle('rounded');
  
  if (searchInput.classList.contains('visible')) {
    searchInput.focus();
  } else {
    const searchText = searchInput.value.toLowerCase();
    let found = false;
    
    cards.forEach(card => {
      const titleElement = card.querySelector('.card__title h3');
      if (titleElement) {
        const titleText = titleElement.textContent.toLowerCase();
        if (titleText.includes(searchText)) {
          card.classList.remove('hidden');
          card.style.display = 'block'; // Убедимся, что отображается соответствующая карточка
          found = true;
        } else {
          card.classList.add('hidden');
          card.style.display = 'none'; // Скрыть неподходящие карточки
        }
      }
    });
    
    if (!found) {
      notFoundMessage.style.display = 'block';
    } else {
      notFoundMessage.style.display = 'none';
    }
  }
});

vizitButtons.forEach(button => {
  button.addEventListener('click', function() {
    cards.forEach(card => {
      card.style.display = 'list-item';
      card.classList.remove('hidden'); // Убедимся, что класс hidden также удален
    });
    notFoundMessage.style.display = 'none'; // Скрыть сообщение "Ничего не найдено"
  });
});

//Buttons Info

const cardsI = document.querySelectorAll('.card');

cardsI.forEach(function(item){
  const buttonInfo = item.querySelector('.button--info');
  const cardHidden = item.querySelector('.card__hidden');
  const cardHiddenCross = item.querySelector('.card__hidden-cross');

  buttonInfo.addEventListener('click', function(){
      cardHidden.classList.add('card__hidden--active');
  });

  cardHiddenCross.addEventListener('click', function(){
    cardHidden.classList.remove('card__hidden--active');
  })
});

//Message Success
function getQueryParams() {
        const params = {};
        window.location.search.substring(1).split("&").forEach(pair => {
            const [key, value] = pair.split("=");
            params[decodeURIComponent(key)] = decodeURIComponent(value || "");
        });
        return params;
    }

    function removeQueryParam(param) {
        const url = new URL(window.location);
        url.searchParams.delete(param);
        window.history.replaceState({}, document.title, url);
    }

    document.addEventListener("DOMContentLoaded", () => {
        const params = getQueryParams();
        if (params.success === "1") {
            const successMessage = document.getElementById("success-message");
            successMessage.style.display = "block";
            setTimeout(() => {
                successMessage.style.display = "none";
                removeQueryParam('success');
            }, 2000);
        }
});

//Politic
const politic = document.querySelector('.politic');
const politicBtn = document.querySelector('#politic');
const politicCross = document.querySelector('.politic__middle img');

politicBtn.addEventListener('click', function(){
  politic.classList.add('politic--active');
});

politicCross.addEventListener('click', function(){
  politic.classList.remove('politic--active');
})

//Articles

const buttonOpen1 = document.querySelector('#article-first');
const buttonOpen2 = document.querySelector('#article-second');
const buttonOpen3 = document.querySelector('#article-third');
const buttonOpen4 = document.querySelector('#article-fourth');

const hiddenArticle = document.querySelector('.hidden-article');
const hiddenArticleCross = document.querySelectorAll('.hidden-article__middle-cross');

const hiddenArticle1 = document.querySelector('.hidden-article__middle--first');
const hiddenArticle2 = document.querySelector('.hidden-article__middle--second');
const hiddenArticle3 = document.querySelector('.hidden-article__middle--third');
const hiddenArticle4 = document.querySelector('.hidden-article__middle--fourth');

buttonOpen1.addEventListener('click', function(){
  hiddenArticle.style = 'display:flex';
  hiddenArticle1.style = 'display:flex';
  hiddenArticle2.style = 'display:none';
  hiddenArticle3.style = 'display:none';
  hiddenArticle4.style = 'display:none';
});

buttonOpen2.addEventListener('click', function(){
  hiddenArticle.style = 'display:flex';
  hiddenArticle1.style = 'display:none';
  hiddenArticle2.style = 'display:flex';
  hiddenArticle3.style = 'display:none';
  hiddenArticle4.style = 'display:none';
});

buttonOpen3.addEventListener('click', function(){
  hiddenArticle.style = 'display:flex';
  hiddenArticle1.style = 'display:none';
  hiddenArticle2.style = 'display:none';
  hiddenArticle3.style = 'display:flex';
  hiddenArticle4.style = 'display:none';
});

buttonOpen4.addEventListener('click', function(){
  hiddenArticle.style = 'display:flex';
  hiddenArticle1.style = 'display:none';
  hiddenArticle2.style = 'display:none';
  hiddenArticle3.style = 'display:none';
  hiddenArticle4.style = 'display:flex';
});

hiddenArticleCross.forEach(function(item){
  item.addEventListener('click', function(){
    hiddenArticle.style = 'display:none';
    hiddenArticle1.style = 'display:none';
    hiddenArticle2.style = 'display:none';
    hiddenArticle3.style = 'display:none';
    hiddenArticle4.style = 'display:none';
  })
});

//About company

const aboutButton = document.querySelector('#about-button');
const aboutBlock = document.querySelector('.about-company');
const aboutCross = document.querySelector('.about-company__middle img');

aboutButton.addEventListener('click', function(){
  aboutBlock.style = "display:flex";
});

aboutCross.addEventListener('click', function(){
  aboutBlock.style = "display:none";
})