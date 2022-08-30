function setval(){


    var oilCanvas = document.getElementById("oilChart");
    var Titel = document.getElementById("Titel").value;
  var Titel1 = document.getElementById("Titel2").value;

  var label1 = document.getElementById("label1").value;
  var label2 = document.getElementById("label2").value;
  var label3 = document.getElementById("label3").value;
  var label4 = document.getElementById("label4").value;


  var duc = document.getElementById("input").value;
  var duc2 = document.getElementById("input2").value;
  var duc3 = document.getElementById("input3").value;
  var duc4 = document.getElementById("input4").value;

  var ducc = document.getElementById("inputt").value;
  var ducc2 = document.getElementById("inputt2").value;
  var ducc3 = document.getElementById("inputt3").value;
  var ducc4 = document.getElementById("inputt4").value;

  var color1 = document.getElementById("favcolor1").value;
  var color2 = document.getElementById("favcolor2").value;


  Chart.defaults.font.family = "Lato";
  Chart.defaults.font.size = 15;
  Chart.defaults.color = "black";

  let gravityBars =color1 ;
  let densityBars = color2;
  
  let densityData = {
    label: Titel,
    data: [duc,duc2,duc3,duc4],
    backgroundColor: densityBars,
    yAxisID: "y-axis-density"
  };
  
  let gravityData = {
    label: Titel1,
    data: [ducc,ducc2,ducc3,ducc4],
    backgroundColor: gravityBars,
    yAxisID: "y-axis-gravity"
  };
  let planetData = {
    labels: [label1,label2,label3,label4 ],
    datasets: [densityData, gravityData]
  };
  
let chartOptions = {
    barPercentage: 1,
    categoryPercentage: 0.8,
    scales: {
      "y-axis-density": {
        grid: {
          color: densityBars,
          tickColor: densityBars,
          borderColor: densityBars
        },
        ticks: {
          color: densityBars
        },
        position: "left"
      },
      "y-axis-gravity": {
        grid: {
          color: gravityBars,
          tickColor: gravityBars,
          borderColor: gravityBars
        },
        ticks: {
          color: gravityBars
        },
        position: "right"
      }
    }
  };

 
  if (Chart.getChart("oilChart")){
    Chart.getChart("oilChart").destroy();
  }
  var radarChart = new Chart(oilCanvas, {
    type: "bar",
  data: planetData,
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



