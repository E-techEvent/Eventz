import React, { useState, useEffect } from 'react';
import { useParams,Link } from 'react-router';
import { FaUser, FaEnvelope, FaPhone, FaBuilding, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

// Dummy organizers data
const organizersData = [
  { 
    id: 'O001', 
    name: 'David Wilson', 
    email: 'david@techevents.com', 
    phone: '+1 (555) 123-4567',
    company: 'Tech Events Inc.', 
    website: 'www.techevents.com',
    address: '123 Conference Ave, New York, NY 10001',
    bio: 'David has over 15 years of experience organizing tech conferences and events across North America. Specializing in developer-focused gatherings, he has built a reputation for creating engaging and educational experiences.',
    events: 12, 
    totalAttendees: 3600,
    totalRevenue: '$720,000',
    upcomingEvents: 3,
    joinDate: 'Jan 15, 2023',
    status: 'Active',
    profileImage: 'https://randomuser.me/api/portraits/men/32.jpg',
    socialMedia: {
      twitter: '@davidwilson',
      linkedin: 'linkedin.com/in/davidwilson',
      instagram: '@techevents_david'
    }
  },
  { 
    id: 'O002', 
    name: 'Lisa Johnson', 
    email: 'lisa@conferencemasters.com', 
    phone: '+1 (555) 987-6543',
    company: 'Conference Masters', 
    website: 'www.conferencemasters.com',
    address: '456 Summit Blvd, Chicago, IL 60601',
    bio: 'Lisa Johnson is the founder of Conference Masters, specializing in finance and business events. With an MBA from Chicago University, she brings analytical expertise to event planning and execution.',
    events: 8, 
    totalAttendees: 2400,
    totalRevenue: '$480,000',
    upcomingEvents: 2,
    joinDate: 'Mar 22, 2023',
    status: 'Active',
    profileImage: 'https://randomuser.me/api/portraits/women/44.jpg',
    socialMedia: {
      twitter: '@lisajohnson',
      linkedin: 'linkedin.com/in/lisajohnson',
      instagram: '@lisa_conferences'
    }
  },
  { 
    id: 'O003', 
    name: 'Robert Smith', 
    email: 'robert@summitgroup.com', 
    phone: '+1 (555) 456-7890',
    company: 'Summit Group', 
    website: 'www.summitgroup.com',
    address: '789 Convention Center Dr, San Francisco, CA 94103',
    bio: 'Robert specializes in creating immersive tech conferences that blend education with networking opportunities. His background in software development gives him unique insights into what developers want from events.',
    events: 5, 
    totalAttendees: 1500,
    totalRevenue: '$300,000',
    upcomingEvents: 1,
    joinDate: 'May 10, 2023',
    status: 'Inactive',
    profileImage: 'https://randomuser.me/api/portraits/men/67.jpg',
    socialMedia: {
      twitter: '@robertsmith',
      linkedin: 'linkedin.com/in/robertsmith',
      instagram: '@robert_summit'
    }
  }
];

const OrganizerDetailPage = () => {
  const {id} = useParams();
  const [organizer, setOrganizer] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    website: '',
    address: '',
    bio: '',
    status: ''
  });

  // Find the organizer with the matching ID
  useEffect(() => {
    const foundOrganizer = organizersData.find(o => o.id === id);
    if (foundOrganizer) {
      setOrganizer(foundOrganizer);
      setFormData({
        name: foundOrganizer.name,
        email: foundOrganizer.email,
        phone: foundOrganizer.phone,
        company: foundOrganizer.company,
        website: foundOrganizer.website,
        address: foundOrganizer.address,
        bio: foundOrganizer.bio,
        status: foundOrganizer.status
      });
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, this would update the organizer in the database
    // For now, we'll just update our local state
    setOrganizer(prev => ({
      ...prev,
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      company: formData.company,
      website: formData.website,
      address: formData.address,
      bio: formData.bio,
      status: formData.status
    }));
    setIsEditing(false);
  };

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  if (!organizer) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-center">
          <h2 className="text-xl font-semibold text-gray-700">Organizer not found</h2>
          <p className="mt-2 text-gray-500">The organizer you're looking for doesn't exist or has been removed.</p>
          <Link to="/dashboard/admin/organizers" className="mt-4 inline-block bg-[var(--color-primary)] text-white px-4 py-2 rounded hover:bg-[var(--color-primary-hover)]">
            Back to Organizers
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-full mx-auto">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <div>
          <Link to="/dashboard/admin/organizers" className="text-[var(--color-primary)] hover:text-[var(--color-primary-hover)] flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back to Organizers
          </Link>
          <h2 className="text-xl sm:text-2xl font-bold mt-2">Organizer Details</h2>
        </div>
        <div>
          {!isEditing ? (
            <button 
              onClick={toggleEdit}
              className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white font-medium py-2 px-4 rounded w-full sm:w-auto"
            >
              Edit Organizer
            </button>
          ) : (
            <button 
              onClick={toggleEdit}
              className="bg-gray-500 hover:bg-gray-600 text-white font-medium py-2 px-4 rounded mr-2 w-full sm:w-auto"
            >
              Cancel
            </button>
          )}
        </div>
      </div>

      {!isEditing ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
          {/* Profile Card */}
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] h-24"></div>
            <div className="relative px-4 sm:px-6 pb-6">
              <div className="absolute -top-12 left-4 sm:left-6">
                <img 
                  src={organizer.profileImage} 
                  alt={organizer.name} 
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-4 border-white object-cover"
                />
              </div>
              <div className="pt-12 sm:pt-16">
                <h3 className="text-lg sm:text-xl font-bold">{organizer.name}</h3>
                <p className="text-gray-600">{organizer.company}</p>
                <div className="mt-4 flex flex-wrap items-center gap-2">
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    organizer.status === 'Active' ? 'bg-[var(--color-secondary-hover)] text-[var(--color-primary)]' : 'bg-gray-200 text-gray-800'
                  }`}>
                    {organizer.status}
                  </span>
                  <span className="text-sm text-gray-500">Since {organizer.joinDate}</span>
                </div>
                <div className="mt-6 space-y-2">
                  <div className="flex items-center">
                    <FaEnvelope className="text-gray-500 mr-2 flex-shrink-0" />
                    <span className="text-sm sm:text-base break-all">{organizer.email}</span>
                  </div>
                  <div className="flex items-center">
                    <FaPhone className="text-gray-500 mr-2 flex-shrink-0" />
                    <span className="text-sm sm:text-base">{organizer.phone}</span>
                  </div>
                  <div className="flex items-center">
                    <FaBuilding className="text-gray-500 mr-2 flex-shrink-0" />
                    <span className="text-sm sm:text-base break-all">{organizer.website}</span>
                  </div>
                  <div className="flex items-start">
                    <FaMapMarkerAlt className="text-gray-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-sm sm:text-base">{organizer.address}</span>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <h4 className="font-semibold mb-2">Social Media</h4>
                  <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2 sm:gap-4">
                    {Object.entries(organizer.socialMedia).map(([platform, handle]) => (
                      <div key={platform} className="text-sm text-gray-600">
                        <span className="font-medium">{platform}:</span> {handle}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-4 sm:space-y-6">
            {/* Bio Section */}
            <div className="bg-white rounded-lg shadow p-4 sm:p-6">
              <h3 className="text-lg font-semibold mb-4 border-b pb-2">About</h3>
              <p className="text-gray-700 text-sm sm:text-base">{organizer.bio}</p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4">
              <div className="bg-white rounded-lg shadow p-3 sm:p-4">
                <div className="text-xs sm:text-sm text-gray-500">Total Events</div>
                <div className="text-lg sm:text-2xl font-bold">{organizer.events}</div>
              </div>
              <div className="bg-white rounded-lg shadow p-3 sm:p-4">
                <div className="text-xs sm:text-sm text-gray-500">Upcoming Events</div>
                <div className="text-lg sm:text-2xl font-bold">{organizer.upcomingEvents}</div>
              </div>
              <div className="bg-white rounded-lg shadow p-3 sm:p-4">
                <div className="text-xs sm:text-sm text-gray-500">Total Attendees</div>
                <div className="text-lg sm:text-2xl font-bold">{organizer.totalAttendees}</div>
              </div>
              <div className="bg-white rounded-lg shadow p-3 sm:p-4">
                <div className="text-xs sm:text-sm text-gray-500">Total Revenue</div>
                <div className="text-lg sm:text-2xl font-bold">{organizer.totalRevenue}</div>
              </div>
            </div>

            {/* Recent Events */}
            <div className="bg-white rounded-lg shadow p-4 sm:p-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-2">
                <h3 className="text-lg font-semibold">Recent Events</h3>
                <Link to={`/dashboard/admin/events${organizer.id}`} className="text-[var(--color-primary)] hover:text-[var(--color-primary-hover)] text-sm">
                  View All Events
                </Link>
              </div>
              <div className="space-y-3 sm:space-y-4">
                {[1, 2, 3].map((_, index) => (
                  <div key={index} className="flex flex-col sm:flex-row sm:items-center p-3 border rounded-lg hover:bg-gray-50 gap-3">
                    <div className="bg-[var(--color-secondary-hover)] text-[var(--color-primary)] p-3 rounded-lg self-start">
                      <FaCalendarAlt />
                    </div>
                    <div className="flex-grow">
                      <h4 className="font-medium">Tech Conference {2025 - index}</h4>
                      <p className="text-sm text-gray-500">May {15 - index * 5}, 2025</p>
                    </div>
                    <div className="mt-2 sm:mt-0">
                      <span className="px-2 py-1 text-xs rounded-full bg-[var(--color-secondary-hover)] text-[var(--color-primary)]">
                        Upcoming
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow p-4 sm:p-6">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-4 border-b pb-2">Personal Information</h3>
                
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                  />
                </div>
                
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                  />
                </div>
                
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                  />
                </div>
                
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                  <select
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                  >
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                  </select>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4 border-b pb-2">Company Information</h3>
                
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                  />
                </div>
                
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Website</label>
                  <input
                    type="text"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                  />
                </div>
                
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                  />
                </div>
              </div>
              
              <div className="md:col-span-2">
                <h3 className="text-lg font-semibold mb-4 border-b pb-2">Bio</h3>
                <div className="mb-4">
                  <textarea
                    name="bio"
                    value={formData.bio}
                    onChange={handleChange}
                    rows={5}
                    className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                  ></textarea>
                </div>
              </div>
            </div>
            
            <div className="mt-6 flex justify-end">
              <button
                type="submit"
                className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white font-medium py-2 px-6 rounded w-full sm:w-auto"
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default OrganizerDetailPage;
