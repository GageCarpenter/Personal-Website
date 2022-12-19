/*=======================
Hamburger
=========================*/
const menuBtn = document.querySelector('.menu-btn');
const showcase = document.querySelector('.showcase');

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('active');
  showcase.classList.toggle('active');

})

/*=======================
Type writer in index.html
=========================*/
const visible = document.getElementById('typewriter')
const items = ["I'm Gage", "Nice to meet you", "I'm a developer", "View my projects"]
let word = []
let erase = false
let Written = false
let a = 0
let b = 0 
function loop () {
Written = false
visible.innerHTML = word.join('')

   if (a < items.length) {
        if (!erase && b <= items[a].length) {
        word.push(items[a][b])
        b++
        visible.innerHTML = word.join('')
        }
 
    if(erase && b <= items[a].length) {
        word.pop(items[a][b])
        b--
        visible.innerHTML = word.join('')
        }
 
    if (b === items[a].length) {
        Written = true
        erase = true
        }
 
    if (erase && b === 0) {
        word = []
        erase = false
        a++
            if (a === items.length) {
                a = 0
                }
            }
        }
const accelerator = Math.random() * (100) + 50
const constant = Math.random() * (100) + 20
const time = Written ? 3000 : erase ? accelerator : constant
setTimeout(loop, time)
}
 
loop()

/*=======================
Scoreboard
=========================*/
const scoreboard = document.querySelectorAll('.counter');
const Acceleration = 10000; 
scoreboard.forEach(counter => {
	const updateCount = () => {
		const target = +counter.getAttribute('data-target');
		const count = +counter.innerText;
		const inc = target / Acceleration;
		if (count < target) {
			counter.innerText = count + inc;
			setTimeout(updateCount, 1);
		} else {
			counter.innerText = target;
		}
	};
	updateCount();
});

/*=======================
Create a Sticky Header for mobile
=========================*/
window.onscroll = function() {myFunction()};
const header = document.getElementById("stick");
const sticky = header.offsetTop;
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}