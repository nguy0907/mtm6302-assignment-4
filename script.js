const $container = document.getElementById('container')
const $reveal = document.getElementById('reveal')
const $hamburgerMenu = document.getElementById('hamburgerMenu')
const $paragraph2 = document.getElementById('paragraph2')
const $paragraph3 = document.getElementById('paragraph3')



$reveal.addEventListener('click', function(e){

if ($hamburgerMenu){
    $hamburgerMenu.classList.toggle('click')
    
}
})

window.addEventListener('scroll', function(){
    
  //Mobile screen
    if (window.pageYOffset>700){
      $paragraph2.classList.add('mobilescroll')
    }
  
  
    if (window.pageYOffset>1700){
      $paragraph3.classList.add('mobilescroll')
    }
  


 //Tablet and desktop
  if (window.pageYOffset>700){
   $paragraph2.classList.add('scroll')

  } 
  
  if (window.pageYOffset>1200){
    $paragraph3.classList.add('scroll')
  }

})