const $container = document.getElementById('container')
const $reveal = document.getElementById('reveal')
const $hamburgerMenu = document.getElementById('hamburgerMenu')
const $scroll = document.getElementById('scroll')
const $paragraph2 = document.getElementById('paragraph2')
const $link2 = document.getElementById('link2')


$reveal.addEventListener('click', function(e){

if ($hamburgerMenu){
    $hamburgerMenu.classList.toggle('click')
    
}
})

window.addEventListener('scroll', function(){
    // const $scrolldown = e.target.closest('scrolldown')
  $paragraph2.classList.toggle('scroll')
  console.log('hi')
    
    
  
})