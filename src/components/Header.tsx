import { User } from '../types';
import { Button } from './ui/button';
import { LogOut, UserCircle } from 'lucide-react';


interface HeaderProps {
  currentUser: User;
  onLogout: () => void;
}

export function Header({ currentUser, onLogout }: HeaderProps) {
  const getRoleColor = (role: string) => {
    switch (role) {
      case 'admin': return 'bg-red-100 text-red-700';
      case 'doctor': return 'bg-blue-100 text-blue-700';
      case 'nurse': return 'bg-purple-100 text-purple-700';
      case 'patient': return 'bg-green-100 text-green-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="text-2xl font-bold text-teal-600">CuraSync</div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-3">
              <div className="text-right">
                <p className="text-sm">{currentUser.firstName} {currentUser.lastName}</p>
                <span className={`text-xs px-2 py-1 rounded-full ${getRoleColor(currentUser.role)}`}>
                  {currentUser.role.charAt(0).toUpperCase() + currentUser.role.slice(1)}
                </span>
              </div>
              <div className="h-10 w-10 rounded-full bg-teal-100 flex items-center justify-center">
                <UserCircle className="h-6 w-6 text-teal-600" />
              </div>
            </div>
            <Button
              onClick={onLogout}
              variant="outline"
              size="sm"
              className="hover:bg-red-50 hover:text-red-600"
            >
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
