import { Bell, Lock, User, Globe, Moon, Mail, Smartphone } from 'lucide-react';

export default function SettingsTab() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl mb-2">Settings</h1>
        <p className="text-gray-600">Manage your account preferences and settings.</p>
      </div>

      {/* Profile Settings */}
      <div className="bg-white rounded-2xl shadow-sm p-6">
        <div className="flex items-center gap-3 mb-6">
          <User className="text-[#1294f2]" size={24} />
          <h2 className="text-xl">Profile Settings</h2>
        </div>
        
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-600 mb-2">Full Name</label>
              <input
                type="text"
                defaultValue="Aster Seawalker"
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1294f2]"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-2">Student ID</label>
              <input
                type="text"
                defaultValue="CS2024-0123"
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1294f2]"
                disabled
              />
            </div>
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-2">Email Address</label>
            <input
              type="email"
              defaultValue="aster.seawalker@university.edu"
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1294f2]"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-2">Major</label>
            <select className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1294f2]">
              <option>Computer Science</option>
              <option>Software Engineering</option>
              <option>Data Science</option>
              <option>Information Technology</option>
            </select>
          </div>
        </div>
      </div>

      {/* Notifications */}
      <div className="bg-white rounded-2xl shadow-sm p-6">
        <div className="flex items-center gap-3 mb-6">
          <Bell className="text-[#1294f2]" size={24} />
          <h2 className="text-xl">Notifications</h2>
        </div>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
            <div className="flex items-center gap-3">
              <Mail size={20} className="text-gray-600" />
              <div>
                <p className="font-medium">Email Notifications</p>
                <p className="text-sm text-gray-600">Receive updates via email</p>
              </div>
            </div>
            <label className="relative inline-block w-12 h-6">
              <input type="checkbox" defaultChecked className="sr-only peer" />
              <div className="w-full h-full bg-gray-300 peer-checked:bg-[#1294f2] rounded-full peer transition-colors cursor-pointer"></div>
              <div className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform peer-checked:translate-x-6"></div>
            </label>
          </div>

          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
            <div className="flex items-center gap-3">
              <Smartphone size={20} className="text-gray-600" />
              <div>
                <p className="font-medium">Push Notifications</p>
                <p className="text-sm text-gray-600">Get alerts on your device</p>
              </div>
            </div>
            <label className="relative inline-block w-12 h-6">
              <input type="checkbox" defaultChecked className="sr-only peer" />
              <div className="w-full h-full bg-gray-300 peer-checked:bg-[#1294f2] rounded-full peer transition-colors cursor-pointer"></div>
              <div className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform peer-checked:translate-x-6"></div>
            </label>
          </div>

          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
            <div className="flex items-center gap-3">
              <Bell size={20} className="text-gray-600" />
              <div>
                <p className="font-medium">Assignment Reminders</p>
                <p className="text-sm text-gray-600">Get reminded before deadlines</p>
              </div>
            </div>
            <label className="relative inline-block w-12 h-6">
              <input type="checkbox" defaultChecked className="sr-only peer" />
              <div className="w-full h-full bg-gray-300 peer-checked:bg-[#1294f2] rounded-full peer transition-colors cursor-pointer"></div>
              <div className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform peer-checked:translate-x-6"></div>
            </label>
          </div>
        </div>
      </div>

      {/* Appearance */}
      <div className="bg-white rounded-2xl shadow-sm p-6">
        <div className="flex items-center gap-3 mb-6">
          <Moon className="text-[#1294f2]" size={24} />
          <h2 className="text-xl">Appearance</h2>
        </div>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
            <div>
              <p className="font-medium">Dark Mode</p>
              <p className="text-sm text-gray-600">Switch to dark theme</p>
            </div>
            <label className="relative inline-block w-12 h-6">
              <input type="checkbox" className="sr-only peer" />
              <div className="w-full h-full bg-gray-300 peer-checked:bg-[#1294f2] rounded-full peer transition-colors cursor-pointer"></div>
              <div className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform peer-checked:translate-x-6"></div>
            </label>
          </div>
        </div>
      </div>

      {/* Security */}
      <div className="bg-white rounded-2xl shadow-sm p-6">
        <div className="flex items-center gap-3 mb-6">
          <Lock className="text-[#1294f2]" size={24} />
          <h2 className="text-xl">Security</h2>
        </div>
        
        <div className="space-y-3">
          <button className="w-full text-left px-4 py-3 bg-gray-50 hover:bg-gray-100 rounded-xl transition-colors">
            Change Password
          </button>
          <button className="w-full text-left px-4 py-3 bg-gray-50 hover:bg-gray-100 rounded-xl transition-colors">
            Two-Factor Authentication
          </button>
          <button className="w-full text-left px-4 py-3 bg-gray-50 hover:bg-gray-100 rounded-xl transition-colors">
            Active Sessions
          </button>
        </div>
      </div>

      {/* Save Button */}
      <div className="flex justify-end">
        <button className="bg-[#1294f2] hover:bg-[#0e7ad6] text-white py-3 px-8 rounded-xl transition-colors">
          Save Changes
        </button>
      </div>
    </div>
  );
}
