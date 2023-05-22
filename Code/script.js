Lineplot = document.getElementById("lineplot")

let data1 = {
    x: ["2014", "2015", "2016", "2017", "2018", '2019', '2020','2021'],
    y: [154, 102, 203, 145, 140, 157, 131,131],
    type: 'bar',
    name: "Jawa Tengah"
};

let data2 = {
    x: ["2014", "2015", "2016", "2017", "2018", '2019', '2020','2021'],
    y: [18, 0, 0, 0, 100, 150, 100, 0],
    type: 'bar',
    name: "DI Yogyakarta"
};

let data3 = {
    x: ["2014", "2015", "2016", "2017", "2018", '2019', '2020','2021'],
    y: [336, 394, 152, 59, 128, 48, 0, 0],
    type: 'bar',
    name: "Jawa Timur"
};

let data4 = {
    x: ["2014", "2015", "2016", "2017", "2018", '2019', '2020','2021'],
    y: [150, 100, 80, 0, 250, 15, 0, 20],
    type: 'bar',
    name: "Bali"
};

let data5 = {
    x: ["2014", "2015", "2016", "2017", "2018", '2019', '2020','2021'],
    y: [136, 100, 200, 55, 945, 205, 0,0],
    type: 'bar',
    name: "Nusa Tenggara Barat"
};


let data6 = {
    x: ["2014", "2015", "2016", "2017", "2018", '2019', '2020','2021'],
    y: [63, 228, 95, 89, 113, 123, 147, 162],
    type: 'bar',
    name: "Nusa Tenggara Timur"
};

var datas = [data1, data2, data3, data4, data5, data6];


let layout = {
    font: { size: 18, color: 'white', family: "Poppins" },
    paper_bgcolor: 'rgb(67, 60, 66)',
    plot_bgcolor: 'rgb(67, 60, 66)',
    xaxis: {
        title: 'Tahun',
        titlefont: {
            family: 'Poppins',
            size: 18,
            color: 'white'
        }
    },
    yaxis: {
        title: 'Luas Tanam Kapas  ',
        titlefont: {
            family: 'Poppins',
            size: 18,
            color: 'white'
        },
    padding: "3rem",
    margin: 0
    }
}

let config = { responsive: true }
Plotly.newPlot(Lineplot, datas, layout, config);