//variable
var ctx = document.getElementById("myChart");
Chart.defaults.global.defaultFontFamily = "Roboto";
Chart.defaults.global.defaultFontSize = 18;
Chart.defaults.global.deFaultColor = 'black';
Chart.defaults.global.animation = {
  // Animation easing to use
    easing: 'easeInOutQuart',
    duration: 1200
}

function dataGenerator() {
  var randomNumber = Math.floor(Math.random() * 10) + 1;
  console.log(randomNumber);
  return randomNumber;
}

//Chart options
var options = {
  responsive: true,
  maintainAspectRatio: true,
  legend: {
    display: false
  },
  scale: {
    ticks: {
      fontColor: "red",
      fontSize: 10,
      beginAtZero: true,
      min: 0,
      max: 10
    }
  },

};




//Create interval for random DATA
setInterval(function() {
  //-----------------------------------------------------

  //Data for the chart
  var bedrijfData = {
    labels: ['Competentie1', 'Competentie2', 'Competentie3', 'Competentie4', 'Competentie5',
      'Competentie6', 'Competentie7', 'Competentie8'
    ],
    //Eerste bedrijf
    datasets: [{
        label: "Bedrijf",
        backgroundColor: 'rgba(255, 64, 129, 0.5)',
        borderColor: "rgba(255, 64, 129, 1)",
        radius: 5,
        pointBackgroundColor: 'rgba(255, 64, 129, 1)',
        data: [ //Voor de test worden er random data gegenereerd
          dataGenerator(),
          dataGenerator(),
          dataGenerator(),
          dataGenerator(),
          dataGenerator(),
          dataGenerator(),
          dataGenerator(),
          dataGenerator(),
        ]
      },
      {
        label: "Bedrijf2",
        backgroundColor: 'rgba(67, 228, 185, 0.5)',
        borderColor: "rgba(67, 228, 185, 1)",
        radius: 5,
        pointBackgroundColor: 'rgba(67, 228, 185, 1)',
        data: [ //Voor de test worden er random data gegenereerd
          dataGenerator(),
          dataGenerator(),
          dataGenerator(),
          dataGenerator(),
          dataGenerator(),
          dataGenerator(),
          dataGenerator(),
          dataGenerator(),
        ]
      },
      {
        label: "Bedrijf3",
        backgroundColor: 'rgba(255,87,34, 0.5)',
        borderColor: "rgba(255,87,34, 1)",
        radius: 5,
        pointBackgroundColor: 'rgba(255,87,34, 1)',
        data: [ //Voor de test worden er random data gegenereerd
          dataGenerator(),
          dataGenerator(),
          dataGenerator(),
          dataGenerator(),
          dataGenerator(),
          dataGenerator(),
          dataGenerator(),
          dataGenerator(),
        ]
      }
    ]};


  var myRadarChart = new Chart(ctx, {
    type: 'radar',
    data: bedrijfData,
    options: options
  });

  //-------------------------------------------------------------
}, 1500);



function addData(chart, label, data) {
    chart.data.labels.push('test');
    chart.data.datasets.forEach((dataset) => {
        dataset.data.push(dataGenerator());
    });
    chart.update();
}
