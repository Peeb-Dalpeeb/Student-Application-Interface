import { TrendingUp, TrendingDown } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, Legend } from 'recharts';

export default function GradesTab() {
  const courses = [
    { name: 'Data Structures & Algorithms', code: 'CS 301', grade: 'A', percentage: 92, credits: 4, color: 'bg-blue-500' },
    { name: 'Computer Networks', code: 'CS 405', grade: 'A-', percentage: 88, credits: 3, color: 'bg-purple-500' },
    { name: 'Machine Learning', code: 'CS 510', grade: 'B+', percentage: 85, credits: 4, color: 'bg-green-500' },
    { name: 'Database Systems', code: 'CS 420', grade: 'A', percentage: 94, credits: 3, color: 'bg-orange-500' },
    { name: 'Operating Systems', code: 'CS 450', grade: 'B+', percentage: 87, credits: 4, color: 'bg-red-500' },
    { name: 'Software Engineering', code: 'CS 480', grade: 'A-', percentage: 90, credits: 3, color: 'bg-indigo-500' },
  ];

  const gradeDistribution = [
    { name: 'CS 301', grade: 92 },
    { name: 'CS 405', grade: 88 },
    { name: 'CS 510', grade: 85 },
    { name: 'CS 420', grade: 94 },
    { name: 'CS 450', grade: 87 },
    { name: 'CS 480', grade: 90 },
  ];

  const semesterProgress = [
    { week: 'Week 1', gpa: 3.5 },
    { week: 'Week 4', gpa: 3.6 },
    { week: 'Week 8', gpa: 3.7 },
    { week: 'Week 12', gpa: 3.8 },
    { week: 'Current', gpa: 3.8 },
  ];

  const calculateGPA = () => {
    const totalPoints = courses.reduce((sum, course) => {
      const gradePoints: { [key: string]: number } = {
        'A': 4.0, 'A-': 3.7, 'B+': 3.3, 'B': 3.0, 'B-': 2.7, 'C+': 2.3, 'C': 2.0
      };
      return sum + (gradePoints[course.grade] || 0) * course.credits;
    }, 0);
    const totalCredits = courses.reduce((sum, course) => sum + course.credits, 0);
    return (totalPoints / totalCredits).toFixed(2);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl mb-2">Academic Performance</h1>
        <p className="text-gray-600">Track your grades and overall progress.</p>
      </div>

      {/* GPA Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <p className="text-gray-600 text-sm mb-1">Current GPA</p>
          <div className="flex items-end justify-between">
            <p className="text-4xl">{calculateGPA()}</p>
            <div className="flex items-center gap-1 text-green-500">
              <TrendingUp size={20} />
              <span className="text-sm">+0.2</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <p className="text-gray-600 text-sm mb-1">Total Credits</p>
          <p className="text-4xl">{courses.reduce((sum, c) => sum + c.credits, 0)}</p>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <p className="text-gray-600 text-sm mb-1">Average Grade</p>
          <p className="text-4xl">{Math.round(courses.reduce((sum, c) => sum + c.percentage, 0) / courses.length)}%</p>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <h2 className="text-xl mb-4">Grade Distribution</h2>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={gradeDistribution}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis domain={[0, 100]} />
              <Tooltip />
              <Bar dataKey="grade" fill="#1294f2" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <h2 className="text-xl mb-4">GPA Progress</h2>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={semesterProgress}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="week" />
              <YAxis domain={[3.0, 4.0]} />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="gpa" stroke="#1294f2" strokeWidth={3} dot={{ r: 6 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Course Grades */}
      <div className="bg-white rounded-2xl shadow-sm p-6">
        <h2 className="text-xl mb-4">Course Grades</h2>
        <div className="space-y-4">
          {courses.map((course) => (
            <div key={course.code} className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
              <div className={`${course.color} size-12 rounded-lg flex items-center justify-center flex-shrink-0 text-white text-xl`}>
                {course.grade}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-medium truncate">{course.name}</h3>
                <p className="text-sm text-gray-600">{course.code} • {course.credits} Credits</p>
              </div>
              <div className="flex items-center gap-4 flex-shrink-0">
                <div className="text-right">
                  <p className="font-medium">{course.percentage}%</p>
                  <p className="text-sm text-gray-600">Score</p>
                </div>
                <div className="w-24 bg-gray-200 h-2 rounded-full overflow-hidden">
                  <div 
                    className={`${course.color} h-full`} 
                    style={{ width: `${course.percentage}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
