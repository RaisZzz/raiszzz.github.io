document.addEventListener("DOMContentLoaded", function() {
	$('.date-input').daterangepicker({
    "locale": {
        "format": "MM.DD.YYYY г.",
        "separator": " - ",
        "applyLabel": "Apply",
        "cancelLabel": "Cancel",
        "fromLabel": "From",
        "toLabel": "To",
        "customRangeLabel": "Custom",
        "weekLabel": "W",
        "daysOfWeek": [
            "Пн",
            "Вт",
            "Ср",
            "Чт",
            "Пт",
            "Сб",
            "Вс"
        ],
        "monthNames": [
            "Январь",
            "Февраль",
            "Март",
            "Апрель",
            "Май",
            "Июнь",
            "Июль",
            "Август",
            "Сентябрь",
            "Октябрь",
            "Ноябрь",
            "Декабрь"
        ],
        "firstDay": 1
    },
    "startDate": "1/1/2021",
    "endDate": "1/1/2021"
}, function(start, end, label) {
  setTimeout(() => {
  	$('.date-input').val(start.format('DD.MM.YYYY г.') + " - " + end.format('DD.MM.YYYY г.'));
  }, 1)
});
	$('.date-input').on('click', function() {
		const row = document.createElement("div");
		row.className = "date-input__row";
		const titleStart = document.createElement("p");
		const titleEnd = document.createElement("p");
		titleStart.className = "date-input__title";
		titleEnd.className = "date-input__title";
		titleStart.innerHTML = "Дата начала";
		titleEnd.innerHTML = "Дата окончания";
		row.append(titleStart);
		row.append(titleEnd);
		$('.daterangepicker').prepend(row);
		$('.date-input').off('click');
	});

    const zub_labels = [
        'Предоплата',
        'Коммерция',
        'Факт',
        'Другие'
    ];
    const zub_data = {
        labels: zub_labels,
        datasets: [{
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)',
                '#2ecc71'
            ],
            data: [3, 10, 20, 1],
        }]
    };
    const zub_config = {
        type: 'pie',
        data: zub_data,
        options: {}
    };
    const zubChart = new Chart(
        document.getElementById('zub_chart'),
        zub_config
    );

    const poly_labels = [
        'Предоплата',
        'Коммерция',
        'Факт',
        'Другие'
    ];
    const poly_data = {
        labels: poly_labels,
        datasets: [{
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)',
                '#2ecc71'
            ],
            data: [30, 2, 10, 7],
        }]
    };
    const poly_config = {
        type: 'pie',
        data: poly_data,
        options: {}
    };
    const polyChart = new Chart(
        document.getElementById('poly_chart'),
        poly_config
    );

    const pediatr_labels = [
        'Предоплата',
        'Коммерция',
        'Факт',
        'Другие'
    ];
    const pediatr_data = {
        labels: pediatr_labels,
        datasets: [{
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)',
                '#2ecc71'
            ],
            data: [30, 2, 10, 7],
        }]
    };
    const pediatr_config = {
        type: 'pie',
        data: pediatr_data,
        options: {}
    };
    const pediatrChart = new Chart(
        document.getElementById('pediatr_chart'),
        pediatr_config
    );

    const labels = [
        12000,
        10000,
        422,
        2302,
        23239,
        12312
    ];
    const data = {
      labels: labels,
      datasets: [{
        axis: 'y',
        label: 'Средняя выручка в час',
        data: [labels[0], labels[1], labels[2], labels[3], labels[4], labels[5]],
        fill: false,
        backgroundColor: [
          'rgb(3, 155, 229)'
        ]
      }],
    };
    const config = {
      type: 'bar',
      data,
      options: {
        indexAxis: 'y',
        barThickness: 20,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false
            }
        },
        layout: {
            padding: 0
        }
      }
    };
    const virabotkaChart = new Chart(
        document.getElementById('virabotka_1'),
        config
    );


    const slabels = [
        12000,
        10000,
        422,
        2302,
        23239
    ];
    const sdata = {
      labels: slabels,
      datasets: [{
        axis: 'y',
        label: 'Средняя выручка в час',
        data: [slabels[0], slabels[1], slabels[2], slabels[3], slabels[4]],
        fill: false,
        backgroundColor: [
          'rgb(3, 155, 229)'
        ]
      }],
    };
    const sconfig = {
      type: 'bar',
      data: sdata,
      options: {
        indexAxis: 'y',
        barThickness: 20,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false
            }
        },
        layout: {
            padding: 0
        }
      }
    };
    const virabotka2Chart = new Chart(
        document.getElementById('virabotka_2'),
        sconfig
    );

    const salary = document.querySelectorAll(".salary-chart");
    salary.forEach(sal => {
        setTimeout(() => {
            sal.style.height = sal.parentNode.parentNode.parentNode.clientHeight + 47 + "px";
        }, 1000)
    });


    $('.salary-slider').slick({
        slidesToShow: 1,
        prevArrow: $('.salary-slider-prev'),
        nextArrow: $('.salary-slider-next')
    });






    const pose_zub_labels = [
        'Предоплата',
        'Коммерция',
        'Факт',
        'Другие'
    ];
    const pose_zub_data = {
        labels: pose_zub_labels,
        datasets: [{
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)',
                '#2ecc71'
            ],
            data: [3, 10, 20, 1],
        }]
    };
    const pose_zub_config = {
        type: 'pie',
        data: pose_zub_data,
        options: {}
    };
    const pose_zubChart = new Chart(
        document.getElementById('pose_zub_chart'),
        pose_zub_config
    );

    const pose_poly_labels = [
        'Предоплата',
        'Коммерция',
        'Факт',
        'Другие'
    ];
    const pose_poly_data = {
        labels: pose_poly_labels,
        datasets: [{
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)',
                '#2ecc71'
            ],
            data: [3, 10, 20, 1],
        }]
    };
    const pose_poly_config = {
        type: 'pie',
        data: pose_poly_data,
        options: {}
    };
    const pose_polyChart = new Chart(
        document.getElementById('pose_poly_chart'),
        pose_poly_config
    );


    $('#first').slick({
        slidesToShow: 1,
        prevArrow: $('#first-prev'),
        nextArrow: $('#first-next')
    })

    $('#second').slick({
        slidesToShow: 1,
        prevArrow: $('#second-prev'),
        nextArrow: $('#second-next')
    })

    $('#third').slick({
        slidesToShow: 1,
        prevArrow: $('#third-prev'),
        nextArrow: $('#third-next')
    })





    const neprihlabels = [
        'Prihod',
        'Summa',
        'ZP',
        'FAKT',
        'LOL'
    ];
    const neprihdata = {
      labels: neprihlabels,
      datasets: [{
        axis: 'x',
        label: 'Доля неприходов',
        data: [22, 19.8, 10, 1, 10],
        fill: false,
        backgroundColor: [
          'rgb(3, 155, 229)'
        ]
      }],
    };
    const neprihconfig = {
      type: 'bar',
      data: neprihdata,
      options: {
        responsive: true,
        maintainAspectRatio: false
      }
    };
    const neprihChart = new Chart(
        document.getElementById("dolyaNeprih"),
        neprihconfig
    );

     $('#fourth').slick({
        slidesToShow: 1,
        prevArrow: $('#fourth-prev'),
        nextArrow: $('#fourth-next')
    })


     const dolyaDiagram_labels = [
        'Предоплата',
        'Коммерция',
        'Факт',
        'Lasd',
        'lol',
        'assd',
        'poqwe',
        'summ',
        'pok'
    ];
    const dolyaDiagram_data = {
        labels: dolyaDiagram_labels,
        datasets: [{
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)',
                '#2ecc71',
                'purple',
                'pink',
                'blue',
                'red',
                'green'
            ],
            data: [3, 10, 20, 1, 2, 93, 1, 9, 10],
        }]
    };
    const dolyaDiagram_config = {
        type: 'pie',
        data: dolyaDiagram_data,
        options: {
            plugins: {
                labels: {

                }
            }
        }
    };
    const dolyaDiagramChart = new Chart(
        document.getElementById('dolyaDiagramNeprih'),
        dolyaDiagram_config
    );



    const ltvOnelabels = [
        'Prihod',
        'Summa',
        'ZP',
        'FAKT',
        'LOL'
    ];
    const ltvOnedata = {
      labels: ltvOnelabels,
      datasets: [{
        axis: 'x',
        label: 'Средний LTV',
        data: [22, 19.8, 10, 1, 10],
        fill: false,
        backgroundColor: [
          'rgb(3, 155, 229)'
        ]
      }],
    };
    const ltvOneconfig = {
      type: 'bar',
      data: ltvOnedata,
      options: {
        responsive: true,
        maintainAspectRatio: false
      }
    };
    const ltvOneChart = new Chart(
        document.getElementById("ltv_one"),
        ltvOneconfig
    );

    const ltvTwolabels = [
        'Prihod',
        'Summa',
        'ZP',
        'FAKT',
        'LOL'
    ];
    const ltvTwodata = {
      labels: ltvTwolabels,
      datasets: [{
        axis: 'x',
        label: 'Средний LTV',
        data: [22, 19.8, 10, 1, 10],
        fill: false,
        backgroundColor: [
          'rgb(3, 155, 229)'
        ]
      }],
    };
    const ltvTwoconfig = {
      type: 'bar',
      data: ltvTwodata,
      options: {
        responsive: true,
        maintainAspectRatio: false
      }
    };
    const ltvTwoChart = new Chart(
        document.getElementById("ltv_two"),
        ltvTwoconfig
    );

    const ltvThridtlabels = [
        'Prihod',
        'Summa',
        'ZP',
        'FAKT',
        'LOL'
    ];
    const ltvThridtdata = {
      labels: ltvThridtlabels,
      datasets: [{
        axis: 'x',
        label: 'Средний LTV',
        data: [22, 19.8, 10, 1, 10],
        fill: false,
        backgroundColor: [
          '#4DD0E1'
        ]
      }],
    };
    const ltvThridtconfig = {
      type: 'bar',
      data: ltvThridtdata,
      options: {
        responsive: true,
        maintainAspectRatio: false
      }
    };
    const ltvThridtChart = new Chart(
        document.getElementById("ltv_third"),
        ltvThridtconfig
    );

    $('#fifth').slick({
        slidesToShow: 1,
        prevArrow: $('#fifth-prev'),
        nextArrow: $('#fifth-next')
    })




    
