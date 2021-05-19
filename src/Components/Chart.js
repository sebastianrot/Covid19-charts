import {Bar} from 'react-chartjs-2';

const Chart = ({data, dataKey, state}) => {
    return(
        <article style={{width: state > 650 ? '85%' : '90%'}}>
        <Bar
            data={{
                labels: dataKey,
                datasets: [{
                    label: false,
                    data: data,
                    borderColor: 'rgb(75, 192, 192)',
                    fill: false,
                    pointRadius: 0,
                    borderWidth: 3,
                }]
            }}
            options={{
                responsive: true,
                tooltips: {
                  mode: 'index',
                  intersect: false,
                },
               hover: {
                  mode: 'nearest',
                  intersect: true
                },
                legend: {
                    display: false
                 },
                 scales: {
                    yAxes: [{
                        ticks: state > 650 ? {
                            beginAtZero:true,
                            maxTicksLimit: 10,
                        } : {
                            maxTicksLimit: 5,
                            autoSkip: true,
                        }
                    }],
                    xAxes: [{
                        gridLines: {
                            display:false
                        },
                        ticks: {
                            display: false
                        }
                    }],
                }
            }}
            width={100}
            height={50}
        />
        </article>
    )
}

export default Chart;