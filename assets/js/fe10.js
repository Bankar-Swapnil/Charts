

function setval(){


    var oilCanvas = document.getElementById("oilChart");
    
    var Titel = document.getElementById("Titel").value;
    var Titel1 = document.getElementById("Titel").value;


  var label1 = document.getElementById("label1").value;
  var label2 = document.getElementById("label2").value;
  var label3 = document.getElementById("label3").value;


  var duc = document.getElementById("input").value;
  var duc2 = document.getElementById("input2").value;
  var duc3 = document.getElementById("input3").value;
  
  var ducc = document.getElementById("inputt").value;
  var ducc2 = document.getElementById("inputt2").value;
  var ducc3 = document.getElementById("inputt3").value;

  var color1 = document.getElementById("favcolor1").value;


  Chart.defaults.font.family = "Lato";
  Chart.defaults.font.size = 15;
  Chart.defaults.color = "black";

  var popData = {
    datasets: [
      {
        label: [Titel1],
        data: [
          { x:label1,y:label2,r:label3},
          { x:duc,y:duc2,r:duc3 },
          { x:ducc,y:ducc2,r:ducc3}
        ],
        backgroundColor: color1,
      }
    ]
  };

 
  if (Chart.getChart("oilChart")){
    Chart.getChart("oilChart").destroy();
  }
  var radarChart = new Chart(oilCanvas, {
    type: "bubble",
    data: popData
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









