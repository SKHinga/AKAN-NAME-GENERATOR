var submit = document.getElementById('submit');
submit.onclick=()=>{
  var showDate =document.getElementById('display');
  var gender = document.doc.gender.value;
  var birthday = document.getElementById('the-date').value;
  var theDate = new Date(birthday);
  var theDay = theDate.getDay();
  var femaleAkanNames =['Akosau', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama'];
  var maleAkanNames =['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame'];
  qn.style.display ='none';
  turn.style.display ='none';
  if (gender===''){
    alert ('Please select Gender')
  } else if (birthday===''){
    alert ('Please select your birthday')
  } else{
    if (gender==='female'){
      showDate.innerHTML = `<h3><h3>Wow! Born on a <strong></strong>, your <span>Akan</span> name is <em>${femaleAkanNames[theDay]}</em></h3>`;
    }
    else{
      showDate.innerHTML = `<h3>Wow! Born on a <strong></strong>, your <span>Akan</span> name is <em>${maleAkanNames[theDay]}</em></h3>`;
    }
  }
  var specific = document.querySelector('strong');
  if (theDay===0){
    specific.textContent = 'Sunday'
  } else if (theDay===1){
    specific.textContent = 'Monday'
  } else if (theDay===2){
    specific.textContent = 'Tuesday'
  } else if (theDay===3){
    specific.textContent = 'Wednesday'
  } else if (theDay===4){
    specific.textContent = 'Thursday'
  } else if (theDay===5){
    specific.textContent = 'Friday'
  } else{
    specific.textContent = 'Saturday'
  }
}