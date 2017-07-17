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

var labels = ['Competentie1', 'Competentie2', 'Competentie3', 'Competentie4', 'Competentie5',
  'Competentie6', 'Competentie7', 'Competentie8'
];

var datasets = [{
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
    label: "Google",
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
    label: "Netflix",
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
    label: "Youtube",
    backgroundColor: 'rgba(244, 67, 54, 0.5)',
    borderColor: "rgba(244, 67, 54, 1)",
    radius: 5,
    pointBackgroundColor: 'rgba(244, 67, 54, 1)',
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
    label: "TamTam",
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
    label: "Digital-Engineer",
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
    label: "albert-hein",
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
    label: "material",
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
    label: "nos-journaal",
    backgroundColor: 'rgba(158,158,158, 0.5)',
    borderColor: "rgba(158,158,158, 1)",
    radius: 5,
    pointBackgroundColor: 'rgba(158,158,158, 1)',
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
    label: "dribbble",
    backgroundColor: 'rgba(132,255,255, 0.5)',
    borderColor: "rgba(132,255,255, 1)",
    radius: 5,
    pointBackgroundColor: 'rgba(132,255,255, 1)',
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
  console.log(bedrijfNaam);
  let checkbox = document.querySelector('#' + bedrijfNaam + " input").checked;
  let checkboxIndicator = document.querySelector('#' + bedrijfNaam + " span");
  let lowestIndex = 0;
  let index = findCompany(bedrijfNaam);

  if (index >= lowestIndex) {
    if (checkbox == false) {
      let newData = datasets[index];
      myRadarChart.data.datasets.push(newData);
      myRadarChart.update();
      checkboxIndicator.style.backgroundColor = datasets[index].backgroundColor;
      checkboxIndicator.classList.remove('inactive');
    }

    else if(checkbox == true) {
      removeData(bedrijfNaam, index);
    }
  }
};

//------------------------Remove data---------------------------
function removeData(bedrijfNaam, index) {
  console.log(myRadarChart.data);
  console.log(myRadarChart.data.datasets)
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
document.querySelectorAll('.bedrijven ul li').forEach(
  function(item, index, arr) {
    item.addEventListener('mouseup', addData)
  }, this);
