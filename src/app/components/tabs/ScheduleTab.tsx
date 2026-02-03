import { Clock, MapPin, Video } from 'lucide-react';

export default function ScheduleTab() {
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  
  const schedule = {
    Monday: [
      { time: '9:00 AM - 10:30 AM', class: 'Data Structures & Algorithms', room: 'Room 301', type: 'lecture' },
      { time: '10:00 AM - 11:30 AM', class: 'Software Engineering', room: 'Room 215', type: 'lecture' },
      { time: '2:00 PM - 3:30 PM', class: 'Machine Learning', room: 'Room 412', type: 'lecture' },
      { time: '3:00 PM - 4:00 PM', class: 'Algorithm Study Group', room: 'Library 204', type: 'group' },
    ],
    Tuesday: [
      { time: '11:00 AM - 12:30 PM', class: 'Computer Networks', room: 'Room 205', type: 'lecture' },
      { time: '3:30 PM - 5:00 PM', class: 'Database Systems', room: 'Room 308', type: 'lecture' },
    ],
    Wednesday: [
      { time: '9:00 AM - 10:30 AM', class: 'Data Structures & Algorithms', room: 'Room 301', type: 'lecture' },
      { time: '1:00 PM - 2:30 PM', class: 'Operating Systems', room: 'Room 410', type: 'lecture' },
      { time: '2:00 PM - 3:30 PM', class: 'Machine Learning', room: 'Room 412', type: 'lecture' },
      { time: '4:30 PM - 5:30 PM', class: 'Database Project Team', room: 'Student Center 301', type: 'group' },
    ],
    Thursday: [
      { time: '10:00 AM - 11:30 AM', class: 'Software Engineering', room: 'Room 215', type: 'lecture' },
      { time: '11:00 AM - 12:30 PM', class: 'Computer Networks', room: 'Room 205', type: 'lecture' },
      { time: '3:30 PM - 5:00 PM', class: 'Database Systems', room: 'Room 308', type: 'lecture' },
      { time: '5:00 PM - 6:00 PM', class: 'OS Debugging Squad', room: 'Online - Zoom', type: 'online' },
    ],
    Friday: [
      { time: '9:00 AM - 10:30 AM', class: 'Data Structures & Algorithms', room: 'Room 301', type: 'lecture' },
      { time: '1:00 PM - 2:30 PM', class: 'Operating Systems', room: 'Room 410', type: 'lecture' },
      { time: '2:00 PM - 3:00 PM', class: 'ML Research Team', room: 'CS Lab 3', type: 'group' },
    ],
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'lecture':
        return 'bg-blue-500';
      case 'group':
        return 'bg-green-500';
      case 'online':
        return 'bg-purple-500';
      default:
        return 'bg-gray-500';
    }
  };

  const getTypeIcon = (type: string) => {
    if (type === 'online') {
      return <Video size={16} className="text-white" />;
    }
    return <MapPin size={16} className="text-white" />;
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl mb-2">Weekly Schedule</h1>
        <p className="text-gray-600">Your classes and study group meetings for this week.</p>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-4 bg-white rounded-xl p-4">
        <div className="flex items-center gap-2">
          <div className="bg-blue-500 size-4 rounded"></div>
          <span className="text-sm text-gray-600">Lecture</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="bg-green-500 size-4 rounded"></div>
          <span className="text-sm text-gray-600">Study Group</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="bg-purple-500 size-4 rounded"></div>
          <span className="text-sm text-gray-600">Online</span>
        </div>
      </div>

      {/* Schedule Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {days.map((day) => (
          <div key={day} className="bg-white rounded-2xl shadow-sm p-6">
            <h2 className="text-xl mb-4 pb-3 border-b border-gray-100">{day}</h2>
            <div className="space-y-3">
              {schedule[day as keyof typeof schedule]?.map((item, idx) => (
                <div key={idx} className="relative pl-6 pb-4 last:pb-0">
                  <div className={`absolute left-0 top-1 ${getTypeColor(item.type)} size-5 rounded-full flex items-center justify-center`}>
                    {getTypeIcon(item.type)}
                  </div>
                  <div className="absolute left-[9px] top-6 bottom-0 w-0.5 bg-gray-200 last:hidden"></div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Clock size={14} className="text-gray-400" />
                      <span className="text-sm text-gray-600">{item.time}</span>
                    </div>
                    <h3 className="font-medium mb-1">{item.class}</h3>
                    <p className="text-sm text-gray-500">{item.room}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
