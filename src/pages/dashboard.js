import React from 'react';
import ProfileComponent from '../components/dashboard/profile';
import CalenderComponent from '../components/dashboard/calender';
import RecentActivities from '../components/dashboard/recentActivities';
import SidebarComponent from '../components/dashboard/sideBar';
import SearchBarComponent from '../components/dashboard/searchBar';
import FarmsComponent from '../components/dashboard/farms';


export const DashboardComponent=()=> {
  return (
    <div className="flex h-screen bg-gray-50">
      <SidebarComponent />
      <div className="flex-1 p-6 lg:p-10">
        <ProfileComponent />
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-10 mt-6 lg:mt-10">
          <div className="col-span-1 lg:col-span-8">
            <CalenderComponent />
            <RecentActivities />
          </div>
          <div className="col-span-1 lg:col-span-4">
            <SearchBarComponent />
            <FarmsComponent />
          </div>
        </div>
      </div>
    </div>
  );
}


