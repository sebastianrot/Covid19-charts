import {Bar} from 'react-chartjs-2';

const Chart = ({data, dataKey}) => {
    return(
        <article style={{width: '85%'}}>
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
                        ticks: {
                            beginAtZero:true
                        }
                    }],
                    xAxes: [{
                        gridLines: {
                            display:false
                        },
                        ticks: {
                            maxTicksLimit: 15,
                            autoSkip: true,
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