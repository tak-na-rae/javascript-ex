window.addEventListener('load',()=>{
  let imgs = document.querySelectorAll('img');
  // for(let i = 0; i < imgs.length; i++){ //ES5
  //   imgs[i].addEventListener('click',()=>{
  //     let n = Math.ceil(Math.random() * 20);
  //     imgs[i].src = 'images/240927_p' + n + '.jpg';
  //   });

    for(let img of imgs){ //ES6
      img.addEventListener('click',()=>{
        let n = Math.ceil(Math.random() * 20);
        img.src = `images/240927_p${n}.jpg`;
      })
    }
      
        
      
      
    
  
  })