//variable
var ctx = document.getElementById("myChart").getContext('2d');
Chart.defaults.global.defaultFontFamily = "Roboto";
Chart.defaults.global.defaultFontSize = 18;
Chart.defaults.global.deFaultColor = 'black';
Chart.defaults.global.animation = {
  // Animation easing to use
  easing: 'easeInOutQuart',
  duration: 1200
}
//Chart options
var options = {
  responsive: true,
  maintainAspectRatio: true,
  legend: {
    display: true
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

//Random data generator
function dataGenerator() {
  var randomNumber = Math.floor(Math.random() * 10) + 1;
  return randomNumber;
}

//Create interval for random DATA
/*setInterval(function() {*/
  //-----------------------------------------------------

  //Data for the chart
  var bedrijfData = {
    labels: ['Competentie1', 'Competentie2', 'Competentie3', 'Competentie4', 'Competentie5',
      'Competentie6', 'Competentie7', 'Competentie8'
    ],
    //Eerste bedrijf
    datasets: [{
        label: "Arlanet",
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
    ]
  };

//CREATE CHART
  var myRadarChart = new Chart(ctx, {
    type: 'radar',
    data: bedrijfData,
    options: options
  });

  //-------------------------------------------------------------
/*}, 1500);*/

//Controle if the company exist
function findCompany(bedrijfNaam){
  let foundIndex;
  let unneededvar = bedrijfData.datasets.map(function(obj, index) {
      if(obj.label == bedrijfNaam) {
          foundIndex = index;
          return true;
      }
  });

  return foundIndex;
}

//Add Data to Chart
function addData() {
  console.log(this);
  let bedrijfNaam = this.name;

  console.log('bedrijfNaam' + findCompany(bedrijfNaam));

  if(findCompany(bedrijfNaam)){
    console.log('gelukt');
  }

    let newData = {
      label: bedrijfData.datasets[1].label,
      backgroundColor: 'rgba(255,87,34, 0.5)',
      borderColor: "rgba(255,87,34, 1)",
      radius: 5,
      pointBackgroundColor: 'rgba(255,87,34, 1)',
      data: []
    };

    for (let i = 0; i < myRadarChart.data.labels.length; ++i){
      newData.data.push(dataGenerator());
    }

    myRadarChart.data.datasets.push(newData);
    myRadarChart.update();
  };









//---------------------------Event Listener -------------------------------
document.querySelectorAll('.bedrijven li').forEach(
  function(item, index, arr) {
      item.addEventListener('click', addData)
    }, this);
