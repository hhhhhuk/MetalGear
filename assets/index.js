let massobject = [
    {
      "userId": 1,
      "id": 1,
      "title": "sunt",
      "body": "quia et suscipit",
      "img": "./assets/img/metall.jpg"
    },
    {
      "userId": 1,
      "id": 2,
      "title": "qui est esse",
      "body": "est rerum tempore ",
      "img": "./assets/img/metall.jpg"
    },
    {
      "userId": 1,
      "id": 3,
      "title": "ea molestias",
      "body": "occaecati omnis eligendi aut ",
      "img": "./assets/img/metall.jpg"
    },
    {
      "userId": 1,
      "id": 4,
      "title": "eum et ",
      "body": "ullam et ",
      "img": "./assets/img/metall.jpg"
    },

  ]



let object = document.querySelector(".object__list")
for (let i = 0; i < massobject.length; i++) {
    object.insertAdjacentHTML('afterbegin', `<div class="object__card"><img src="${massobject[i].img}" alt="" class="card__img"><div class="card__link"><a href="" class="link__obj">${massobject[i].title}.</a></div></div>`)
    console.log(massobject[i].img);
}