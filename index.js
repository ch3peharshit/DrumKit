
    document.querySelectorAll(".drum").forEach( (element,i) => element.addEventListener("click",function (){
        
        var buttonName = this.innerText;
        makeSound(buttonName)
        buttonAnimation(buttonName)
    }))
    document.addEventListener("keydown",function(event){
        
        makeSound(event.key)
        buttonAnimation(event.key)
       
    })
    function makeSound(key) {
        var sourceString="";
        switch(key) {
            case "w": sourceString="./sounds/tom-1.mp3"
            break;
            case "a": sourceString="./sounds/tom-2.mp3"
            break;
            case "s": sourceString="./sounds/tom-3.mp3"
            break;
            case "d" : sourceString="./sounds/tom-4.mp3"
            break;
            case "j" : sourceString="./sounds/kick-bass.mp3"
            break;
            case "k" : sourceString="./sounds/crash.mp3"
                break;
            case "l":  sourceString="./sounds/snare.mp3"
            break;
            default : console.log("default case")
        }
        
        var audio = new Audio(sourceString)
        audio.play()
    }
    function buttonAnimation(key) {
        var activeButton = document.querySelector('.'+key);
        activeButton.classList.add("pressed");

        setTimeout(function() {
            activeButton.classList.remove("pressed")
        },100)
    }
