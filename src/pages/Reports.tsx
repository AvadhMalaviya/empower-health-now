
import React from "react";
import MainLayout from "../components/Layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import { 
  Search,
  Filter,
  FileText,
  FileImage,
  FilePlus,
  Download,
  Share2
} from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Mock data
const recentReports = [
  {
    id: "1",
    title: "Blood Work Analysis",
    date: "May 1, 2025",
    type: "lab",
    category: "Blood",
    doctor: "Dr. Sarah Johnson",
    facility: "Mercy General Hospital",
    status: "new",
  },
  {
    id: "2",
    title: "Chest X-Ray",
    date: "April 20, 2025",
    type: "imaging",
    category: "Radiology",
    doctor: "Dr. Michael Chen",
    facility: "University Medical Center",
    status: "reviewed",
  },
  {
    id: "3",
    title: "Annual Physical",
    date: "April 10, 2025",
    type: "general",
    category: "Physical Exam",
    doctor: "Dr. Emily Rodriguez",
    facility: "Downtown Health Clinic",
    status: "flagged",
  },
  {
    id: "4",
    title: "Lipid Panel",
    date: "March 15, 2025",
    type: "lab",
    category: "Blood",
    doctor: "Dr. Sarah Johnson",
    facility: "Mercy General Hospital",
    status: "reviewed",
  },
  {
    id: "5",
    title: "Electrocardiogram (ECG)",
    date: "February 28, 2025",
    type: "imaging",
    category: "Cardiology",
    doctor: "Dr. Robert Williams",
    facility: "Heart Care Center",
    status: "reviewed",
  },
];

