import { useState } from 'react';
import { Calendar, Clock, Upload } from 'lucide-react';

export default function EventForm() {
  const [formData, setFormData] = useState({
    eventName: '',
    date: '',
    time: '',
    eventDetails: '',
    additionalInfo: ''
  });
  
  const [image, setImage] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };
  
  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };
  
  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };
  
  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setImage(e.dataTransfer.files[0]);
    }
  };
  
  const handleSubmit = () => {
    // Here you would typically send the data to your backend
    console.log('Form submitted:', { ...formData, image });
    // Reset form after submission if needed
    // setFormData({ eventName: '', date: '', time: '', eventDetails: '', additionalInfo: '' });
    // setImage(null);
  };
  
  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-lg">
      <div>
        {/* Event Name */}
        <div className="mb-4">
          <input
            type="text"
            name="eventName"
            value={formData.eventName}
            onChange={handleChange}
            placeholder="Event Name"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
        
        {/* Date and Time */}
        <div className="flex gap-4 mb-4">
          <div className="relative flex-1">
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              placeholder="Date"
              className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
            <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" size={18} />
          </div>
          
          <div className="relative flex-1">
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              placeholder="Time"
              className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
            <Clock className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" size={18} />
          </div>
        </div>
        
        {/* Event Details */}
        <div className="mb-4">
          <textarea
            name="eventDetails"
            value={formData.eventDetails}
            onChange={handleChange}
            placeholder="Event Details"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 min-h-32"
          />
        </div>
        
        {/* Image Upload */}
        <div 
          className={`mb-4 border-2 border-dashed rounded-md p-6 text-center ${isDragging ? 'border-blue-500 bg-blue-50' : 'border-gray-300'}`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <div className="flex flex-col items-center justify-center">
            <Upload className="w-8 h-8 text-gray-400 mb-2" />
            <p className="font-medium text-gray-700">Upload Image</p>
            <p className="text-sm text-gray-500 mb-2">or drop the flyer here</p>
            {image && (
              <p className="text-sm text-blue-500">{image.name}</p>
            )}
            <input
              type="file"
              id="image-upload"
              onChange={handleImageChange}
              className="hidden"
              accept="image/*"
            />
            <label 
              htmlFor="image-upload" 
              className="cursor-pointer text-sm text-gray-500 hover:text-blue-500"
            >
              Browse files
            </label>
          </div>
        </div>
        
        {/* Additional Information */}
        <div className="mb-6">
          <input
            type="text"
            name="additionalInfo"
            value={formData.additionalInfo}
            onChange={handleChange}
            placeholder="Optional (Any other information)"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
        
        {/* Submit Button */}
        <div className="flex justify-end">
          <button
            onClick={handleSubmit}
            className="px-6 py-2 bg-[var(--color-primary)] text-white font-medium rounded-md hover:bg-[var(--color-primary-hover)] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}