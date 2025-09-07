document.querySelector('.mobile-menu-btn').addEventListener('click', function() {
  document.querySelector('nav').classList.toggle('active');
});

const progressData = [30, 60, 80, 90, 70, 40, 20];
const chartBars = document.querySelectorAll('.chart-bar');

chartBars.forEach((bar, index) => {
  bar.style.height = progressData[index] + '%';
});

document.addEventListener('DOMContentLoaded', function() {
  console.log('Workout data loaded');
});