import React from 'react';

const ProfileComponent = () => {
  return (
    <div className="flex items-center px-4 py-3 border-b border-gray-200">
      <div className="flex-shrink-0">
        <img
          className="h-10 w-10 rounded-full"
          src="https://via.placeholder.com/150"
          alt="Profile picture"
        />
      </div>
      <div className="ml-3">
        <div className="text-base font-medium text-gray-800">John Doe</div>
        <div className="text-sm font-medium text-gray-500">
          john.doe@example.com
        </div>
        <div className="text-sm font-medium text-gray-500">
          123 Main St, Anytown, USA
        </div>
        <div className="text-sm font-medium text-gray-500">
          (123) 456-7890
        </div>
      </div>
    </div>
  );
};

export default ProfileComponent;
