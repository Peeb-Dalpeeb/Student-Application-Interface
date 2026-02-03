import { LogOut, AlertCircle } from 'lucide-react';

interface LogoutTabProps {
  onCancel: () => void;
}

export default function LogoutTab({ onCancel }: LogoutTabProps) {
  const handleLogout = () => {
    // In a real application, this would clear session/auth tokens
    alert('Logging out... (This is a demo)');
  };

  return (
    <div className="flex items-center justify-center min-h-[600px]">
      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md w-full">
        <div className="text-center">
          <div className="bg-red-100 size-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <AlertCircle className="text-red-500" size={32} />
          </div>
          
          <h2 className="text-2xl mb-2">Log Out</h2>
          <p className="text-gray-600 mb-8">
            Are you sure you want to log out? You'll need to sign in again to access your account.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={onCancel}
              className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 py-3 px-6 rounded-xl transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleLogout}
              className="flex-1 bg-red-500 hover:bg-red-600 text-white py-3 px-6 rounded-xl transition-colors flex items-center justify-center gap-2"
            >
              <LogOut size={20} />
              Log Out
            </button>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-500 text-center">
            You can always sign back in anytime using your credentials.
          </p>
        </div>
      </div>
    </div>
  );
}
