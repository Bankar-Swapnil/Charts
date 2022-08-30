



function setval(){


    var oilCanvas = document.getElementById("oilChart");
    
    var Titel = document.getElementById("Titel").value;


  var label1 = document.getElementById("label1").value;
  var label2 = document.getElementById("label2").value;
  var label3 = document.getElementById("label3").value;
  var label4 = document.getElementById("label4").value;


  var duc = document.getElementById("input").value;
  var duc2 = document.getElementById("input2").value;
  var duc3 = document.getElementById("input3").value;
  var duc4 = document.getElementById("input4").value;



  Chart.defaults.font.family = "Lato";
  Chart.defaults.font.size = 22;
  Chart.defaults.color = "black";

  let densityData = {
    label: Titel,
    data: [duc,duc2,duc3,duc4]
  };

  if (Chart.getChart("oilChart")){
    Chart.getChart("oilChart").destroy();
  }
  var radarChart = new Chart(oilCanvas, {
    type: 'bar',
  data: {
    labels: [label1,label2,label3,label4],
    datasets: [densityData]
  }
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

