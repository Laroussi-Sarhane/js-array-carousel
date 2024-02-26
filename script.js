/*
1.inserisco tutti i percorsi delle immagini in un array
2.inserisco tutti gli elementi html contenenti limmagine con la classe hide 
3.tolgo la classe 
 
 */
 const itemsWrapperRight = document.querySelector('.box_img');

 console.log(itemsWrapperRight);

 const images = [
  'img/01.webp',
  'img/02.webp',
  'img/03.webp',
  'img/04.webp',
  'img/05.webp',
  
]

for(let i = 0; i < images.length; i++){
  const img = images[i];
  console.log(img);
  itemsWrapperRight.innerHTML += `<img class="hide" src=" ${img} ">`
}