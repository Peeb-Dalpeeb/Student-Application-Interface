import { Users, Calendar, MessageCircle, UserPlus } from 'lucide-react';

export default function GroupsTab() {
  const groups = [
    {
      name: 'Algorithm Study Group',
      members: 8,
      subject: 'Data Structures & Algorithms',
      nextMeeting: 'Tomorrow, 3:00 PM',
      location: 'Library Room 204',
      color: 'bg-blue-500',
    },
    {
      name: 'ML Research Team',
      members: 6,
      subject: 'Machine Learning',
      nextMeeting: 'Friday, 2:00 PM',
      location: 'CS Building Lab 3',
      color: 'bg-green-500',
    },
    {
      name: 'Database Project Team',
      members: 5,
      subject: 'Database Systems',
      nextMeeting: 'Wed, 4:30 PM',
      location: 'Student Center 301',
      color: 'bg-orange-500',
    },
    {
      name: 'Operating Systems Debugging Squad',
      members: 7,
      subject: 'Operating Systems',
      nextMeeting: 'Thursday, 5:00 PM',
      location: 'Online - Zoom',
      color: 'bg-red-500',
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <h1 className="text-3xl mb-2">Study Groups</h1>
          <p className="text-gray-600">Collaborate with your peers and study together.</p>
        </div>
        <button className="bg-[#1294f2] hover:bg-[#0e7ad6] text-white py-3 px-6 rounded-xl flex items-center gap-2 transition-colors">
          <UserPlus size={20} />
          Create New Group
        </button>
      </div>

      {/* Groups List */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {groups.map((group) => (
          <div key={group.name} className="bg-white rounded-2xl shadow-sm p-6 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h3 className="text-xl mb-1">{group.name}</h3>
                <p className="text-sm text-gray-600">{group.subject}</p>
              </div>
              <div className={`${group.color} p-3 rounded-xl`}>
                <Users className="text-white" size={20} />
              </div>
            </div>

            <div className="space-y-3 mb-4">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[...Array(Math.min(group.members, 4))].map((_, i) => (
                    <div key={i} className={`${group.color} size-8 rounded-full border-2 border-white flex items-center justify-center text-white text-xs`}>
                      {String.fromCharCode(65 + i)}
                    </div>
                  ))}
                </div>
                <span className="text-sm text-gray-600">{group.members} members</span>
              </div>

              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Calendar size={16} />
                <span>{group.nextMeeting}</span>
              </div>

              <div className="flex items-center gap-2 text-sm text-gray-600">
                <MessageCircle size={16} />
                <span>{group.location}</span>
              </div>
            </div>

            <div className="flex gap-2">
              <button className="flex-1 bg-gray-50 hover:bg-gray-100 text-gray-700 py-2 px-4 rounded-lg transition-colors">
                View Details
              </button>
              <button className={`${group.color} hover:opacity-90 text-white py-2 px-4 rounded-lg transition-opacity`}>
                Join Meeting
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Suggested Groups */}
      <div className="bg-white rounded-2xl shadow-sm p-6">
        <h2 className="text-xl mb-4">Suggested Groups</h2>
        <div className="space-y-3">
          {['Software Engineering Collaboration', 'Computer Networks Discussion', 'Competitive Programming'].map((name) => (
            <div key={name} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
              <div className="flex items-center gap-3">
                <div className="bg-gray-300 size-10 rounded-full flex items-center justify-center">
                  <Users size={20} className="text-gray-600" />
                </div>
                <div>
                  <h3 className="font-medium">{name}</h3>
                  <p className="text-sm text-gray-600">{Math.floor(Math.random() * 10) + 3} members</p>
                </div>
              </div>
              <button className="bg-[#1294f2] hover:bg-[#0e7ad6] text-white py-2 px-4 rounded-lg transition-colors">
                Join
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
