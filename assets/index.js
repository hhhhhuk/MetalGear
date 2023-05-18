let massobject = [
    {
      "userId": 1,
      "id": 1,
      "title": "sunt",
      "body": "quia et suscipit"
    },
    {
      "userId": 1,
      "id": 2,
      "title": "qui est esse",
      "body": "est rerum tempore "
    },
    {
      "userId": 1,
      "id": 3,
      "title": "ea molestias",
      "body": "occaecati omnis eligendi aut "
    },
    {
      "userId": 1,
      "id": 4,
      "title": "eum et ",
      "body": "ullam et "
    },

  ]



let object = document.querySelector(".object")
for (let i = 0; i < massobject.length; i++) {
    object.insertAdjacentHTML('afterbegin', `<div class="object__card"><img src="assets/img/vl.jpg" alt="" class="card__img"><div class="card__link"><a href="" class="link__obj">Lorem ipsum dolor sit amet consectetur.</a></div></div>`)
    console.log(massobject[i].img);
}