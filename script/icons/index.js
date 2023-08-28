about_icons.addEventListener('mouseenter' , function(event){
    this.style.filter = 'drop-shadow(0px 0px 6px #fff)';
    this.style.transition = 'filter 3s'
})

about_icons.addEventListener('mouseleave' ,function(event){
    this.style.filter = 'none';
    this.style.transition = 'filter 3s'
})

div_icons.addEventListener('mouseenter' , function(event){
    text_footer.style.transform =  'scale(1.1)'
    text_footer.style.transition = 'transform 4s'
    this.style.filter = 'drop-shadow(0px 0px 6px #fff)';
    this.style.transition = 'filter 3s'
})

div_icons.addEventListener('mouseleave' ,function(event){
    text_footer.style.transform = 'scale(1)'
    text_footer.style.transition = 'transform 4s'
    this.style.filter = 'none';
    this.style.transition = 'filter 3s'
})

let footer_1_icon = selector.querySelector('.footer-1-icon')
let footer_2_icon = selector.querySelector('.footer-2-icon')


// footer_1_icon.addEventListener('mouseenter' , function(event){
//     this.style.filter = 'drop-shadow(0px 0px 6px #fff)';
//     this.style.transition = 'filter 3s'
// })
// footer_1_icon.addEventListener('mouseleave' ,function(event){
//     this.style.filter = 'none';
//     this.style.transition = 'filter 3s'
// })
footer_2_icon.addEventListener('mouseenter' , function(event){
    this.style.filter = 'drop-shadow(0px 0px 6px #fff)';
    this.style.transition = 'filter 3s'
})
footer_2_icon.addEventListener('mouseleave' ,function(event){
    this.style.filter = 'none';
    this.style.transition = 'filter 3s'
})