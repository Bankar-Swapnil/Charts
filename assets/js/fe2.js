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

  var color1 = document.getElementById("favcolor1").value;
  var color2 = document.getElementById("favcolor2").value;
  var color3 = document.getElementById("favcolor3").value;
  var color4 = document.getElementById("favcolor4").value;
  var color5 = document.getElementById("favcolor5").value;

  Chart.defaults.font.family = "Lato";
  Chart.defaults.font.size = 15;
  Chart.defaults.color = "black";

  var oilData = {
    labels: [label1,label2,label3,label4,label5],
    datasets: [
      {
        label:Titel,
        data: [duc,duc2,duc3,duc4,duc5],
        backgroundColor: [color1, color2, color3, color4, color5],
        borderColor: "black",
        borderWidth: 2
      }
    ]
  }
  var chartOptions = {
    indexAxis: 'x',
    scales: {
      x: {
        grid: {
          color: "#ccc",
          borderColor: "black",
        },
        ticks: {
            min: 0,
            max: duc5,
            stepSize: duc5/4
          },
          title: {
          display: true,
          text: Titel1,
          color: "black",
          font: {
            size: 15,
            lineHeight: 2
          }
        }
      },
      y: {
        grid: {
          color: "#ccc",
          borderColor: "black",
        },
        title: {
          display: true,
          text: Titel2,
          color: "black",
          font: {
            size: 15,
            lineHeight: 2
          }
        }
      }
    }
  };

  if (Chart.getChart("oilChart")){
    Chart.getChart("oilChart").destroy();
  }
  var donutChart = new Chart(oilCanvas, {
    type: "bar",
    data: oilData,
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
