var originalDataSets = [{
  label: 'Total',
  backgroundColor: '#37a2eb',
  borderColor: '#37a2eb',
  data: [17, 13, 26, 18, 11, 20, 40, 69, 50, 83, 10]
}];

var copyOfOringin = [{
  label: 'Total',
  backgroundColor: '#37a2eb',
  borderColor: '#37a2eb',
  data: [17, 13, 26, 18, 11, 20, 40, 69, 50, 83, 10]
}];

var barChartData = {
  labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'I Don\'t Know'],
  datasets: []
};



var ctx = document.getElementById('barChart').getContext('2d');
var font_bar_chart = new Chart(ctx, {
  // The type of chart we want to create
  type: 'bar',

  // The data for our dataset
  data: barChartData,

  // Configuration options go here
  options: {
    legend: {
      display: true
    },
    title: {
      display: true,
      text: 'Scores',
      fontSize: 18
    },
    maintainAspectRatio: false,
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
        },
        gridLines: {
          display: false
        },
      }],
      xAxes: [{
        ticks: {
          stepSize: 100
        }
      }],
    },
    plugins: {
      datalabels: {
        align: 'end',
        anchor: 'end',
        backgroundColor: function (context) {
          return context.dataset.backgroundColor;
        },
        borderRadius: 4,
        color: 'white',
        formatter: Math.round
      }
    }
  }
});


var ctx = document.getElementById('pieChart').getContext('2d');

var back_pie_chart = new Chart(ctx, {
  // The type of chart we want to create
  type: 'doughnut',

  // The data for our dataset
  data: {
    datasets: [{
      data: [(148/279)*100, (48/68)*100, (6/10)*100],
      backgroundColor: ['#ff6383', '#37a2eb', '#ffcd56']
    },{
      data: [(47/279)*100, (7/68)*100, (2/10)*100],
      backgroundColor: ['#ff6383', '#37a2eb', '#ffcd56']
    }],

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: [
      'Female',
      'Male',
      'Others'
    ]
  },

  // Configuration options go here
  options: {
    title: {
      display: true,
      text: 'Positive vs. Negative',
      fontSize: 18
    },
    plugins: {
      datalabels: false
    }
  }
});


var ctx = document.getElementById('radarChart').getContext('2d');
var back_radar_chart = new Chart(ctx, {
  // The type of chart we want to create
  type: 'radar',

  // The data for our dataset
  data: {
    datasets: [{
      label: 'Area',
      data: [91, 73, 62, 42, 37, 24, 15, 13],
      backgroundColor: "rgba(255, 205, 86, 0.6)"
    }],

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: [
      'Customer Success',
      'Operations',
      'Product',
      'OOCTO',
      'Marketing and Pipeline Operations',
      'athenaPeople',
      'Sales',
      'athenaFinance'
    ]
  },

  // Configuration options go here
  options: {
    legend: {
      display: false
    },
    title: {
      display: true,
      text: 'Area',
      fontSize: 18
    },
    plugins: {
      datalabels: false
    }
  }
});


// look into genders 
function lookUpGenders() {
  var newDataSets_Genders = [{
    label: 'Female',
    backgroundColor: '#ff6383',
    borderColor: '#ff6383',
    data: [16, 9, 22, 16, 9, 19, 31, 52, 42, 54, 9]
  },{
    label: 'Male',
    backgroundColor: '#ffcd56',
    borderColor: '#ffcd56',
    data: [1, 3, 3, 1, 2, 1, 9, 17, 7, 24, 0]
  },{
    label: 'Others',
    backgroundColor: '#37a2eb',
    borderColor: '#37a2eb',
    data: [0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 5, 1]
  }];


  while (barChartData.datasets.length > 0) {
    barChartData.datasets.pop();
  }
  var dataIndex = 0;
  while (dataIndex < newDataSets_Genders.length) {
    barChartData.datasets.push(newDataSets_Genders[dataIndex++]);
  }
  font_bar_chart.update();
}

// look into areas
function lookUpAreas() {
  var newDataSet_Area = [{
    label: 'Customer Success',
    backgroundColor: '#ff6383',
    borderColor: '#ff6383',
    data: [6, 3, 4, 4, 1, 3, 7, 22, 14, 27, 0]
  }, {
    label: 'Marketing and Pipeline Operations',
    backgroundColor: '#ffcd56',
    borderColor: '#ffcd56',
    data: [2, 2, 6, 0, 1, 2, 2, 5, 5, 9, 4, 1]
  }, {
    label: 'OOCTO',
    backgroundColor: '#37a2eb',
    borderColor: '#37a2eb',
    data: [0, 2, 4, 3, 0, 3, 7, 11, 6, 6, 99]
  }, {
    label: 'Operations',
    backgroundColor: '#3fb4a2',
    borderColor: '#3fb4a2',
    data: [1, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  }, {
    label: 'Product',
    backgroundColor: '#c38d9d',
    borderColor: '#c38d9d',
    data: [0, 0, 3, 2, 5, 5, 7, 11, 8, 10, 3]
  }, {
    label: 'Sales',
    backgroundColor: '#e27d5f',
    borderColor: '#e27d5f',
    data: [0, 3, 2, 0, 2, 2, 0, 2, 2, 2, 0]
  }];


  while (barChartData.datasets.length > 0) {
    barChartData.datasets.pop();
  }
  var dataIndex = 0;
  while (dataIndex < newDataSet_Area.length) {
    barChartData.datasets.push(newDataSet_Area[dataIndex++]);
  }
  font_bar_chart.update();
}

// look into dimensions
function lookUpDimensions() {
  var newDataSet_Dimension = [
    {
      label: 'Workplace Flexibility',
      backgroundColor: '#ffcd56',
      borderColor: '#ffcd56',
      data: [11, 12, 23, 15, 8, 19, 37, 53, 41, 72, 9]
    }
  ];

  while (barChartData.datasets.length > 0) {
    barChartData.datasets.pop();
  }
  var dataIndex = 0;
  while (dataIndex < newDataSet_Dimension.length) {
    barChartData.datasets.push(newDataSet_Dimension[dataIndex++]);
  }
  font_bar_chart.update();
}

// get back to total data
function totalData() {
  while (barChartData.datasets.length > 0) {
    barChartData.datasets.pop();
  }

  console.log(originalDataSets);

  var dataIndex = 0;
  while (dataIndex < copyOfOringin.length) {
    barChartData.datasets.push(copyOfOringin[dataIndex++]);
  }

  font_bar_chart.update();
}