const Reports = () => {
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
    <MainLayout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Medical Reports</h1>
        <p className="text-gray-500">View, analyze and manage your medical reports</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        <div className="w-full lg:w-3/4">
          <Card className="mb-6">
            <CardContent className="pt-6">
              <div className="flex flex-col sm:flex-row justify-between space-y-3 sm:space-y-0 mb-6">
                <div className="relative w-full sm:w-80">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                  <Input
                    placeholder="Search reports..."
                    className="pl-9"
                  />
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" className="flex items-center gap-2">
                        <Filter className="h-4 w-4" /> Filter
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-60">
                      <DropdownMenuLabel>Filter Reports</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>All Types</DropdownMenuItem>
                      <DropdownMenuItem>Lab Reports</DropdownMenuItem>
                      <DropdownMenuItem>Imaging Reports</DropdownMenuItem>
                      <DropdownMenuItem>General Reports</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>Date: Newest First</DropdownMenuItem>
                      <DropdownMenuItem>Date: Oldest First</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>Status: All</DropdownMenuItem>
                      <DropdownMenuItem>Status: New</DropdownMenuItem>
                      <DropdownMenuItem>Status: Flagged</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                  <Button>Upload Report</Button>
                </div>
              </div>

              <Tabs defaultValue="all">
                <TabsList className="mb-6">
                  <TabsTrigger value="all">All Reports</TabsTrigger>
                  <TabsTrigger value="lab">Lab Tests</TabsTrigger>
                  <TabsTrigger value="imaging">Imaging</TabsTrigger>
                  <TabsTrigger value="general">General</TabsTrigger>
                </TabsList>

                <TabsContent value="all" className="space-y-4">
                  {recentReports.map((report) => (
                    <div
                      key={report.id}
                      className="border rounded-lg p-4 hover:shadow-sm transition-shadow"
                    >
                      <div className="flex items-start">
                        <div className="mr-4 bg-gray-50 p-3 rounded-md">
                          {getReportIcon(report.type)}
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-start">
                            <div>
                              <div className="flex items-center">
                                <h3 className="font-medium">{report.title}</h3>
                                <div className="ml-3">{getStatusBadge(report.status)}</div>
                              </div>
                              <p className="text-sm text-gray-500 mt-1">
                                {report.date} • {report.category} • {report.facility}
                              </p>
                              <p className="text-sm text-gray-500">Doctor: {report.doctor}</p>
                            </div>
                            <div className="flex space-x-2">
                              <Button variant="ghost" size="icon">
                                <Download className="h-4 w-4" />
                              </Button>
                              <Button variant="ghost" size="icon">
                                <Share2 className="h-4 w-4" />
                              </Button>
                              <Button
                                variant="outline"
                                className="text-health-primary border-health-primary hover:bg-health-primary hover:text-white"
                              >
                                View Report
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </TabsContent>

                <TabsContent value="lab" className="space-y-4">
                  {recentReports
                    .filter((report) => report.type === "lab")
                    .map((report) => (
                      <div
                        key={report.id}
                        className="border rounded-lg p-4 hover:shadow-sm transition-shadow"
                      >
                        <div className="flex items-start">
                          <div className="mr-4 bg-gray-50 p-3 rounded-md">
                            {getReportIcon(report.type)}
                          </div>
                          <div className="flex-1">
                            <div className="flex justify-between items-start">
                              <div>
                                <div className="flex items-center">
                                  <h3 className="font-medium">{report.title}</h3>
                                  <div className="ml-3">{getStatusBadge(report.status)}</div>
                                </div>
                                <p className="text-sm text-gray-500 mt-1">
                                  {report.date} • {report.category} • {report.facility}
                                </p>
                                <p className="text-sm text-gray-500">Doctor: {report.doctor}</p>
                              </div>
                              <div className="flex space-x-2">
                                <Button variant="ghost" size="icon">
                                  <Download className="h-4 w-4" />
                                </Button>
                                <Button variant="ghost" size="icon">
                                  <Share2 className="h-4 w-4" />
                                </Button>
                                <Button
                                  variant="outline"
                                  className="text-health-primary border-health-primary hover:bg-health-primary hover:text-white"
                                >
                                  View Report
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                </TabsContent>

                <TabsContent value="imaging" className="space-y-4">
                  {recentReports
                    .filter((report) => report.type === "imaging")
                    .map((report) => (
                      <div
                        key={report.id}
                        className="border rounded-lg p-4 hover:shadow-sm transition-shadow"
                      >
                        <div className="flex items-start">
                          <div className="mr-4 bg-gray-50 p-3 rounded-md">
                            {getReportIcon(report.type)}
                          </div>
                          <div className="flex-1">
                            <div className="flex justify-between items-start">
                              <div>
                                <div className="flex items-center">
                                  <h3 className="font-medium">{report.title}</h3>
                                  <div className="ml-3">{getStatusBadge(report.status)}</div>
                                </div>
                                <p className="text-sm text-gray-500 mt-1">
                                  {report.date} • {report.category} • {report.facility}
                                </p>
                                <p className="text-sm text-gray-500">Doctor: {report.doctor}</p>
                              </div>
                              <div className="flex space-x-2">
                                <Button variant="ghost" size="icon">
                                  <Download className="h-4 w-4" />
                                </Button>
                                <Button variant="ghost" size="icon">
                                  <Share2 className="h-4 w-4" />
                                </Button>
                                <Button
                                  variant="outline"
                                  className="text-health-primary border-health-primary hover:bg-health-primary hover:text-white"
                                >
                                  View Report
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                </TabsContent>

                <TabsContent value="general" className="space-y-4">
                  {recentReports
                    .filter((report) => report.type === "general")
                    .map((report) => (
                      <div
                        key={report.id}
                        className="border rounded-lg p-4 hover:shadow-sm transition-shadow"
                      >
                        <div className="flex items-start">
                          <div className="mr-4 bg-gray-50 p-3 rounded-md">
                            {getReportIcon(report.type)}
                          </div>
                          <div className="flex-1">
                            <div className="flex justify-between items-start">
                              <div>
                                <div className="flex items-center">
                                  <h3 className="font-medium">{report.title}</h3>
                                  <div className="ml-3">{getStatusBadge(report.status)}</div>
                                </div>
                                <p className="text-sm text-gray-500 mt-1">
                                  {report.date} • {report.category} • {report.facility}
                                </p>
                                <p className="text-sm text-gray-500">Doctor: {report.doctor}</p>
                              </div>
                              <div className="flex space-x-2">
                                <Button variant="ghost" size="icon">
                                  <Download className="h-4 w-4" />
                                </Button>
                                <Button variant="ghost" size="icon">
                                  <Share2 className="h-4 w-4" />
                                </Button>
                                <Button
                                  variant="outline"
                                  className="text-health-primary border-health-primary hover:bg-health-primary hover:text-white"
                                >
                                  View Report
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>

        <div className="w-full lg:w-1/4">
          <Card className="mb-6">
            <CardContent className="pt-6">
              <h3 className="text-lg font-medium mb-4">Upload Report</h3>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                <div className="flex flex-col items-center justify-center space-y-2">
                  <div className="rounded-full bg-health-secondary/20 p-3">
                    <Upload className="h-6 w-6 text-health-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Drag & drop your report here</p>
                    <p className="text-xs text-gray-500 mt-1">
                      Supports PDF, JPEG, PNG files
                    </p>
                  </div>
                  <div className="pt-4">
                    <label htmlFor="file-upload-reports">
                      <input
                        id="file-upload-reports"
                        name="file-upload-reports"
                        type="file"
                        className="sr-only"
                        accept=".pdf,.jpg,.jpeg,.png"
                      />
                      <Button 
                        variant="outline" 
                        className="text-health-primary border-health-primary hover:bg-health-primary hover:text-white"
                      >
                        <Plus className="h-4 w-4 mr-2" />
                        Browse Files
                      </Button>
                    </label>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h3 className="text-lg font-medium mb-4">Report Trends</h3>
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Blood Pressure</span>
                    <span className="text-health-primary">Trending Down</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-health-primary h-2 rounded-full w-[70%]"></div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Cholesterol</span>
                    <span className="text-health-success">Stable</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-health-success h-2 rounded-full w-[65%]"></div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Blood Glucose</span>
                    <span className="text-health-warning">Trending Up</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-health-warning h-2 rounded-full w-[45%]"></div>
                  </div>
                </div>

                <Button className="w-full">View Detailed Analytics</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
};

export default Reports;
