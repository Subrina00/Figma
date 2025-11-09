    // const ctx = document.querySelector('#chart').getContext('2d');

    // new Chart(ctx, {
    //   type: 'bar',
    //   data: {
    //     labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    //     datasets: [{
    //       label: 'Amount ($)',
    //       data: [1700, 1000, 1200, 1500, 2450, 1600, 1600],
    //       backgroundColor: [
    //         '#E0F0E5', '#E0F0E5', '#E0F0E5', '#E0F0E5', '#E0F0E5', '#E0F0E5', '#E0F0E5'
    //       ],
    //       borderRadius: 1,
    //       hoverBackgroundColor: '#0F4E23'
    //     }]
    //   },
    //   options: {
    //     responsive: true,
       
    //   },
    //   scales: {
    //     y: {
    //         display: false
    //       }
    //   }
    // });





    const ctx = document.querySelector('#chart').getContext('2d');

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    datasets: [{
      label: 'Amount ($)',
      data: [1700, 1000, 1200, 1500, 2450, 1600, 1600],
      backgroundColor: [
        '#E0F0E5', '#E0F0E5', '#E0F0E5', '#E0F0E5', '#E0F0E5', '#E0F0E5', '#E0F0E5'
      ],
      borderRadius: 1,
      hoverBackgroundColor: '#0F4E23'
    }]
  },
  options: {
    responsive: true,
    scales: {
      y: {
        display: false 
      },
      x: {
        grid: { display: false } 
      }
    },
    plugins: {
      legend: { display: false }
    }
  }
});



const menuBtn = document.getElementById('menuBtn');
const navMenu = document.getElementById('navMenu');

menuBtn.addEventListener('click', () => {
  navMenu.classList.toggle('hidden');
});
