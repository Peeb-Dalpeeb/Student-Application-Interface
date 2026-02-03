import { FileText, Download, Clock, FolderOpen } from 'lucide-react';

export default function DownloadsTab() {
  const downloads = [
    {
      name: 'Algorithm Design Lecture Notes.pdf',
      subject: 'Data Structures & Algorithms',
      size: '2.4 MB',
      date: '2 hours ago',
      type: 'pdf',
    },
    {
      name: 'Network Protocols Assignment.docx',
      subject: 'Computer Networks',
      size: '1.8 MB',
      date: '5 hours ago',
      type: 'doc',
    },
    {
      name: 'ML Dataset - Training Data.zip',
      subject: 'Machine Learning',
      size: '45.2 MB',
      date: '1 day ago',
      type: 'zip',
    },
    {
      name: 'Database Schema Design.pdf',
      subject: 'Database Systems',
      size: '3.1 MB',
      date: '2 days ago',
      type: 'pdf',
    },
    {
      name: 'OS Process Management Slides.pptx',
      subject: 'Operating Systems',
      size: '5.6 MB',
      date: '3 days ago',
      type: 'ppt',
    },
    {
      name: 'Software Testing Guide.pdf',
      subject: 'Software Engineering',
      size: '1.2 MB',
      date: '4 days ago',
      type: 'pdf',
    },
    {
      name: 'Algorithms Textbook Chapter 5.pdf',
      subject: 'Data Structures & Algorithms',
      size: '8.9 MB',
      date: '1 week ago',
      type: 'pdf',
    },
    {
      name: 'Project Requirements Document.docx',
      subject: 'Software Engineering',
      size: '2.3 MB',
      date: '1 week ago',
      type: 'doc',
    },
  ];

  const getFileIcon = (type: string) => {
    const colors: { [key: string]: string } = {
      pdf: 'text-red-500',
      doc: 'text-blue-500',
      zip: 'text-purple-500',
      ppt: 'text-orange-500',
    };
    return <FileText className={colors[type] || 'text-gray-500'} size={24} />;
  };

  const categories = [
    { name: 'Lecture Notes', count: 12 },
    { name: 'Assignments', count: 8 },
    { name: 'Project Files', count: 5 },
    { name: 'Study Materials', count: 15 },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl mb-2">Downloads</h1>
        <p className="text-gray-600">Access your downloaded course materials and files.</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {categories.map((category) => (
          <div key={category.name} className="bg-white rounded-xl p-4 shadow-sm">
            <FolderOpen className="text-[#1294f2] mb-2" size={24} />
            <p className="text-2xl mb-1">{category.count}</p>
            <p className="text-sm text-gray-600">{category.name}</p>
          </div>
        ))}
      </div>

      {/* Downloads List */}
      <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
        <div className="p-6 border-b border-gray-100">
          <h2 className="text-xl">Recent Downloads</h2>
        </div>
        
        <div className="divide-y divide-gray-100">
          {downloads.map((file, idx) => (
            <div key={idx} className="flex items-center gap-4 p-6 hover:bg-gray-50 transition-colors">
              <div className="flex-shrink-0">
                {getFileIcon(file.type)}
              </div>
              
              <div className="flex-1 min-w-0">
                <h3 className="font-medium truncate">{file.name}</h3>
                <p className="text-sm text-gray-600">{file.subject}</p>
              </div>

              <div className="flex items-center gap-6 flex-shrink-0">
                <div className="hidden md:flex items-center gap-2 text-sm text-gray-600">
                  <Clock size={16} />
                  <span>{file.date}</span>
                </div>
                
                <div className="text-sm text-gray-600 hidden sm:block">
                  {file.size}
                </div>

                <button className="bg-[#1294f2] hover:bg-[#0e7ad6] text-white p-2 rounded-lg transition-colors">
                  <Download size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Storage Info */}
      <div className="bg-white rounded-2xl shadow-sm p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl">Storage Usage</h2>
          <p className="text-sm text-gray-600">78.5 GB of 100 GB used</p>
        </div>
        <div className="w-full bg-gray-200 h-3 rounded-full overflow-hidden">
          <div className="bg-[#1294f2] h-full" style={{ width: '78.5%' }}></div>
        </div>
      </div>
    </div>
  );
}
