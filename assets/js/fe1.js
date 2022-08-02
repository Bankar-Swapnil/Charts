
function setval(){
    var densityCanvas = document.getElementById("densityChart");
    
     var Titel = document.getElementById("Titel").value;
    
      var duc = document.getElementById("Value1").value;
      var duc2 = document.getElementById("Value2").value;
      var duc3 = document.getElementById("Value3").value;
      var duc4 = document.getElementById("Value4").value;
      var duc5 = document.getElementById("Value5").value;
    
      var label1 = document.getElementById("label1").value;
      var label2 = document.getElementById("label2").value;
      var label3 = document.getElementById("label3").value;
      var label4 = document.getElementById("label4").value;
      var label5 = document.getElementById("label5").value;
    
      var color1 = document.getElementById("favcolor1").value;
      var color2 = document.getElementById("favcolor2").value;
      var color3 = document.getElementById("favcolor3").value;
      var color4 = document.getElementById("favcolor4").value;
      var color5 = document.getElementById("favcolor5").value;
    
    Chart.defaults.font.family = "Lato";
    Chart.defaults.font.size = 18;
    Chart.defaults.color = "black";
    
    var densityData = {
      label: Titel,
      data: [duc,duc2,duc3,duc4,duc5],
      backgroundColor: [color1, color2, color3, color4, color5],
      borderColor: [
        "black"
      ],
      borderWidth: 2,
      hoverBorderWidth: 0,
      barPercentage: 0.8
    };
    
    var chartOptions = {
      indexAxis: 'y',
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
            text: Titel,
            color: "green",
            font: {
              weight: "bold",
              size: 22,
              lineHeight: 2
            }
          }
        },
        y: {
          grid: {
            display: false
          }
        }
      }
    };
    if (Chart.getChart("densityChart")){
      Chart.getChart("densityChart").destroy();
    }
    
    var barChart = new Chart(densityCanvas, {
      type: 'bar',
      data: {
        labels: [label1,label2,label3,label4,label5],
        datasets: [densityData],
      },
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
    