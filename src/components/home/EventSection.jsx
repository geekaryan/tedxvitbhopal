import './EventSection.css'
import Inaug from '../../resources/inaug.png'
import CogChyr from '../../resources/cog-chyr.png'

const EventSection = () => {

    // handlers
    const showCard = (cardID) => {
        const card = document.getElementById(cardID)
        card.className = 'event-card show'
    }
    const hideCard = (cardID) => {
        const card = document.getElementById(cardID)
        card.className = 'event-card'
    }

    return(
        <section className='event-section-container'>
            <h1 className="event-section-title">The <span style={{color: '#eb0028'}}>Event</span> Timeline</h1>
            <section className='event-section'>
                <aside id='event-card-one' className='event-card' >
                    <img src={Inaug} alt="Inauguration" style={{width: "150px"}}/>
                    <figcaption className='event-name' style={{color: "#eb0028"}}>Inauguration</figcaption>
                </aside>
                <aside className='event-card-title up'>April 2023</aside>
                <aside id='event-card-three' className='event-card'>
                <p>There's more on the way!</p>
                </aside>
            </section>
            <section className='event-timeline'>
                <div className='event-connector'></div>
                <div 
                    onMouseLeave={() => hideCard('event-card-one')} 
                    onMouseEnter={() => showCard('event-card-one')} 
                    id='event-marker-one' 
                    className='event-marker'>
                </div>
                <div 
                    onMouseLeave={() => hideCard('event-card-two')} 
                    onMouseEnter={() => showCard('event-card-two')} 
                    id='event-marker-two' 
                    className='event-marker'>
                </div>
                <div 
                    onMouseLeave={() => hideCard('event-card-three')} 
                    onMouseEnter={() => showCard('event-card-three')} 
                    id='event-marker-three' 
                    className='event-marker'>
                </div>
            </section>
            <section className='event-section'>
                <aside className='event-card-title'>January 2023</aside>
                <aside id='event-card-two' className='event-card'>
                <img src={CogChyr} alt="Cognitive Chrysalis" style={{height: "150px"}}/>
                    <figcaption className='event-name' style={{color: "#58eacb"}}>Cognitive Chrysalis</figcaption>
                </aside>
                <button className='event-page-button'>Coming Soon...</button>
            </section>
        </section>
    )
}

export default EventSection