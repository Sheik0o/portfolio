consoleText(['Bonjour,', 'Je suis Floriane Petibon', "Etudiante en deuxieme année d'un BUT Informatique."], 'text',['tomato','palegreen','lightsalmon']);

function consoleText(words, id, colors) {

    if (colors === undefined) colors = ['#fff'];
    var visible = true;
    var con = document.getElementById('console');
    var letterCount = 1;
    var x = 1;
    var waiting = false;
    var target = document.getElementById(id)
    target.setAttribute('style', 'color:' + colors[0])
    window.setInterval(function() {
  
      if (letterCount === 0 && waiting === false) {

        waiting = true;
        target.innerHTML = words[0].substring(0, letterCount)
        window.setTimeout(function() {
          var usedColor = colors.shift();
          colors.push(usedColor);
          var usedWord = words.shift();
          words.push(usedWord);
          x = 1;
          target.setAttribute('style', 'color:' + colors[0])
          letterCount += x;
          waiting = false;
        }, 1000)

      } else if (letterCount === words[0].length + 1 && waiting === false) {

        waiting = true;
        window.setTimeout(function() {
          x = -1;
          letterCount += x;
          waiting = false;
        }, 1000)
      } else if (waiting === false) {
        target.innerHTML = words[0].substring(0, letterCount)
        letterCount += x;
      }

    }, 120)

    window.setInterval(function() {

      if (visible === true) {
        con.className = 'console-underscore hidden'
        visible = false;
  
      } else {
        con.className = 'console-underscore'
  
        visible = true;
      }

    }, 400)
}

Array.from(document.querySelectorAll('.tabs')).forEach((tab_container, TabID) => {
    const registers = tab_container.querySelector('.tab-registers');
    const bodies = tab_container.querySelector('.tab-bodies');
  
    Array.from(registers.children).forEach((el, i) => {
      el.setAttribute('aria-controls', `${TabID}_${i}`)
      bodies.children[i]?.setAttribute('id', `${TabID}_${i}`)
    
      el.addEventListener('click', (ev) => {
        let activeRegister = registers.querySelector('.active-tab');
        activeRegister.classList.remove('active-tab')
        activeRegister = el;
        activeRegister.classList.add('active-tab')
        changeBody(registers, bodies, activeRegister)
      })
  })
})


function changeBody(registers, bodies, activeRegister) {
    Array.from(registers.children).forEach((el, i) => {
        if (bodies.children[i]) {
            bodies.children[i].style.display = el == activeRegister ? 'block' : 'none'
        }

        el.setAttribute('aria-expanded', el == activeRegister ? 'true' : 'false')
    })
}

