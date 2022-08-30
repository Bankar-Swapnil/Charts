function setval(){

    var Titel1 = document.getElementById("Titel2").value;
    var Titel3 = document.getElementById("Titel3").value;
    var Titel4 = document.getElementById("Titel4").value;
  
    var label1 = document.getElementById("label1").value;
    var label2 = document.getElementById("label2").value;
    var label3 = document.getElementById("label3").value;
    var label4 = document.getElementById("label4").value;
  
    var duc = document.getElementById("input").value;
    var duc2 = document.getElementById("input2").value;
    var duc3 = document.getElementById("input3").value;
    var duc4 = document.getElementById("input4").value;
  
    var duc5 = document.getElementById("inputt").value;
    var duc6 = document.getElementById("inputt2").value;
    var duc7 = document.getElementById("inputt3").value;
    var duc8 = document.getElementById("inputt4").value;
  
    var ducc = document.getElementById("inputt1").value;
    var ducc2 = document.getElementById("inputt12").value;
    var ducc3 = document.getElementById("inputt13").value;
    var ducc4 = document.getElementById("inputt14").value;
  
    var color1 = document.getElementById("favcolor1").value;
    var color2 = document.getElementById("favcolor2").value;
    var color3 = document.getElementById("favcolor3").value;
  
      var ctx = document.getElementById('myChart').getContext('2d');
  
      var newDta= {
          labels: [label1,label2,label3,label4],
          datasets: [ { 
              data: [duc,duc2,duc3,duc4],
              label: Titel1,
              borderColor: color1,
              backgroundColor: color1,
              borderWidth:2
            }, { 
              data: [ducc,ducc2,ducc3,ducc4],
              label: Titel3,
              borderColor: color2,
              backgroundColor:color2,
              borderWidth:2,
            }, { 
              data: [duc5,duc6,duc7,duc8],
              label: Titel4,
              borderColor: color3,
              backgroundColor:color3,
              borderWidth:2,
              
            }
          ]
      }
      var Chartoptions= {
        indexAxis: 'y',
          scales: {
              x: {
                  stacked: true 
                },
              y: {
                  stacked: true 
                }
              }
              
            
       }
          if (Chart.getChart("myChart")){
              Chart.getChart("myChart").destroy();
          }
        var myChart = new Chart(ctx, {
            type: 'bar',
            data: newDta,
            options: Chartoptions
          });
      }
  
  