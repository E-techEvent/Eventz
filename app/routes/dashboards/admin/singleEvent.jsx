import React from 'react';
import { useParams, Link } from 'react-router';
import EventDetailSection from '../../../../components/eventdetail/eventdetailsection';
import CountdownTimer from '../../../../components/eventdetail/countdowntimer';
import SpeakerSection from '../../../../components/eventdetail/speakersection';
import AgendaSection from '../../../../components/eventdetail/agendasection';

const AdminEventDetail = () => {
  const { id } = useParams();
  // In a real app, this would fetch from an API
  // In a real app, this would fetch from an API
  const event = {
    id: parseInt(id || '0'),
    name: `Event ${id}`,
    date: 'May 15, 2025',
    location: 'New York, NY',
    organizer: 'Tech Events Inc.',
    attendees: 230,
    status: 'Upcoming',
    featured: true,
    description: 'This is a detailed description of the event with all the information that organizers need to see.',
    agenda: [
      { time: '9:00 AM', title: 'Registration', description: 'Check-in and breakfast' },
      { time: '10:00 AM', title: 'Opening Keynote', description: 'Welcome and event introduction' }
    ],
    speakers: [
      { id: 1, name: 'John Doe', expertise: 'Technology', bio: 'John is a tech expert with 10+ years experience', imageUrl: '/images/speaker.jpg' },
      { id: 2, name: 'Jane Smith', expertise: 'Innovation', bio: 'Jane has been driving innovation in the industry', imageUrl: '/images/speaker.jpg' }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6 lg:p-8 font-textFont">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 font-headerFont">
            {event.name}
          </h1>
          <div className="flex flex-wrap justify-start sm:justify-end gap-3">
            <Link to={`/dashboard/admin/events/${id}/edit`}>
              <button className="px-5 py-2 bg-[var(--color-primary)] text-white rounded-lg shadow-md hover:bg-[var(--color-primary-hover)] transition duration-300 ease-in-out text-lg cursor-pointer">
                Edit Event
              </button>
            </Link>
            <button className="px-5 py-2 bg-red-600 text-white rounded-lg shadow-md hover:bg-red-700 transition duration-300 ease-in-out text-lg">
              Delete Event
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-5 font-headerFont">
                Event Details
              </h2>
              <div className="space-y-4 text-lg">
                <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                  <span className="font-semibold text-gray-600">Date:</span>
                  <span className="text-gray-800">{event.date}</span>
                </div>
                <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                  <span className="font-semibold text-gray-600">Location:</span>
                  <span className="text-gray-800">{event.location}</span>
                </div>
                <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                  <span className="font-semibold text-gray-600">Organizer:</span>
                  <span className="text-gray-800">{event.organizer}</span>
                </div>
                <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                  <span className="font-semibold text-gray-600">Attendees:</span>
                  <span className="text-gray-800">{event.attendees}</span>
                </div>
                <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                  <span className="font-semibold text-gray-600">Status:</span>
                  <span
                    className={`font-medium ${
                      event.status === 'Upcoming'
                        ? 'text-[var(--color-primary)]'
                        : 'text-gray-800'
                    }`}
                  >
                    {event.status}
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                  <span className="font-semibold text-gray-600">Featured:</span>
                  <span className="text-gray-800">{event.featured ? 'Yes' : 'No'}</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-5 font-headerFont">
                Description
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                {event.description}
              </p>
            </div>

            <AgendaSection agenda={event.agenda} />
            <SpeakerSection speakers={event.speakers} />
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 sticky top-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-5 font-headerFont">
                Event Countdown
              </h2>
              <CountdownTimer eventDate={event.date} eventName={event.name} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminEventDetail;
