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

/*the catagorie of the chart*/
var labels = ['Competentie1', 'Competentie2', 'Competentie3', 'Competentie4', 'Competentie5',
  'Competentie6', 'Competentie7', 'Competentie8'
];

/*data for the chart*/
var datasets = [{
    label: "RDM-Makerspace",
    backgroundColor: 'rgba(244,67,54, 0.5)',
    borderColor: "rgba(244,67,54, 1)",
    radius: 5,
    pointBackgroundColor: 'rgba(244,67,54, 1)',
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
    label: "KPN",
    backgroundColor: 'rgba(233,30,99, 0.5)',
    borderColor: "rgba(233,30,99, 1)",
    radius: 5,
    pointBackgroundColor: 'rgba(233,30,99, 1)',
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
    label: "Accenture",
    backgroundColor: 'rgba(156,39,176, 0.5)',
    borderColor: "rgba(156,39,176, 1)",
    radius: 5,
    pointBackgroundColor: 'rgba(156,39,176, 1)',
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
    label: "Premium",
    backgroundColor: 'rgba(103,58,183, 0.5)',
    borderColor: "rgba(103,58,183, 1)",
    radius: 5,
    pointBackgroundColor: 'rgba(103,58,183, 1)',
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
    label: "Alliander",
    backgroundColor: 'rgba(63,81,181, 0.5)',
    borderColor: "rgba(63,81,181, 1)",
    radius: 5,
    pointBackgroundColor: 'rgba(63,81,181, 1)',
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
    label: "IBM",
    backgroundColor: 'rgba(33,150,243, 0.5)',
    borderColor: "rgba(33,150,243, 1)",
    radius: 5,
    pointBackgroundColor: 'rgba(33,150,243, 1)',
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
    label: "Prodapt-Consulting",
    backgroundColor: 'rgba(3,169,244, 0.5)',
    borderColor: "rgba(3,169,244, 1)",
    radius: 5,
    pointBackgroundColor: 'rgba(3,169,244, 1)',
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
    label: "Quistor",
    backgroundColor: 'rgba(0,188,212, 0.5)',
    borderColor: "rgba(0,188,212, 1)",
    radius: 5,
    pointBackgroundColor: 'rgba(0,188,212, 1)',
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
    label: "Arlanet",
    backgroundColor: 'rgba(0,150,136, 0.5)',
    borderColor: "rgba(0,150,136, 1)",
    radius: 5,
    pointBackgroundColor: 'rgba(0,150,136, 1)',
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
    label: "sTn-Telefact",
    backgroundColor: 'rgba(76,175,80, 0.5)',
    borderColor: "rgba(76,175,80, 1)",
    radius: 5,
    pointBackgroundColor: 'rgba(76,175,80, 1)',
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
    label: "Batenburg",
    backgroundColor: 'rgba(139,195,74, 0.5)',
    borderColor: "rgba(139,195,74, 1)",
    radius: 5,
    pointBackgroundColor: 'rgba(139,195,74, 1)',
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
    label: "Unreason",
    backgroundColor: 'rgba(205,220,57, 0.5)',
    borderColor: "rgba(205,220,57, 1)",
    radius: 5,
    pointBackgroundColor: 'rgba(205,220,57, 1)',
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
    label: "Mansystems",
    backgroundColor: 'rgba(255,235,59, 0.5)',
    borderColor: "rgba(255,235,59, 1)",
    radius: 5,
    pointBackgroundColor: 'rgba(255,235,59, 1)',
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
    label: "Redsalt",
    backgroundColor: 'rgba(255,193,7, 0.5)',
    borderColor: "rgba(255,193,7, 1)",
    radius: 5,
    pointBackgroundColor: 'rgba(255,193,7, 1)',
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
    label: "Ziut",
    backgroundColor: 'rgba(255,152,0, 0.5)',
    borderColor: "rgba(255,152,0, 1)",
    radius: 5,
    pointBackgroundColor: 'rgba(255,152,0, 1)',
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
    label: "Conneqtech",
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
  },
  {
    label: "Conrad",
    backgroundColor: 'rgba(121,85,72, 0.5)',
    borderColor: "rgba(121,85,72, 1)",
    radius: 5,
    pointBackgroundColor: 'rgba(121,85,72, 1)',
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
];

//Create the data for companies
var bedrijfData = {
  labels: labels,
  datasets: [],
};

//Random data generator
function dataGenerator() {
  var randomNumber = Math.floor(Math.random() * 10) + 1;
  return randomNumber;
}

//CREATE CHART
var myRadarChart = new Chart(ctx, {
  type: 'radar',
  data: bedrijfData,
  options: options
});

//Controle if the company exist
function findCompany(bedrijfNaam) {
  let foundIndex;
  let unneededvar = datasets.map(function(obj, index) {

    if (obj.label.toUpperCase() == bedrijfNaam.toUpperCase() && obj.label !== '') {
      foundIndex = index;
      return foundIndex;
    }
  });
  return foundIndex;
}

//Add Data to Chart
function addData() {
  let bedrijfNaam = this.id;
  let index = findCompany(bedrijfNaam);//Check if the company exist
  let checkbox = document.querySelector('#' + bedrijfNaam + " input").checked;
  let checkboxIndicator = document.querySelector('#' + bedrijfNaam + " span");
  let lowestIndex = 0;


  if (index >= lowestIndex) {
    if (checkbox == false) {
      let newData = datasets[index];
      myRadarChart.data.datasets.push(newData);
      myRadarChart.update();
      checkboxIndicator.style.backgroundColor = datasets[index].backgroundColor;
      checkboxIndicator.classList.remove('inactive');
    } else if (checkbox == true) {
      removeData(bedrijfNaam, index);
    }
  }
};

//------------------------Remove data---------------------------
function removeData(bedrijfNaam, index) {
  let foundIndex;
  let unneededvar = myRadarChart.data.datasets.map(function(obj, index) {
    if (obj.label.toUpperCase() == bedrijfNaam.toUpperCase() && obj.label !== '') {
      foundIndex = index;
      myRadarChart.data.datasets.splice(index, index + 1);
      myRadarChart.update();
      checkboxIndicator = document.querySelector('#' + bedrijfNaam + " span").classList.add('inactive');
    }
  });
};

//---------------------------Event Listener -------------------------------
document.querySelectorAll('.bedrijven__bedrijven-selectie li').forEach(
  function(item, index, arr) {
    item.addEventListener('mouseup', addData)
  }, this);
