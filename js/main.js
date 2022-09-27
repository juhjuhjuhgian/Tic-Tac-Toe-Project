let turns = 1

const boxSelector = document.querySelectorAll('.box')

Array.from(boxSelector).forEach((item, index)=> item.addEventListener('click', ticTacToe))

function ticTacToe(){
    if(this.childNodes[1].innerText !== 'X' || this.childNodes[1].innerText !== 'O'){
        
        this.childNodes[1].classList.toggle('hidden')
        
        if(turns % 2 === 0){
            this.childNodes[1].innerText = 'X'
        } else {
            this.childNodes[1].innerText = 'O'
        }
        turns += 1

        if(turns > 5){
            var a1 = document.querySelector(".A1").childNodes[1].innerText;
            var a2 = document.querySelector(".A2").childNodes[1].innerText;
            var a3 = document.querySelector(".A3").childNodes[1].innerText;
            var b1 = document.querySelector(".B1").childNodes[1].innerText;
            var b2 = document.querySelector(".B2").childNodes[1].innerText;
            var b3 = document.querySelector(".B3").childNodes[1].innerText;
            var c1 = document.querySelector(".C1").childNodes[1].innerText;
            var c2 = document.querySelector(".C2").childNodes[1].innerText;
            var c3 = document.querySelector(".C3").childNodes[1].innerText;

            if((a1===a2&&a2===a3) ||(b1===b2&&b2===b3)||(c1===c2&&c2===c3)||(a1===b1&&b1===c1)||(a2===b2&&b2===c2)||(a3===b3&&b3===c3)||(a1===b2&&b2===c3)||(a3===b2&&b2===c1)){
                //set you won text
            document.querySelector("h2").innerText="You won!"
            }
        }
    }
}

