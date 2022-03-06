var submit = document.getElementById('submit');
submit.onclick=()=>{
  var showDate =document.getElementById('display');
  var gender = document.doc.gender.value;
  var birthday = document.getElementById('the-date').value;
  var theDate = new Date(birthday);
  var theDay = theDate.getDay();
  var femaleAkanNames =['Akosau', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama'];
  var maleAkanNames =['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame'];
  if (gender===''){
    alert ('Please select Gender')
  } else if (birthday===''){
    alert ('Please select your birthday')
  } else{
    if (gender==='female'){
      showDate.innerHTML = `Wow! Your Akan name is ${femaleAkanNames[theDay]}`;
    }
    else{
      showDate.innerHTML = `Wow! Your Akan name is ${maleAkanNames[theDay]}`;
    }
  }
}