import React from 'react'
import { useParams } from 'react-router'
import CountdownTimer from '../../../components/eventdetail/countdowntimer'
import EventDetailSection from '../../../components/eventdetail/eventdetailsection'
import SpeakerSection from '../../../components/eventdetail/speakersection'
import AgendaSection from '../../../components/eventdetail/agendasection'

const SingleEvent = () => {
  return (
    <section className='w-full flex flex-col items-center'>
      <header>
      <CountdownTimer 
        // eventDate={myEventDate} 
        // eventName="PRODUCT LAUNCH" 
      />
      </header>

      <EventDetailSection />
      <div className='bg-primary mt-10 p-10 flex flex-col items-center w-full mx-auto'>
        <h3 className='mb-10 text-white text-3xl font-headerFont'>ABOUT THIS EVENT</h3>
         <p className='text-white text-center font-textFont'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi nesciunt distinctio magnam placeat doloremque explicabo repellat tempore et praesentium incidunt! Assumenda, beatae. Eveniet, ab iste! Rerum numquam quaerat libero ex!</p>

      </div>
      <SpeakerSection />
      <AgendaSection />
    </section>
  )
}

export default SingleEvent
