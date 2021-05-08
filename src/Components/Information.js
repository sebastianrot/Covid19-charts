import './Information.css';

const Information = () => {
    return(
        <main className='main-info'>

            <span style={{fontSize: '17px', fontWeight: '600'}}>ENG</span>
            <section>
            Hello, my name is Sebastian and I created this website to show the statistics of the coronavirus pandemic. Data is provided via disease.sh.
            Please contact them for any data inconsistencies. If the number in the statistics is equal to zero, it means that the data was not correct.
            </section>
            <br />
            <span style={{fontSize: '17px', fontWeight: '600'}}>PL</span>
            <section>
            Witam, mam na imię Sebastian i stworzyłem tą stronę żeby pokazać statystyki pandemii koronawirusa. Dane są dostarczne przez disease.sh. Wszelki niezgodności danych proszę kontaktować do nich. 
            Jeśli w statystykach ilość jest równa zero oznacz to ,że dane nie były prawidłowe. 
            </section>
        </main>
    )
}

export default Information