
[{stateData: chicagoData,el:"chicagoChart"}, {stateData: nycData,el: "nycChart"}].forEach(({stateData, el}) => {

var sData = []
var eData = []
var pData = []
var xLabel = []

    stateData.forEach(element => {

        if (element.room_type == "Private room") {
            //    let s select all the similar neighbourhood

            var similarBlocks = stateData.filter(item => item.neighbourhood == element.neighbourhood
                && item.room_type == "Private room")
            //    now let s sum up the prices and divide it by the number of prices. 
            //  reduce function takes a funtiont as a parameter, acc represent the previous value,
            var averagePrice = similarBlocks.reduce((acc, value) => {
                return acc + parseInt(value.price)
            }, 0) / similarBlocks.length
            var exist = pData.filter(item => item.x == element.neighbourhood
            )[0]
            if (!exist) {
                pData[element.neighbourhood] = averagePrice
            }
        } else if (element.room_type == "Shared room") {
            var similarBlocks = stateData.filter(item => item.neighbourhood
                == element.neighbourhood
                && item.room_type == "Shared room")
            var averagePrice = similarBlocks.reduce((acc, value) => {
                return acc + parseInt(value.price)
            }, 0) / similarBlocks.length
            var exist = sData.filter(item => item.x == element.neighbourhood
            )[0]
            if (!exist) {
                sData[element.neighbourhood] = averagePrice
            }
        } else if (element.room_type == "Entire home/apt") {
            var similarBlocks = stateData.filter(item => item.neighbourhood
                == element.neighbourhood
                && item.room_type == "Entire home/apt")
            var averagePrice = similarBlocks.reduce((acc, value) => {
                return acc + parseInt(value.price)
            }, 0) / similarBlocks.length
            var exist = eData.filter(item => item.x == element.neighbourhood
            )[0]
            if (!exist) {
                eData[element.neighbourhood] = averagePrice

            }
        }


       
    });

    var pPoints = []
    var sPoints = []
    var ePoints = []

    Object.entries(pData).forEach(([key, value]) => {
        xLabel.push(key)

    })

    xLabel.forEach((item) => {
        pPoints.push(pData[item])
        ePoints.push(eData[item])
        sPoints.push(sData[item])

    })
    // console.log(pPoints);


    // console.log(ePoints);
    // console.log(sPoints);

    var ctx = document.getElementById(el).getContext('2d');
    var barChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: xLabel,
            datasets: [{
                label: 'Private Room',
                data: pPoints,
                backgroundColor: "red",
                borderColor: "transparent",
                borderWidth: 1,
                pointRadius: 5,
                pointBackgroundColor: "red",
                fill: false
            },
            {
                label: 'Entire home/apt',
                data: ePoints,
                backgroundColor: "orange",
                borderColor: "transparent",
                borderWidth: 1,
                pointRadius: 5,
                pointBackgroundColor: "orange",
                fill: false
            },
            {
                label: 'Shared Room',
                data: sPoints,
                backgroundColor: "blue",
                borderColor: "transparent",
                borderWidth: 1,
                pointRadius: 5,
                pointBackgroundColor: "blue",
                fill: false
            }]

        },
        options: {
            responsive: true,
            scales: {
                xAxes: [{
                    display: true,
                    labelString: "xaxis data"
                }],
                yAxes: [{
                    display: true,
                    labelString: "yaxis data"

                }]
            },
            legend: {
                position: "right"
            }
        }

    });  

})

