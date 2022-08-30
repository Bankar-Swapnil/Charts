function setval(){

    var Titel1 = document.getElementById("Titel2").value;
    var Titel2 = document.getElementById("Titel3").value;
  
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
  
      var ctx = document.getElementById('myChart').getContext('2d');
  
      var newDta= {
          labels: [label1,label2,label3,label4],
          datasets: [{ 
              data: [duc,duc2,duc3,duc4],
              label: Titel1,
              borderColor: color1,
              backgroundColor: color1,
              stepped: true,
              fill:false
            },
            { 
                data: [ducc,ducc2,ducc3,ducc4],
                label: Titel2,
                borderColor: color1,
                backgroundColor: color1,
                fill:false,
              }
          ]
      }
          if (Chart.getChart("myChart")){
              Chart.getChart("myChart").destroy();
          }
        var myChart = new Chart(ctx, {
            type: 'line',
            data: newDta
          });
      }