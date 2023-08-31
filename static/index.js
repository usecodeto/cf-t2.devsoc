const yes = document.querySelector('.btn-yes')
const no = document.querySelector('.btn-no')

yes.addEventListener('click' , ()=>{
  console.log('yes btn clicked')
  document.querySelector('.form-box').style.visibility = 'visible';
  document.querySelector('.question').style.display= 'none';
  document.querySelector('.denyPrompt').style.display= 'none';
})
no.addEventListener('click' , ()=>{
  // console.log('yes btn clicked')
  document.querySelector('.denyPrompt').style.visibility = 'visible';
  document.querySelector('.question').style.display= 'none';
})

