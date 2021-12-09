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
    // const $scrolldown = e.target.closest('scrolldown')
  

 
  if (window.pageYOffset>700){
   $paragraph2.classList.add('scroll')

  } 
  
  if (window.pageYOffset>1200){
    $paragraph3.classList.add('scroll')
  }

    
    
  
})