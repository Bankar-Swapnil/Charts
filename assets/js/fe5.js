  function setval(){  
  const speedCanvas = document.getElementById("speedChart");

  var Titel = document.getElementById("Titel").value;
  var Titel2 = document.getElementById("Titel3").value;

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

    Chart.defaults.font.family = "Teko";
    Chart.defaults.font.size = 15;
    Chart.defaults.color = "black";

    const checkSpeed = (ctx, color_a, color_b) => ctx.p0.parsed.y > ctx.p1.parsed.y ? color_a : color_b;

    let dataFirst = {
    label: Titel,
    data: [duc,duc2,duc3,duc4,duc5],
    borderColor: "black",
    backgroundColor: "transparent",
    borderDash: [3, 3],
    stepped: "middle"
    };

    let dataSecond = {
    label: Titel2,
    data: [ducc,ducc2,ducc3,ducc4,ducc5],
    borderColor: "yellowgreen",
    backgroundColor: "transparent",
    segment: {
            borderColor: ctx => checkSpeed(ctx, 'orangered', 'yellowgreen'),
    },
    };

    let speedData = {
    labels: ["0s", "10s", "20s", "30s", "40s"],
    datasets: [dataFirst, dataSecond]
    };

    if (Chart.getChart("speedChart")){
        Chart.getChart("speedChart").destroy();
      }

    let lineChart = new Chart(speedCanvas, {
    type: "line",
    data: speedData
    });

}