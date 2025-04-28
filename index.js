const type_writer = document.querySelector('#entry')
let recordedString = ''
addEventListener('keydown', (e) => {
   recordedString += `<span class='anim'>${e.key}</span>`
    recordedString.length = 0
   if (/^[a-zA-Z]$/.test(e.key)) { 
      recordedString.length++
      const audioCP = new Audio('https://www.fesliyanstudios.com/play-mp3/387')
      type_writer.innerHTML = recordedString
      console.log(type_writer);
      audioCP.play()
      // animation
      const animation = document.querySelectorAll('.anim')
      const animationPos = animation.forEach(eachEl => {
         eachEl.getBoundingClientRect().top
      })
         animation.forEach(pos => {
            pos.classList.add('anim_appeared')
         })
   }
   if (e.key === 'Backspace') {
      const spans = type_writer.querySelectorAll('.anim');
      if (spans.length > 0) {
         const lastSpan = spans[spans.length - 1];
         lastSpan.remove();
         recordedString = type_writer.innerHTML;
         const audioCP = new Audio('https://www.fesliyanstudios.com/play-mp3/387')
audioCP.play()
      }
      return;
   }

   if (!/^[a-zA-Z]$/.test(e.key)) {
      recordedString.length = 0
      const animation = document.querySelector('#entry')
    
        animation.classList.add('anim_appeared')
      type_writer.innerHTML = 'Incorrect Key(s)'
      return
   }

   console.log(recordedString.length);
   if (recordedString.length > 405) {
      type_writer.innerHTML = `<img class='imageX' src = 'https://www.freeiconspng.com/uploads/orange-error-icon-0.png' />`
      const el = document.createElement('span')
      type_writer.style.flexDirection = 'column'
      el.innerText = 'Maximum Characters reached!!!'
      el.className = 'flexer'
      type_writer.appendChild(el)
   }
})
