import { BookOpen, Clock, Users, FileText } from 'lucide-react';

export default function ClassesTab() {
  const classes = [
    {
      name: 'Data Structures & Algorithms',
      code: 'CS 301',
      instructor: 'Dr. Sarah Johnson',
      schedule: 'Mon, Wed, Fri - 9:00 AM',
      students: 45,
      assignments: 3,
      color: 'bg-blue-500',
    },
    {
      name: 'Computer Networks',
      code: 'CS 405',
      instructor: 'Prof. Michael Chen',
      schedule: 'Tue, Thu - 11:00 AM',
      students: 38,
      assignments: 2,
      color: 'bg-purple-500',
    },
    {
      name: 'Machine Learning',
      code: 'CS 510',
      instructor: 'Dr. Emily Rodriguez',
      schedule: 'Mon, Wed - 2:00 PM',
      students: 32,
      assignments: 4,
      color: 'bg-green-500',
    },
    {
      name: 'Database Systems',
      code: 'CS 420',
      instructor: 'Prof. David Kim',
      schedule: 'Tue, Thu - 3:30 PM',
      students: 40,
      assignments: 2,
      color: 'bg-orange-500',
    },
    {
      name: 'Operating Systems',
      code: 'CS 450',
      instructor: 'Dr. Lisa Anderson',
      schedule: 'Wed, Fri - 1:00 PM',
      students: 35,
      assignments: 5,
      color: 'bg-red-500',
    },
    {
      name: 'Software Engineering',
      code: 'CS 480',
      instructor: 'Prof. James Wilson',
      schedule: 'Mon, Thu - 10:00 AM',
      students: 42,
      assignments: 1,
      color: 'bg-indigo-500',
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl mb-2">My Classes</h1>
          <p className="text-gray-600">You are enrolled in {classes.length} classes this semester.</p>
        </div>
      </div>

      {/* Classes Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {classes.map((cls) => (
          <div key={cls.code} className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
            <div className={`${cls.color} h-3`}></div>
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl mb-1">{cls.name}</h3>
                  <p className="text-sm text-gray-600">{cls.code}</p>
                </div>
                <div className={`${cls.color} p-3 rounded-xl`}>
                  <BookOpen className="text-white" size={20} />
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Users size={16} />
                  <span>{cls.instructor}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Clock size={16} />
                  <span>{cls.schedule}</span>
                </div>
              </div>

              <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-100">
                <div className="flex items-center gap-2">
                  <Users size={16} className="text-gray-400" />
                  <span className="text-sm text-gray-600">{cls.students} students</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileText size={16} className="text-gray-400" />
                  <span className="text-sm text-gray-600">{cls.assignments} assignments</span>
                </div>
              </div>

              <button className="w-full mt-4 bg-gray-50 hover:bg-gray-100 text-gray-700 py-2 px-4 rounded-lg transition-colors">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
