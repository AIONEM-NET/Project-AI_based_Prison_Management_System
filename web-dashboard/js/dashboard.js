(function($) {
  'use strict';
  $(function() {

    if ($("#balance-chart").length) {
      var areaData = {
        labels: ["Mon","Tue","Wed","Thu","Fri","Sat","Sun","Mon","Tue","Wed","Thu","Fri","Sat","Sun","Mon","Tue","Wed","Thu","Fri","Sat","Sun","Mon","Tue","Wed","Thu","Fri","Sat","Sun","Mon","Tue","Wed","Thu"],
        datasets: [
          {
            data: [2600, 1400, 2200, 1200, 2300, 2400, 2700, 1200, 2800, 2600, 1250, 1900, 1800, 2800, 2800, 1200, 2500, 2600, 1800, 1200, 2000, 1800, 2700, 1600, 2800, 2000, 2100, 1200, 2000, 1200, 1200, 2500],
            borderColor: [
              '#1faf47'
            ],
            borderWidth: 3,
            fill: false,
            label: "services"
          },
        ]
      };
      var areaOptions = {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
          filler: {
            propagate: false
          }
        },
        scales: {
          xAxes: [{
            display: true,
            ticks: {
              display: false,
            },
            gridLines: {
              display: false,
              drawBorder: false,
              color: 'transparent',
              zeroLineColor: '#eeeeee'
            }
          }],
          yAxes: [{
            display: true,
            ticks: {
              display: true,
              autoSkip: false,
              maxRotation: 0,
              stepSize: 100,
              fontColor: "#000",
              fontSize: 14,
              padding: 18,
              stepSize: 1000,
              max: 3000,
              fontSize: 10,
              fontColor: "#b1b0b0",
              callback: function(value) {
                var ranges = [
                    { divider: 1e6, suffix: 'M' },
                    { divider: 1e3, suffix: 'k' }
                ];
                function formatNumber(n) {
                    for (var i = 0; i < ranges.length; i++) {
                      if (n >= ranges[i].divider) {
                          return (n / ranges[i].divider).toString() + ranges[i].suffix;
                      }
                    }
                    return n;
                }
                return formatNumber(value);
              }
            },
            gridLines: {
              drawBorder: false,
              color: "#f8f8f8",
              zeroLineColor: "#f8f8f8"
            }
          }]
        },
        legend: {
          display: false
        },
        tooltips: {
          enabled: true
        },
        elements: {
          line: {
            tension: 0
          },
          point: {
            radius: 0
          }
        }
      }
      var balanceChartCanvas = $("#balance-chart").get(0).getContext("2d");
      var balanceChart = new Chart(balanceChartCanvas, {
        type: 'line',
        data: areaData,
        options: areaOptions
      });
    }

    if ($("#task-chart").length) {
      var taskChartCanvas = $("#task-chart").get(0).getContext("2d");
      var taskChart = new Chart(taskChartCanvas, {
        type: 'bar',
        data: {
          labels: ["Jan", "Feb", "Mar", "Apr", "May","Jun", "Jul", "Aug"],
          datasets: [{
              label: 'Profit',
              data: [-3, -5, -5, 3, 4, -5, -1, 9],
              backgroundColor: '#f83e37'
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: true,
          layout: {
            padding: {
              left: 0,
              right: 0,
              top: 0,
              bottom: 0
            }
          },
          scales: {
            yAxes: [{
              display: true,
              gridLines: {
                drawBorder: false,
                color: '#f1f3f9',
                zeroLineColor: '#f1f3f9'
              },
              ticks: {
                display: true,
                fontColor: "#9fa0a2",
                fontSize: 10,
                padding: 0,
                stepSize: 10,
                min: -10,
                max: 10
              }
            }],
            xAxes: [{
              display: false,
              stacked: false,
              categoryPercentage: 1,
              ticks: {
                display: false,
                beginAtZero: false,
                display: true,
                padding: 10,
                fontSize: 11
              },
              gridLines: {
                color: "rgba(0, 0, 0, 0)",
                display: false
              },
              position: 'bottom',
              barPercentage: 0.7
            }]
          },
          legend: {
            display: false
          },
          elements: {
            point: {
              radius: 0
            }
          }
        }
      });
    }

    if ($("#regional-chart").length) {
      var regionalChartCanvas = $("#regional-chart").get(0).getContext("2d");
      var regionalChart = new Chart(regionalChartCanvas, {
        type: 'horizontalBar',
        data: {
          labels: ["12", "8", "4", "0"],
          datasets: [
            {
              label: 'Income',
              data: [400, 360, 360, 360],
              backgroundColor: '#1cbccd'
            },
            {
              label: 'Expenses',
              data: [320, 190, 180, 140],
              backgroundColor: '#ffbf36'
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: true,
          layout: {
            padding: {
              left: -7,
              right: 0,
              top: 0,
              bottom: 0
            }
          },
          scales: {
            yAxes: [{
              display: true,
              gridLines: {
                display: false,
                drawBorder: false
              },
              ticks: {
                display: true,
                min: 0,
                max: 400,
                stepSize: 100,
                fontColor: "#b1b0b0",
                fontSize: 10,
                padding: 10
              },
              barPercentage: 1,
              categoryPercentage: .6,
            }],
            xAxes: [{
              display: true,
              stacked: false,
              ticks: {
                display: false,
                beginAtZero: true,
                fontColor: "#b1b0b0",
                fontSize: 10
              },
              gridLines: {
                display: true,
                drawBorder: false,
                lineWidth: 1,
                color: "#f5f5f5",
                zeroLineColor: "#f5f5f5"
              }
            }]
          },
          legend: {
            display: false
          },
          elements: {
            point: {
              radius: 3,
              backgroundColor: '#ff4c5b'
            }
          },
          legendCallback : function(chart) {
            var text = [];
              text.push('<div class="item mr-4 d-flex align-items-center">');
                text.push('<div class="item-box mr-2" style=" background-color: ' + chart.data.datasets[0].backgroundColor + ' "></div><p class="text-black mb-0"> ' + chart.data.datasets[0].label + '</p>');
              text.push('</div>');
              text.push('<div class="item d-flex align-items-center">');
                text.push('<div class="item-box mr-2" style=" background-color: ' + chart.data.datasets[1].backgroundColor + '"></div><p class="text-black mb-0"> ' + chart.data.datasets[1].label + ' </p>');
              text.push('</div>');
            return text.join('');
          }
        },
      });
      document.querySelector('#regional-chart-legend').innerHTML = regionalChart.generateLegend();
    }

    if ($("#activity-chart").length) {
      var activityChartCanvas = $("#activity-chart").get(0).getContext("2d");
      var activityChart = new Chart(activityChartCanvas, {
        type: 'bar',
        data: {
          labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
          datasets: [{
              label: 'Profit',
              data: [320, 300, 340, 320, 315, 270, 290, 310, 340, 335, 300, 320, 300, 340, 320, 315, 270, 290, 310, 340, 335, 300, 320, 300, 340, 320, 315, 270, 290, 310, 340, 335, 300, 320, 300, 340, 320, 315, 270, 290, 310, 340, 335, 300],
              backgroundColor: '#ffbf36'
            },
            {
              label: 'Target',
              data: [540, 500, 600, 540, 535, 470, 490, 510, 540, 535, 500, 540, 500, 450, 570, 535, 470, 490, 510, 540, 535, 500, 540, 500, 470, 500, 535, 470, 490, 510, 540, 535, 500, 540, 500, 490, 590, 505, 470, 490, 510, 540, 535, 500],
              backgroundColor: '#6640b2'
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: true,
          layout: {
            padding: {
              left: 0,
              right: 0,
              top: 0,
              bottom: 0
            }
          },
          scales: {
            yAxes: [{
              display: false,
              gridLines: {
                display: false,
                drawBorder: false
              },
              ticks: {
                display: false,
                min: 0,
                max: 600,
                stepSize: 100,
                fontColor: "#fff"
              }
            }],
            xAxes: [{
              display: false,
              stacked: true,
              ticks: {
                beginAtZero: true,
                fontColor: "#fff"
              },
              gridLines: {
                color: "rgba(0, 0, 0, 0)",
                display: false
              },
              barPercentage: .8,
              categoryPercentage: .9,
            }]
          },
          legend: {
            display: false
          },
          elements: {
            point: {
              radius: 0
            }
          }
        }
      });
    }

    if ($("#status-chart").length) {
      var areaData = {
        labels: ["IA", "RI", "NY", "CO", "MI", "FL", "IL", "PA", "LA", "NJ", "CA", "TX", "LA", "PQ", "RF", "JG",     "IA", "RI", "NY", "CO", "MI", "FL", "IL", "PA", "LA", "NJ", "CA", "TX", "LA", "PQ", "RF", "JG",     "IA", "RI", "NY", "CO", "MI", "FL", "IL", "PA", "LA", "NJ", "CA", "TX", "LA", "PQ", "RF", "JG",     "IA", "RI", "NY", "CO", "MI", "FL", "IL", "PA", "LA", "NJ", "CA", "TX", "LA", "PQ", "RF", "JG",     "IA", "RI", "NY", "CO", "MI", "FL", "IL", "PA", "LA", "NJ", "CA", "TX", "LA", "PQ", "RF", "JG",     "IA", "RI", "NY", "CO", "MI", "FL", "IL", "PA", "LA", "NJ", "CA", "TX", "LA", "PQ", "RF", "JG",     "IA", "RI", "NY", "CO", "MI", "FL", "IL", "PA", "LA", "NJ"],
        datasets: [{
            data: [30,40,34,48,35,43,40,48,38,39,35,45,32,33,28,22,24,23,36,28,31,22,32,27,30,25,36,30,38,34,30,27,30,26,26,18,23,31,18,19,17,19,17,17,14,16,15,17,10,15,9,14,13,20,18,15,12,16,17,14,20,10,19,12,12,16,11,17,15,17,9,8,12,15,10,15,16,20,18,20,18,28,28,33,23,38,20,28,23,24,17,14,21,15,24,11,13,13,19,13,15,18,10,20,22,28],
            backgroundColor: [
              '#00cccb'
            ],
            borderColor: "#00cccb",
            borderWidth: 0,
            fill: 'origin',
            label: "purchases"
          },
          {
            data: [60,70,64,78,65,73,70,78,68,69,65,75,62,63,58,52,54,53,66,58,61,52,62,57,60,55,66,60,68,64,60,57,60,56,56,48,53,61,48,49,47,49,47,47,34,36,35,37,40,35,39,44,43,50,48,45,42,46,37,44,50,40,39,42,32,36,41,47,45,47,39,38,42,45,40,45,46,50,48,50,48,58,58,63,53,68,50,58,53,54,47,44,51,45,54,41,43,43,49,43,45,48,40,50,52,58],
            backgroundColor: [
              '#d8d8d8'
            ],
            borderColor: '#d8d8d8',
            borderWidth: 1,
            fill: 'origin',
            label: "services"
          },
          {
            data: [90, 100, 94, 108, 95, 103, 100, 108, 98 ,99, 95, 105, 92, 93, 88, 82, 84, 83, 96, 88, 91, 82, 92, 87, 90, 85, 96, 90, 98, 94, 90, 87, 90, 86, 86, 78, 83, 91, 78, 79, 77, 79, 77, 77, 64, 66, 65, 67, 70, 65, 69, 74, 73, 80, 78, 75, 72, 76, 67, 74, 80, 70, 69, 72, 62, 66, 71, 77, 75, 77, 69, 68, 72, 75, 70, 75, 76, 80, 78, 80, 78, 88, 88, 93, 83, 98, 80, 88, 83, 84, 77, 74, 81, 75, 84, 71, 73, 73, 79, 73, 75, 78, 70, 80, 82, 88],
            backgroundColor: [
              '#6640b2'
            ],
            borderColor: '#6640b2',
            borderWidth: 1,
            fill: 'origin',
            label: "services"
          }
        ]
      };
      var areaOptions = {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
          filler: {
            propagate: false
          }
        },
        scales: {
          xAxes: [{
            display: false,
            ticks: {
              display: false
            },
            gridLines: {
              display: false,
              drawBorder: false,
              color: 'transparent',
              zeroLineColor: '#eeeeee'
            }
          }],
          yAxes: [{
            display: false,
            ticks: {
              display: false,
              autoSkip: false,
              maxRotation: 0,
              stepSize: 10,
              min: 0,
              max: 110
            },
            gridLines: {
              drawBorder: false
            }
          }]
        },
        legend: {
          display: false
        },
        tooltips: {
          enabled: true
        },
        elements: {
          line: {
            tension: 0
          },
          point: {
            radius: 0
          }
        }
      }
      var statusChartCanvas = $("#status-chart").get(0).getContext("2d");
      var statusChart = new Chart(statusChartCanvas, {
        type: 'line',
        data: areaData,
        options: areaOptions
      });
    }
    
    
  });

})(jQuery);


getData("", "", 0, 0);

$('#timeFrom').change(function() {

  var timeFrom = $('#timeFrom').val();
  var timeTo = $('#timeTo').val();

  getData("", "", timeFrom, timeTo);

});
$('#timeTo').change(function() {

  var timeFrom = $('#timeFrom').val();
  var timeTo = $('#timeTo').val();

  timeFrom = new Date(timeFrom).getTime();
  timeTo = new Date(timeTo).getTime();

  getData("", "", timeFrom, timeTo);

});

var keyword1 = "";

var isDataTable = true;

var userUID = localStorage.getItem("userUID");
var userName = localStorage.getItem("userName");
var userAccount = localStorage.getItem("userAccount");
var userAccount1 = localStorage.getItem("userAccount1");

function resetData() {
  keyword1 = "";
  getData("", "", 0, 0);
}
function getData(status, keyword, timeFrom, timeTo) {

  timeFrom = $('#timeFrom').val();
  timeTo = $('#timeTo').val();

  timeFrom = new Date(timeFrom).getTime();
  timeTo = new Date(timeTo).getTime();

  if(keyword == null || keyword.length === 0) keyword = status;

  if(keyword == null || keyword.length === 0) keyword = keyword1;

  var message = "";

  if(keyword != null && keyword.length !== 0) {
    message += "Selected Alerts Type:   '"+keyword.toUpperCase()+"' " +" ";
  }

  if(timeFrom > 0) {
    timeFrom = new Date(timeFrom).getTime();
    message += "\n\nFROM:    "+ new Date(timeFrom).toDateString();
  }
  if(timeTo > 0) {
    timeTo = new Date(timeTo).getTime();
    message += "\n\nTO:         "+ new Date(timeTo).toDateString();
  }

  if(message != null && message.length !== 0) {
    alert(message);
  }

  keyword1 = keyword;

  $("#GraphCard").addClass("is-loading");
  $("#TableCard").addClass("is-loading");

  var htmlAll = "";
  var max = 1000;

  database.ref('Website-Alerts').limitToLast(max).on('value', function(snapshot) {

    var childCounts = snapshot.numChildren();

    var t = 0;
    var i = 0;

    var countAll = 0;
    var countSafe = 0;
    var countWarning = 0;
    var countDanger = 0;
    var countIsAdmin = 0;
    var countIsAuth = 0;
    var countIsSecurity = 0;

    snapshot.forEach(function(childSnapshot) {

      if (t === 0) {
        htmlAll = "";
      }

      t++;

      var childKey = childSnapshot.key;
      var childData = childSnapshot.val();

      if (i <= max) {

        var isIncluded = false;

        if(status != null && status.length > 0) {
          if((""+childData.status) == status) {
            // isIncluded = true;
          }
        }

        var type = "";

        if((""+childData.code) == "200") {
          type = "Alert";
        }
        if((""+childData.code) == "400") {
          type = "Alert";
        }
        if((""+childData.code) == "500") {
          type = "Alert";
        }
        if((""+childData.code) == "505") {
          type = "Error";
        }

        if(keyword != null && keyword.length > 0) {
          if((" "+childData.code+" "+childData.alert+" "+type+" ").toLowerCase().includes(keyword.toLowerCase())) {
            isIncluded = true;
          }
        }else {
          isIncluded = true;
        }

        if(timeFrom > 0 && (childData.time != null ? childData.time : 0) < timeFrom) {
          isIncluded = false;
        }

        if(timeTo > 0 && (childData.time != null ? childData.time : 0) > timeTo) {
          isIncluded = false;
        }


        if(isIncluded) {

          i++;

          countAll++;

          if((""+childData.code) == "200") {
            countSafe++;
          }
          if((""+childData.code) == "500") {
            countWarning++;
          }
          if((""+childData.code) == "505") {
            countDanger++;
          }

          var html = "";
          var html1 = "";

          html += "<tr>";
          html += '<td class="text-center">'+i+'</td>';
          if(childData.isAdmin !== null && childData.isAdmin == true) {
            countIsAdmin++;
          }
          if(childData.isSecurity !== null && childData.isSecurity == true) {
            countIsSecurity++;
          }
          if(childData.isAuth !== null && childData.isAuth == true) {
            countIsAuth++;
          }
          html += '<td class="text-center">'+(childData.website != null && (""+childData.website).length !== 0 ? childData.website : "-")+'</td>';
          html += "<td>";
          html += '<div class="text-center status-'+(childData.code != null && (""+childData.code).length !== 0 ? childData.code : "-")+'">'+(childData.code != null && (""+childData.code) !== 0 ? childData.code : "-")+'</div>';
          html += "</td>";
          html1 += "<td class=\"text-center\">";
          html1 += '<div class="progress">';
          html1 += '<div class="progress-bar bg-success" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>';
          html1 += '</div>';
          html1 += "</td>";
          html += '<td class="text-center">'+((childData.isAuth != null && childData.isAuth == true) ? "YES" : "NO")+'</td>';
          html += '<td class="text-center">'+(childData.alert != null && (""+childData.website).alert !== 0 ? childData.alert : "-")+'</td>';
          html += '<td class="text-center">'+(childData.duration != null && (""+childData.duration) !== 0 ? (childData.duration > 0 ? childData.duration : 1) : "-")+' SEC</td>';
          html += '<td class="text-center">'+(childData.time != null && (""+childData.time).length !== 0 ? new Date(childData.time).toDateString() : "-")+'</td>';
          html += "</tr>";

          htmlAll = html + htmlAll;

        }

      }

      if(t === childCounts) {

        if(i === 0) {
          // htmlAll += "<div class=\"col s12 m12 l12 text-center\" > <button class=\"btn default_color darken-3 center\" onclick=\"loadLibraryMore()\"></button> No Record Found! </div>";

        }else {
          // htmlAll += "<div class=\"col s12 m12 l12 text-center\" > <button class=\"btn default_color darken-3 center\" onclick=\"loadLibraryMore()\"></button> </div>";
        }


        $("#countAll").html(countAll);
        $("#countWarning").html(countWarning);
        $("#countDanger").html(countDanger);
        $("#countIsAdmin").html(countIsAdmin);
        $("#countIsSecurity").html(countIsSecurity);
        $("#countIsAuth").html(countIsAuth);
        $("#tbody").html(htmlAll);

        $("#GraphCard").removeClass("is-loading");
        $("#TableCard").removeClass("is-loading");


        if(isDataTable) {
          $('#dataTable').DataTable({
            dom: 'Bfrtip',
            buttons: [
              'excel', 'pdf', 'print'
            ]
          });

          isDataTable = false;
        }


        if ($("#audience-chart").length) {
          var AudienceChartCanvas = $("#audience-chart").get(0).getContext("2d");
          var AudienceChart = new Chart(AudienceChartCanvas, {
            type: 'bar',
            data: {
              labels: [""],
              datasets: [
                {
                  label: 'All',
                  data: [countAll],
                  backgroundColor: '#0c8446'
                },
                {
                  label: 'Alert',
                  data: [countWarning],
                  backgroundColor: '#ec6c11'
                },
                {
                  label: 'Error',
                  data: [countDanger],
                  backgroundColor: '#b6047e'
                },
                {
                  label: 'Admin',
                  data: [countIsAdmin],
                  backgroundColor: '#e0d12e'
                },
                {
                  label: 'Security',
                  data: [countIsSecurity],
                  backgroundColor: '#b2000e'
                },
                {
                  label: 'Authentication',
                  data: [countIsAuth],
                  backgroundColor: '#1767d2'
                }
              ]
            },
            options: {
              responsive: true,
              maintainAspectRatio: true,
              layout: {
                padding: {
                  left: 0,
                  right: 0,
                  top: 20,
                  bottom: 0
                }
              },
              scales: {
                yAxes: [{
                  display: true,
                  gridLines: {
                    display: true,
                    drawBorder: false,
                    color: "#f8f8f8",
                    zeroLineColor: "#f8f8f8"
                  },
                  ticks: {
                    display: true,
                    min: 0,
                    max: t,
                    stepSize: 100,
                    fontColor: "#b1b0b0",
                    fontSize: 10,
                    padding: 10
                  }
                }],
                xAxes: [{
                  stacked: false,
                  ticks: {
                    beginAtZero: true,
                    fontColor: "#b1b0b0",
                    fontSize: 10
                  },
                  gridLines: {
                    color: "rgba(0, 0, 0, 0)",
                    display: false
                  },
                  barPercentage: .9,
                  categoryPercentage: .7,
                }]
              },
              legend: {
                display: false
              },
              elements: {
                point: {
                  radius: 3,
                  backgroundColor: '#ff4c5b'
                }
              }
            },
          });
        }

      }

    });

  });

}


if(userUID == null || userUID.length === 0) {
  logout();
}

$("#accountType").html(userName.toUpperCase());
$("#accountName").html(userName.toUpperCase());
$("#title").html(userName.toUpperCase() + " - Artificial Intelligence based Prison Management System");
$("#title").html("Demo - Artificial Intelligence based Prison Management System");

if(userName == "isAdmin") {
  $(".acc-isSecurity").addClass("hidden");
  $(".acc-isAuth").addClass("hidden");
}
if(userName == "isSecurity") {
  $(".acc-isAdmin").addClass("hidden");
  $(".acc-isAuth").addClass("hidden");
}
if(userName == "isAuth") {
  $(".acc-isSecurity").addClass("hidden");
  $(".acc-isAdmin").addClass("hidden");
}
if(userName == "isSecurityisAuth") {
  $(".acc-isAdmin").addClass("hidden");
}

function logout() {
  localStorage.setItem("userUID", "");
  localStorage.setItem("userName", "");
  localStorage.setItem("userAccount", "");
  alert("Account logout. Please login again");
  window.location.replace("../login/");
}