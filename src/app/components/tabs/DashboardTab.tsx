import { BookOpen, Users, Calendar, TrendingUp } from 'lucide-react';

export default function DashboardTab() {
  const stats = [
    { label: 'Active Classes', value: '6', icon: BookOpen, color: 'bg-blue-500' },
    { label: 'Study Groups', value: '4', icon: Users, color: 'bg-green-500' },
    { label: 'Upcoming Events', value: '8', icon: Calendar, color: 'bg-purple-500' },
    { label: 'GPA', value: '3.8', icon: TrendingUp, color: 'bg-orange-500' },
  ];

  const upcomingClasses = [
    { name: 'Data Structures', time: '9:00 AM - 10:30 AM', room: 'Room 301' },
    { name: 'Computer Networks', time: '11:00 AM - 12:30 PM', room: 'Room 205' },
    { name: 'Machine Learning', time: '2:00 PM - 3:30 PM', room: 'Room 412' },
  ];

  const recentActivity = [
    { action: 'Submitted assignment', subject: 'Algorithm Design', time: '2 hours ago' },
    { action: 'Joined study group', subject: 'Operating Systems', time: '5 hours ago' },
    { action: 'Downloaded lecture notes', subject: 'Database Systems', time: '1 day ago' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl mb-2">Welcome back, Aster!</h1>
        <p className="text-gray-600">Here's what's happening with your studies today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">{stat.label}</p>
                <p className="text-3xl mt-2">{stat.value}</p>
              </div>
              <div className={`${stat.color} p-3 rounded-xl`}>
                <stat.icon className="text-white" size={24} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Today's Schedule */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <h2 className="text-xl mb-4">Today's Schedule</h2>
          <div className="space-y-4">
            {upcomingClasses.map((cls) => (
              <div key={cls.name} className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                <div className="bg-blue-500 size-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <BookOpen className="text-white" size={20} />
                </div>
                <div>
                  <h3 className="font-medium">{cls.name}</h3>
                  <p className="text-sm text-gray-600">{cls.time}</p>
                  <p className="text-sm text-gray-500">{cls.room}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <h2 className="text-xl mb-4">Recent Activity</h2>
          <div className="space-y-4">
            {recentActivity.map((activity, idx) => (
              <div key={idx} className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                <div className="bg-green-500 size-2 rounded-full mt-2 flex-shrink-0"></div>
                <div className="flex-1">
                  <h3 className="font-medium">{activity.action}</h3>
                  <p className="text-sm text-gray-600">{activity.subject}</p>
                  <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
