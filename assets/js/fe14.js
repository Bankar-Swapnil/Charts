function setval(){


    var oilCanvas = document.getElementById("oilChart");
    var Titel = document.getElementById("Titel").value;

  var duc = document.getElementById("input").value;
  var duc2 = document.getElementById("input2").value;
  var duc3 = document.getElementById("input3").value;
  var duc4 = document.getElementById("input4").value;

  Chart.defaults.font.family = "Lato";
  Chart.defaults.font.size = 15;
  Chart.defaults.color = "black";

  let speedData = {
    labels: ["0s", "1", "2", "3"],
    datasets: [{
      label: Titel,
      data: [duc,duc2,duc3,duc4],
      tension: 0.4,
      cubicInterpolationMode: 'monotone',
      fill: false,
      borderColor: '#E64A19',
      backgroundColor: 'transparent',
      borderDash: [20, 10, 60, 10],
      pointBorderColor: '#E64A19',
      pointBackgroundColor: '#FFA726',
      pointRadius: 5,
      pointHoverRadius: 10,
      pointHitRadius: 30,
      pointBorderWidth: 4,
      pointStyle: 'rectRounded'
    }]
  };
  

 
  if (Chart.getChart("oilChart")){
    Chart.getChart("oilChart").destroy();
  }
  var radarChart = new Chart(oilCanvas, {
    type: 'line',
    data: speedData
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


