import Chart from './Chart';

const SectionChartVaccine = ({ info, size }) => {
    const arrayKey = Object.keys(info)
    const arrayValues = Object.values(info)
    const informationCovid = arrayValues.map((element, index, array) => {
        const number = element - array[index - 1]
        if(number < 0) return 0
        return number
    })

    return(
        <article style={{display: 'flex', justifyContent: 'center'}}>
        <Chart data={informationCovid} dataKey={arrayKey} state={size}/>
        </article>
    )
}

export default SectionChartVaccine