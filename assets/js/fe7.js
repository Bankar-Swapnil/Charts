function setval(){


    var oilCanvas = document.getElementById("oilChart");
    
    var Titel = document.getElementById("Titel").value;
  var Titel1 = document.getElementById("Titel2").value;
  var Titel2 = document.getElementById("Titel3").value;

  var label1 = document.getElementById("label1").value;
  var label2 = document.getElementById("label2").value;
  var label3 = document.getElementById("label3").value;
  var label4 = document.getElementById("label4").value;
  var label5 = document.getElementById("label5").value;

  var duc = document.getElementById("input").value;
  var duc2 = document.getElementById("input2").value;
  var duc3 = document.getElementById("input3").value;
  var duc4 = document.getElementById("input4").value;
  var duc5 = document.getElementById("input5").value;

  var ducc = document.getElementById("inputt").value;
  var ducc2 = document.getElementById("inputt2").value;
  var ducc3 = document.getElementById("inputt3").value;
  var ducc4 = document.getElementById("inputt4").value;
  var ducc5 = document.getElementById("inputt5").value;

  var color1 = document.getElementById("favcolor1").value;
  var color2 = document.getElementById("favcolor2").value;


  Chart.defaults.font.family = "Lato";
  Chart.defaults.font.size = 22;
  Chart.defaults.color = "black";

  var marksData = {
    labels: [label1,label2,label3,label4,label5],
    datasets: [{
      label: Titel1,
      backgroundColor: "transparent",
      borderColor: color1,
      fill: false,
      pointRadius: 6,
      pointHitRadius: 12,
      pointBorderWidth: 3,
      pointBackgroundColor: "pink",
      pointBorderColor: "black",
      pointHoverRadius: 10,
      pointStyle: "triangle",
      data: [duc,duc2,duc3,duc4,duc5]
    }, {
      label: Titel2,
      backgroundColor: "transparent",
      borderColor: color2,
      fill: false,
      pointRadius: 6,
      pointHitRadius: 12,
      pointBorderWidth: 3,
      pointBackgroundColor: "lightblue",
      pointBorderColor: "black",
      pointHoverRadius: 10,
      pointStyle: "rect",
      data: [ducc,ducc2,ducc3,ducc4,ducc5]
    },
    ]
  };

  var chartOptions = {
    plugins: {
      title: {
        display: true,
        text: Titel,
        position: "bottom"
      },
      legend: {
        position: "bottom",
        labels: {
          padding:  30
        }
      }
    },
    scales: {
      r: {
        max: 100,
        min: 30,
        ticks: {
          stepSize: 15,
          backdropColor: "orange",
          color: "white"
        },
        grid: {
          color: "black"
        },
        angleLines: {
            color: "gray"
        },
        pointLabels: {
          font: {
            size: 20
          }
        }
      }
    }
  };

  if (Chart.getChart("oilChart")){
    Chart.getChart("oilChart").destroy();
  }
  var radarChart = new Chart(oilCanvas, {
    type: "radar",
    data: marksData,
    options: chartOptions
  });
}

const handleDownload = () => {
  let canvas1 = document.getElementsByTagName('canvas')[0]
    let dataURL = canvas1.toDataURL('image/png')
    console.log(canvas1)
    let a = document.createElement('a')
    a.href = dataURL
    a.download = 'Safeimagekit.png'
    a.click()
}







