import SectionChartCases from './SectionChartCases';
import SectionChartDeaths from './SectionChartDeaths';
import SectionChartVaccine from './SectionChartVaccine';
import useFetch from './useFetch';
import {Route} from 'react-router-dom';
import { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > * + *': {
        marginLeft: theme.spacing(2),
      },
    },
  }));

const ChartContent = ({value, send}) => {
    const [url, setUrl] = useState('https://disease.sh/v3/covid-19/historical/all?lastdays=')
    const [urlVaccine, setUrlVaccine] = useState('https://disease.sh/v3/covid-19/vaccine/coverage?lastdays=')
    const [data, loadData, error] = useFetch(url, '03/04/2020');
    const [dataVaccine, loadVaccine, errorVaccine] = useFetch(urlVaccine, '12/28/2020')
    const [windowSize, setWindowSize] = useState(window.innerWidth)
    const classes = useStyles();

    useEffect(() => {
        if(send) setUrl(`https://disease.sh/v3/covid-19/historical/${value || 'poland'}?lastdays=`)
        if(send) setUrlVaccine(`https://disease.sh/v3/covid-19/vaccine/coverage/countries/${value || 'poland'}?lastdays=`)

        window.addEventListener('resize', () => {
          setWindowSize(window.innerWidth)
        })
  
        return () => {
        window.removeEventListener('resize', () => {
          setWindowSize(window.innerWidth)
        })
      }

    }, [send, windowSize])

    const style = {
      display: 'flex',
      justifyContent: 'center', 
      paddingTop: '15px',
    }

return(
    <section>
    {loadData ?   <div style={{display: 'flex', justifyContent: 'center'}} className={classes.root}>
      <CircularProgress /></div> : 
        <>
            <Route exact path='/' render={(props) => error ? <div style={style}><span>Brak danych</span></div> : <SectionChartCases info={data.cases} size={windowSize} {...props}/>}/>
            <Route path='/deaths' render={(props) => error? <div style={style}><span>Brak danych</span></div> : <SectionChartDeaths info={data.deaths} size={windowSize} {...props}/>}/>
        </>}
        {loadVaccine ? null : <Route path='/vaccine' render={(props) => errorVaccine ? <div style={style}><span>Brak danych</span></div> : <SectionChartVaccine info={dataVaccine} size={windowSize} {...props}/>}/>}
    </section>
)
}

export default ChartContent;