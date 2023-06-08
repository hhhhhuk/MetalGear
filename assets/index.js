let massobject = [
  {
    "userId": 1,
    "id": 1,
    "title": "Владивосто́к",
    "body": "город и порт на Дальнем Востоке России",
    "img": "./assets/img/vl/vl.jpg"
  },
  {
    "userId": 1,
    "id": 2,
    "title": "Владивосто́к",
    "body": "политический, культурный, научно-образовательный и экономический центр региона",
    "img": "./assets/img/vl/zalivVL.jpg"
  },
  {
    "userId": 1,
    "id": 3,
    "title": "Владивосто́к",
    "body": "административный центр Приморского края, Владивостокского городского округа",
    "img": "./assets/img/vl/vlad1.jpg"
  },
  {
    "userId": 1,
    "id": 4,
    "title": "Владивосто́к",
    "body": "Основан как военный пост «Владивосток» в 1860 году,Перейти к разделу «#Основание города» в 1880 году получил статус города",
    "img": "./assets/img/vl/burakVL.jpg"
  },
  {
    "userId": 1,
    "id": 5,
    "title": "Владивосто́к",
    "body": "Название «Владивосток» образовано от слов «владеть» и «Восток», по аналогии с Владикавказом",
    "img": "./assets/img/vl/vlad2.jpg"
  },
  {
    "userId": 1,
    "id": 6,
    "title": "Владивосто́к",
    "body": "Владивосток занимает полуостров Муравьёва-Амурского",
    "img": "./assets/img/vl/vlad3.jpg"
  },

]



let object = document.querySelector(".object__list")
for (let i = 0; i < massobject.length; i++) {
  object.insertAdjacentHTML('afterbegin', `<div class="object__card"><img src="${massobject[i].img}" alt="" class="card__img"><div class="card__link"><a href="" class="link__obj">${massobject[i].title}.</a></div></div>`)
  console.log(massobject[i].img);
}
