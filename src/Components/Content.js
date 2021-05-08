import { useState } from 'react';
import SearchBox from './SearchBox';
import DailyAmount from './DailyAmount';
import Menu from './Menu';
import ChartContent from './ChartContent';

const Content = () => {
    const [value, setValue] = useState('');
    const [send, setSend] = useState(false);

return(
    <main style={{paddingBottom: '100px'}}>
        <SearchBox state={value} setState={setValue} setSend={setSend}/>
        <DailyAmount value={value} send={send} setSend={setSend}/>
        <Menu/>
        <ChartContent value={value} send={send}/>
    </main>
)
}

export default Content;