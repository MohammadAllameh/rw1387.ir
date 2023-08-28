function svg_script_hover(){// svg hover function
    // this.style.fill = 'red'
    // this.style.stroke = 'red'
    this.style.filter =  'brightness(1.3)'
    this.style.transition = 'filter 3s'
}
function svg_script_no_hover(){ // svg no hover function
    if (m == 5) {
        this.style.stroke = `${colorInput.value}`
        let color = selector.querySelector('#svg_chess').style.color = `${colorInput.value}`
        this.style.fill = color
        this.style.filter =  'brightness(1)'
        this.style.transition = 'fill 3s,stroke 3s,filter 3s'
        return
    }
    if (blue_value == 5) {
        this.style.stroke = `${colorInput.value}`
        let color = selector.querySelector('#svg_chess').style.color = 'rgb(18, 96, 197)'
        this.style.fill = color
        this.style.filter =  'brightness(1)'
        this.style.transition = 'fill 3s,stroke 3s,filter 3s'
        return
    }
    if (orang_value == 5) {
        this.style.stroke = `${colorInput.value}`
        let color = selector.querySelector('#svg_chess').style.color = 'rgb(255, 128, 64)'
        this.style.fill = color
        this.style.filter =  'brightness(1)'
        this.style.transition = 'fill 3s,stroke 3s,filter 3s'
        return
    }
    if (green_value == 5) {
        this.style.stroke = `${colorInput.value}`
        let color = selector.querySelector('#svg_chess').style.color = 'rgb(63, 171, 63)'
        this.style.fill = color
        this.style.filter =  'brightness(1)'
        this.style.transition = 'fill 3s,stroke 3s,filter 3s '
        return
    }
    else{
        this.style.fill = 'rgb(247 183 49 / 92%)'
        this.style.stroke = `${colorInput.value}`
        this.style.filter =  'brightness(1)'
    }
    this.style.transition = 'fill 3s,stroke 3s,filter 3s'
}

linkedin.addEventListener('mouseenter' ,svg_script_hover )// hover svg linkedin

linkedin.addEventListener('mouseleave' , svg_script_no_hover)// no hover svg linkedin

github.addEventListener('mouseenter' , svg_script_hover)// hover svg github

github.addEventListener('mouseleave' , svg_script_no_hover)// no hover svg github

gmail.addEventListener('mouseenter' , svg_script_hover)// hover svg gmail

gmail.addEventListener('mouseleave' , svg_script_no_hover)// no hover svg gmail

telegram.addEventListener('mouseenter' , svg_script_hover)// hover svg telegram

telegram.addEventListener('mouseleave' , svg_script_no_hover)// no hover svg telegram

chess.addEventListener('mouseenter' , svg_script_hover)// hover svg chess

chess.addEventListener('mouseleave' , svg_script_no_hover)// no hover svg chess

instagram.addEventListener('mouseenter' , svg_script_hover)// hover svg instagram

instagram.addEventListener('mouseleave' , svg_script_no_hover)