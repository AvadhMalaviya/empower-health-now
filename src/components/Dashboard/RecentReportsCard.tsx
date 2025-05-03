
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, FileImage, FilePlus } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

interface Report {
  id: string;
  title: string;
  date: string;
  type: "lab" | "imaging" | "general";
  status: "new" | "reviewed" | "flagged";
}

interface RecentReportsCardProps {
  reports: Report[];
}

const RecentReportsCard: React.FC<RecentReportsCardProps> = ({ reports }) => {
  const getReportIcon = (type: string) => {
    switch (type) {
      case "lab":
        return <FileText className="h-5 w-5 text-health-primary" />;
      case "imaging":
        return <FileImage className="h-5 w-5 text-health-secondary" />;
      default:
        return <FilePlus className="h-5 w-5 text-gray-500" />;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "new":
        return (
          <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800">
            New
          </span>
        );
      case "reviewed":
        return (
          <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800">
            Reviewed
          </span>
        );
      case "flagged":
        return (
          <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-red-100 text-red-800">
            Flagged
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Recent Reports</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {reports.map((report) => (
            <Link 
              to={`/reports/${report.id}`} 
              key={report.id}
              className="block"
            >
              <div className="flex items-center p-3 rounded-md hover:bg-gray-50 transition-colors cursor-pointer">
                <div className="mr-3">{getReportIcon(report.type)}</div>
                <div className="flex-1">
                  <div className="flex justify-between">
                    <h4 className="font-medium text-sm">{report.title}</h4>
                    {getStatusBadge(report.status)}
                  </div>
                  <p className="text-sm text-gray-500">{report.date}</p>
                </div>
              </div>
            </Link>
          ))}
          
          <Link 
            to="/reports" 
            className="block text-center text-sm font-medium text-health-primary hover:text-health-secondary mt-2"
          >
            View All Reports
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentReportsCard;
