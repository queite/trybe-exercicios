const title = document.querySelector('#header-container');
title.style.backgroundColor = 'rgb(0, 176, 105)';

const emergency = document.querySelectorAll('.emergency-tasks');
emergency[0].style.backgroundColor = '#E58470';

const noEmergency = document.querySelectorAll('.no-emergency-tasks');
noEmergency[0].style.backgroundColor = '#F6EB99';

const emergencyTitle = document.querySelectorAll('.emergency-tasks h3');
for (let i = 0; i <emergencyTitle.length; i += 1) {
  emergencyTitle[i].style.backgroundColor = '#4F058C';
}

const noEmergencyTitle = document.querySelectorAll('.no-emergency-tasks h3');
for (let i = 0; i <noEmergencyTitle.length; i += 1) {
  noEmergencyTitle[i].style.backgroundColor = '#2B2620';
}

const footer = document.querySelector('#footer-container');
footer.style.backgroundColor = 'rgb(0, 53, 51)';