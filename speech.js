
 // All DOM content 
var input,btn,res,googleQuery,loading 

input = document.querySelector('#txt')
btn = document.querySelector('button')
res = document.querySelector('#res')
googleQuery = 'https://www.google.com/search?sxsrf=AB5stBgZnlc9_oic2fwmWG_OO9PEi78euw%3A1688601572480&oq=&aqs=mobile-gws-lite.0.35i39l5...5&source=hp&q='

loading = document.querySelectorAll('.loading div')


// Recognition Section 
 let recog = new window.webkitSpeechRecognition || new SpeechRecognition()
  
  recog.continous = true
  
  recog.onstart = () => {
       if (navigator.onLine == false) {
         res.innerText = 'Data Connection Needed'
       }else{
         res.innerText = 'Speak Now'
            // Load Animation
     
     loading.forEach((val, ind) => {
       setInterval(() => {
     
         loading[ind].style.visibility = 'visible'
         loading[ind].style.opacity = '1'
       
         console.log(loading[ind].classList)
     
     
       }, ind*10)
     })
       }
    
  }
  
  recog.onresult = async (event) => {
    var content = event.resultIndex
     
     
    var transcript = event.results[content][0].transcript
    
     var out = input.value
      out = transcript
  
  console.log(out)
   
   var query = googleQuery.concat(out)
    console.log(query)

   // Load Animation

   loading.forEach((val, ind) => {
     setInterval(() => {

       loading[ind].style.visibility = 'visible'
       loading[ind].style.opacity = '1'

       console.log(loading[ind].classList)


     }, ind * 10)
   })
   
   var info = 'Your search is on the way'
   var speechUttr = await
 new window.SpeechSynthesisUtterance(info)

window.speechSynthesis.speak(speechUttr)

   location.href = query
   
 window.speechSynthesis.speak(new window.SpeechSynthesisUtterance('completed'))
  
  }
  
 recog.onspeechend = () => {
    res.innerText = 'Getting results'
    
  }
   
  btn.onclick = () => {
     console.log('Speech Started')
    recog.start()
    if(navigator.onLine == false){
      res.innerText = 'Data Connection Needed'
    }
  }
  