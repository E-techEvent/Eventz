import React, { useState } from 'react';

// Dummy reviews data
const reviewsData = [
  { 
    id: 1, 
    eventName: 'Tech Conference 2025', 
    userName: 'John Smith', 
    rating: 5, 
    comment: 'Excellent event! The speakers were knowledgeable and the networking opportunities were fantastic.',
    date: 'Feb 16, 2025',
    status: 'Published'
  },
  { 
    id: 2, 
    eventName: 'Finance Summit', 
    userName: 'Sarah Johnson', 
    rating: 4, 
    comment: 'Great content and well organized. Would have liked more Q&A time with speakers.',
    date: 'Feb 13, 2025',
    status: 'Published'
  },
  { 
    id: 3, 
    eventName: 'Developer Meetup', 
    userName: 'Michael Brown', 
    rating: 2, 
    comment: 'The venue was too small and the audio system was poor. Content was good though.',
    date: 'Feb 11, 2025',
    status: 'Published'
  },
  { 
    id: 4, 
    eventName: 'Tech Conference 2025', 
    userName: 'Emma Wilson', 
    rating: 5, 
    comment: 'One of the best tech conferences I\'ve attended. Will definitely come back next year!',
    date: 'Feb 16, 2025',
    status: 'Published'
  },
  { 
    id: 5, 
    eventName: 'AI Workshop', 
    userName: 'James Taylor', 
    rating: 3, 
    comment: 'The content was advanced as advertised, but the workshop portion felt rushed.',
    date: 'Feb 6, 2025',
    status: 'Pending'
  },
  { 
    id: 6, 
    eventName: 'Blockchain Summit', 
    userName: 'Olivia Davis', 
    rating: 1, 
    comment: 'Very disappointing. Most of the content was basic and speakers were unprepared.',
    date: 'Feb 4, 2025',
    status: 'Pending'
  },
  { 
    id: 7, 
    eventName: 'UX Design Conference', 
    userName: 'William Martinez', 
    rating: 4, 
    comment: 'Excellent workshops and great networking opportunities. The venue was perfect.',
    date: 'Jan 29, 2025',
    status: 'Published'
  },
  { 
    id: 8, 
    eventName: 'Data Science Forum', 
    userName: 'Sophia Anderson', 
    rating: 5, 
    comment: 'Fantastic event with cutting-edge presentations. Looking forward to next year!',
    date: 'Jan 26, 2025',
    status: 'Published'
  },
];

const ReviewsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [ratingFilter, setRatingFilter] = useState('All');
  
  // Filter reviews based on search term, status filter, and rating filter
  const filteredReviews = reviewsData.filter(review => {
    const matchesSearch = review.eventName.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         review.userName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         review.comment.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'All' || review.status === statusFilter;
    const matchesRating = ratingFilter === 'All' || review.rating === parseInt(ratingFilter);
    return matchesSearch && matchesStatus && matchesRating;
  });

  // Calculate average rating
  const averageRating = reviewsData.reduce((sum, review) => sum + review.rating, 0) / reviewsData.length;

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Reviews Management</h2>
        <div className="flex items-center">
          <div className="mr-2 text-lg font-semibold">Average Rating:</div>
          <div className="flex items-center">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg 
                key={star}
                xmlns="http://www.w3.org/2000/svg" 
                className={`h-5 w-5 ${star <= Math.round(averageRating) ? 'text-yellow-400' : 'text-gray-300'}`} 
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            <span className="ml-1 text-lg font-semibold">{averageRating.toFixed(1)}</span>
          </div>
        </div>
      </div>
      
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600">{reviewsData.length}</div>
            <div className="text-sm text-gray-500 mt-1">Total Reviews</div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <div className="text-center">
            <div className="text-4xl font-bold text-green-600">{reviewsData.filter(review => review.status === 'Published').length}</div>
            <div className="text-sm text-gray-500 mt-1">Published</div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <div className="text-center">
            <div className="text-4xl font-bold text-yellow-600">{reviewsData.filter(review => review.status === 'Pending').length}</div>
            <div className="text-sm text-gray-500 mt-1">Pending</div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-600">{reviewsData.filter(review => review.rating >= 4).length}</div>
            <div className="text-sm text-gray-500 mt-1">High Rated (4-5)</div>
          </div>
        </div>
      </div>
      
      {/* Filters */}
      <div className="bg-white p-4 rounded-lg shadow mb-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex-1">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search reviews..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <label className="text-sm font-medium text-gray-700">Status:</label>
            <select
              className="border border-gray-300 rounded-md py-2 pl-3 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option value="All">All</option>
              <option value="Published">Published</option>
              <option value="Pending">Pending</option>
            </select>
            
            <label className="text-sm font-medium text-gray-700">Rating:</label>
            <select
              className="border border-gray-300 rounded-md py-2 pl-3 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={ratingFilter}
              onChange={(e) => setRatingFilter(e.target.value)}
            >
              <option value="All">All</option>
              <option value="5">5 Stars</option>
              <option value="4">4 Stars</option>
              <option value="3">3 Stars</option>
              <option value="2">2 Stars</option>
              <option value="1">1 Star</option>
            </select>
          </div>
        </div>
      </div>
      
      {/* Reviews List */}
      <div className="space-y-4">
        {filteredReviews.map((review) => (
          <div key={review.id} className="bg-white rounded-lg shadow overflow-hidden">
            <div className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{review.eventName}</h3>
                  <p className="text-sm text-gray-600">by {review.userName} • {review.date}</p>
                </div>
                <div className="flex items-center">
                  <div className="flex mr-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg 
                        key={star}
                        xmlns="http://www.w3.org/2000/svg" 
                        className={`h-5 w-5 ${star <= review.rating ? 'text-yellow-400' : 'text-gray-300'}`} 
                        viewBox="0 0 20 20" 
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    review.status === 'Published' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {review.status}
                  </span>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-gray-800">{review.comment}</p>
              </div>
              <div className="mt-4 flex justify-end space-x-3">
                {review.status === 'Pending' && (
                  <button className="px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700">
                    Approve
                  </button>
                )}
                <button className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700">
                  Reply
                </button>
                <button className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700">
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Pagination */}
      <div className="mt-6 flex items-center justify-between">
        <div className="flex-1 flex justify-between sm:hidden">
          <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
            Previous
          </button>
          <button className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
            Next
          </button>
        </div>
        <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
          <div>
            <p className="text-sm text-gray-700">
              Showing <span className="font-medium">1</span> to <span className="font-medium">{filteredReviews.length}</span> of{' '}
              <span className="font-medium">{filteredReviews.length}</span> results
            </p>
          </div>
          <div>
            <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
              <button className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                <span className="sr-only">Previous</span>
                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </button>
              <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                1
              </button>
              <button className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                <span className="sr-only">Next</span>
                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </button>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewsPage;