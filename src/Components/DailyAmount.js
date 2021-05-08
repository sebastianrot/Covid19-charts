import './DailyAmount.css';
import { useState, useEffect } from 'react';
import CountUp from 'react-countup';

const DailyAmount = ({value, send, setSend}) => {
    const [dataDaily, setDataDaily] = useState(null);
    const [loading, setLoading] = useState(true)
    const [url, setUrl] = useState('https://disease.sh/v3/covid-19/all');

    useEffect(() => {
       if(send) setUrl(`https://disease.sh/v3/covid-19/countries/${value || 'poland'}`)

        fetch(url)
        .then(res => res.ok ? res : null)
        .then(res => res.json())
        .then(res => setDataDaily(res))
        .then(() => setLoading(false))
        .catch(error => console.log('błąd'))
        setSend(false)
    }, [send])

    if(loading) return(
       <div style={{display: 'flex', justifyContent: 'center'}}><span>loading...</span></div>
    )
    
    return(
        <section className='section-daily'>
            <article className='article-daily' style={{color: 'rgba(0, 0, 255, 0.5)'}}>
                <span>Cases</span><br />
                <CountUp className='number-daily' prefix="+" end={dataDaily.cases}/>
            </article>
            <article className='article-daily' style={{color: '#cc1034'}}>
                <span>Deaths</span>
                <CountUp className='number-daily' prefix="+" end={dataDaily.deaths}/>
            </article>
            <article className='article-daily' style={{color: 'rgba(0, 255, 0, 0.7)'}}>
            <span>Tests</span>
               <CountUp className='number-daily' prefix="+" end={dataDaily.tests}/>
            </article>
        </section>
    )
}

export default DailyAmount;