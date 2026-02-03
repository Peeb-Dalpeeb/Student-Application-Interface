import { Trash2, RotateCcw, X, AlertTriangle } from 'lucide-react';

export default function TrashTab() {
  const trashedItems = [
    {
      name: 'Old Assignment Draft.docx',
      subject: 'Data Structures & Algorithms',
      deletedDate: '2 days ago',
      type: 'assignment',
    },
    {
      name: 'Practice Exam Solutions.pdf',
      subject: 'Computer Networks',
      deletedDate: '5 days ago',
      type: 'document',
    },
    {
      name: 'Group Project Notes.txt',
      subject: 'Software Engineering',
      deletedDate: '1 week ago',
      type: 'notes',
    },
    {
      name: 'Lecture Recording - Week 3.mp4',
      subject: 'Machine Learning',
      deletedDate: '2 weeks ago',
      type: 'video',
    },
    {
      name: 'Database Schema v1.sql',
      subject: 'Database Systems',
      deletedDate: '3 weeks ago',
      type: 'code',
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl mb-2">Trash</h1>
        <p className="text-gray-600">Items deleted in the last 30 days. Restore or permanently delete them.</p>
      </div>

      {/* Warning Banner */}
      <div className="bg-orange-50 border border-orange-200 rounded-xl p-4 flex items-start gap-3">
        <AlertTriangle className="text-orange-500 flex-shrink-0" size={20} />
        <div>
          <p className="font-medium text-orange-900">Items will be permanently deleted after 30 days</p>
          <p className="text-sm text-orange-700 mt-1">Make sure to restore any files you need before they're gone forever.</p>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="flex flex-wrap gap-3">
        <button className="bg-white hover:bg-gray-50 text-gray-700 border border-gray-200 py-2 px-4 rounded-lg transition-colors flex items-center gap-2">
          <RotateCcw size={18} />
          Restore All
        </button>
        <button className="bg-white hover:bg-red-50 text-red-600 border border-red-200 py-2 px-4 rounded-lg transition-colors flex items-center gap-2">
          <Trash2 size={18} />
          Empty Trash
        </button>
      </div>

      {/* Trashed Items List */}
      {trashedItems.length > 0 ? (
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <div className="divide-y divide-gray-100">
            {trashedItems.map((item, idx) => (
              <div key={idx} className="flex items-center gap-4 p-6 hover:bg-gray-50 transition-colors">
                <div className="flex-shrink-0">
                  <div className="bg-red-100 p-3 rounded-lg">
                    <Trash2 className="text-red-500" size={20} />
                  </div>
                </div>
                
                <div className="flex-1 min-w-0">
                  <h3 className="font-medium truncate">{item.name}</h3>
                  <p className="text-sm text-gray-600">{item.subject}</p>
                  <p className="text-xs text-gray-500 mt-1">Deleted {item.deletedDate}</p>
                </div>

                <div className="flex items-center gap-2 flex-shrink-0">
                  <button className="bg-green-500 hover:bg-green-600 text-white p-2 rounded-lg transition-colors" title="Restore">
                    <RotateCcw size={18} />
                  </button>
                  <button className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-lg transition-colors" title="Delete Permanently">
                    <X size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="bg-white rounded-2xl shadow-sm p-12 text-center">
          <div className="bg-gray-100 size-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <Trash2 className="text-gray-400" size={32} />
          </div>
          <h3 className="text-xl mb-2">Trash is empty</h3>
          <p className="text-gray-600">Items you delete will appear here</p>
        </div>
      )}

      {/* Storage Info */}
      <div className="bg-white rounded-2xl shadow-sm p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-600 text-sm">Space used by trash</p>
            <p className="text-2xl mt-1">24.3 MB</p>
          </div>
          <button className="bg-red-500 hover:bg-red-600 text-white py-2 px-6 rounded-lg transition-colors">
            Free Up Space
          </button>
        </div>
      </div>
    </div>
  );
}
