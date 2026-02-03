import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import StudentSidebar from '@/app/components/StudentSidebar';
import DashboardTab from '@/app/components/tabs/DashboardTab';
import ClassesTab from '@/app/components/tabs/ClassesTab';
import GroupsTab from '@/app/components/tabs/GroupsTab';
import ScheduleTab from '@/app/components/tabs/ScheduleTab';
import GradesTab from '@/app/components/tabs/GradesTab';
import DownloadsTab from '@/app/components/tabs/DownloadsTab';
import SettingsTab from '@/app/components/tabs/SettingsTab';
import TrashTab from '@/app/components/tabs/TrashTab';
import LogoutTab from '@/app/components/tabs/LogoutTab';

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <DashboardTab />;
      case 'classes':
        return <ClassesTab />;
      case 'groups':
        return <GroupsTab />;
      case 'schedule':
        return <ScheduleTab />;
      case 'grades':
        return <GradesTab />;
      case 'downloads':
        return <DownloadsTab />;
      case 'settings':
        return <SettingsTab />;
      case 'trash':
        return <TrashTab />;
      case 'logout':
        return <LogoutTab onCancel={() => setActiveTab('dashboard')} />;
      default:
        return <DashboardTab />;
    }
  };

  return (
    <div className="min-h-screen bg-[#f5f7fa]">
      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 bg-white shadow-sm z-40 px-4 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-['Poppins',sans-serif] font-medium">Student Portal</h1>
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-40 mt-[72px]"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 h-screen w-[385px] bg-white z-50 transition-transform duration-300 ease-in-out
          lg:translate-x-0
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
          lg:shadow-xl
        `}
      >
        <StudentSidebar
          activeTab={activeTab}
          onTabChange={setActiveTab}
          onClose={() => setSidebarOpen(false)}
        />
      </aside>

      {/* Main Content */}
      <main
        className={`
          min-h-screen pt-20 lg:pt-8 px-4 md:px-8 pb-8
          transition-all duration-300
          lg:ml-[385px]
        `}
      >
        <div className="max-w-[1400px] mx-auto">
          {renderContent()}
        </div>
      </main>
    </div>
  );
}
