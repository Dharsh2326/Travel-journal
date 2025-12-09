import Header from './component/Header.jsx';
import Entry from './component/Entry.jsx';
import data from './data.js'
export default function App(){
    const entryElements = data.map((entry)=>{
        return(
            <Entry 
                key={entry.id}
                img={entry.img}
                title={entry.title}
                country={entry.country}
                googleMapsLink={entry.googleMapsLink}
                dates={entry.dates}
                text={entry.text}
            />
        )
    })
    console.log(entryElements);
    return(
        <>
            <Header />
            <div className="container">
                {entryElements}
            </div>
           
        </>
    );
}