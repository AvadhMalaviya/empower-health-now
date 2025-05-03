
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { 
  Home, 
  FileText, 
  BarChart2, 
  Hospital, 
  User, 
  Calendar, 
  HelpCircle
} from "lucide-react";

const sidebarItems = [
  { icon: Home, label: "Dashboard", path: "/" },
  { icon: FileText, label: "Medical Reports", path: "/reports" },
  { icon: BarChart2, label: "Health Analytics", path: "/analytics" },
  { icon: Hospital, label: "Hospital Finder", path: "/hospitals" },
  { icon: User, label: "My Profile", path: "/profile" },
  { icon: Calendar, label: "Appointments", path: "/appointments" },
  { icon: HelpCircle, label: "Help", path: "/help" },
];

const Sidebar = () => {
  const location = useLocation();
  
  return (
    <aside className="bg-white border-r border-gray-200 w-64 min-h-screen p-4">
      <div className="space-y-6">
        <div className="space-y-1">
          <h2 className="text-sm font-medium text-gray-400 px-2">MENU</h2>
          {sidebarItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "flex items-center space-x-3 px-3 py-2 rounded-md text-sm font-medium transition-all",
                location.pathname === item.path
                  ? "bg-health-primary text-white"
                  : "text-gray-700 hover:bg-health-secondary/10 hover:text-health-primary"
              )}
            >
              <item.icon className="h-5 w-5" />
              <span>{item.label}</span>
            </Link>
          ))}
        </div>
        
        <div className="space-y-1">
          <h2 className="text-sm font-medium text-gray-400 px-2">HEALTH TOOLS</h2>
          <div className="bg-health-secondary/10 p-4 rounded-md">
            <h3 className="font-medium text-health-primary mb-2">Upload Reports</h3>
            <p className="text-xs text-gray-500 mb-3">
              Upload your medical reports to get AI-powered insights
            </p>
            <Link to="/reports/upload">
              <button className="w-full bg-health-primary text-white text-sm py-1.5 px-3 rounded-md hover:bg-health-secondary transition-colors">
                Upload Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