const DATA_COUNT = 7;
const NUMBER_CFG = {count: DATA_COUNT, min: -100, max: 100};

const lineslabels = [
    1,2,3,4,5,6,7
];
const lineslabelsTwo = [
    10,2,2,1,11,20,7
];
const linesdata = {
  labels: lineslabels,
  datasets: [
    {
      label: 'FAKT',
      data: lineslabels,
      borderColor: "red",
      yAxisID: 'y',
    },
    {
      label: 'PREDOPLATA',
      data: lineslabelsTwo,
      borderColor: "blue",
      backgroundColor: "blue",
      yAxisID: 'y1',
    }
  ]
};

const linesconfig = {
  type: 'line',
  data: linesdata,
  options: {
    responsive: true,
    interaction: {
      mode: 'index',
      intersect: false,
    },
    stacked: false,
    plugins: {
      title: {
        display: true,
        text: 'Chart.js Line Chart - Multi Axis'
      }
    },
    scales: {
      y: {
        type: 'linear',
        display: true,
        position: 'left',
      },
      y1: {
        type: 'linear',
        display: true,
        position: 'right',

        // grid line settings
        grid: {
          drawOnChartArea: false, // only want the grid lines for one axis to show up
        },
      },
    }
  },
};
const linesFirst = new Chart(
    document.getElementById("linesFirst"),
    linesconfig
    )




const dolyaDiagramLast_labels = [
        'Предоплата',
        'Коммерция',
        'Факт',
        'Lasd',
        'lol',
        'assd',
        'poqwe',
        'summ',
        'pok'
    ];
    const dolyaDiagramLast_data = {
        labels: dolyaDiagramLast_labels,
        datasets: [{
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)',
                '#2ecc71',
                'purple',
                'pink',
                'blue',
                'red',
                'green'
            ],
            data: [3, 10, 20, 1, 2, 93, 1, 9, 10],
        }]
    };
    const dolyaDiagramLast_config = {
        type: 'pie',
        data: dolyaDiagramLast_data,
        options: {
            plugins: {
                labels: {

                }
            }
        }
    };
    const dolyaDiagramLastChart = new Chart(
        document.getElementById('dolyaDiagram'),
        dolyaDiagramLast_config
    );

    document.querySelectorAll(".main-choice").forEach(select => {
        new Choices(select, {
            loadingText: 'Загрузка...',
            noResultsText: 'Результатов нет.',
            noChoicesText: 'Нет опций для выбора.',
            itemSelectText: '',
            classNames: {
                containerOuter: 'main-choice choices'
            }
        });
    });
});