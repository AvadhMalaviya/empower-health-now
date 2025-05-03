
import React from "react";
import MainLayout from "../components/Layout/MainLayout";
import HealthSummaryCard from "../components/Dashboard/HealthSummaryCard";
import RecentReportsCard from "../components/Dashboard/RecentReportsCard";
import HealthInsightsCard from "../components/Dashboard/HealthInsightsCard";
import HospitalRecommendationsCard from "../components/Dashboard/HospitalRecommendationsCard";
import UploadReportCard from "../components/Dashboard/UploadReportCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Mock data
const healthMetrics = [
  {
    name: "Blood Pressure",
    value: 125,
    target: 120,
    unit: "mmHg",
    status: "warning" as const,
  },
  {
    name: "Cholesterol",
    value: 180,
    target: 200,
    unit: "mg/dL",
    status: "normal" as const,
  },
  {
    name: "Blood Glucose",
    value: 95,
    target: 100,
    unit: "mg/dL",
    status: "normal" as const,
  },
  {
    name: "Weight",
    value: 79,
    target: 75,
    unit: "kg",
    status: "warning" as const,
  },
];

const recentReports = [
  {
    id: "1",
    title: "Blood Work Analysis",
    date: "May 1, 2025",
    type: "lab" as const,
    status: "new" as const,
  },
  {
    id: "2",
    title: "Chest X-Ray",
    date: "April 20, 2025",
    type: "imaging" as const,
    status: "reviewed" as const,
  },
  {
    id: "3",
    title: "Annual Physical",
    date: "April 10, 2025",
    type: "general" as const,
    status: "flagged" as const,
  },
];

const hospitalRecommendations = [
  {
    id: "1",
    name: "Mercy General Hospital",
    location: "Downtown",
    specialty: "Cardiology",
    rating: 4.8,
    distanceKm: 2.3,
  },
  {
    id: "2",
    name: "University Medical Center",
    location: "Midtown",
    specialty: "Gastroenterology",
    rating: 4.5,
    distanceKm: 5.1,
  },
];

const healthInsights = [
  {
    id: "1",
    title: "Elevated Blood Pressure",
    description:
      "Your recent readings show slightly elevated blood pressure levels.",
    priority: "medium" as const,
    actionRequired: true,
  },
  {
    id: "2",
    title: "Optimal Vitamin D Levels",
    description:
      "Your Vitamin D levels are within the optimal range.",
    priority: "low" as const,
    actionRequired: false,
  },
];

const Dashboard = () => {
  return (
    <MainLayout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Health Dashboard</h1>
        <p className="text-gray-500">Welcome back! Here's an overview of your health.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-semibold">Your Health Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                <div className="bg-health-secondary/10 p-3 rounded-lg">
                  <p className="text-sm text-gray-500">Health Score</p>
                  <p className="text-xl font-bold text-health-primary">87/100</p>
                </div>
                <div className="bg-green-50 p-3 rounded-lg">
                  <p className="text-sm text-gray-500">Reports</p>
                  <p className="text-xl font-bold text-green-600">14</p>
                </div>
                <div className="bg-blue-50 p-3 rounded-lg">
                  <p className="text-sm text-gray-500">Appointments</p>
                  <p className="text-xl font-bold text-blue-600">3</p>
                </div>
                <div className="bg-purple-50 p-3 rounded-lg">
                  <p className="text-sm text-gray-500">Medications</p>
                  <p className="text-xl font-bold text-purple-600">2</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <HealthSummaryCard metrics={healthMetrics} title="Health Metrics" />
            <RecentReportsCard reports={recentReports} />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <HealthInsightsCard insights={healthInsights} />
            <HospitalRecommendationsCard hospitals={hospitalRecommendations} />
          </div>
        </div>

        <div className="space-y-6">
          <UploadReportCard />
          
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-semibold">Upcoming Appointments</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="border p-3 rounded-lg">
                  <div className="flex justify-between">
                    <div>
                      <h4 className="font-medium">Dr. Sarah Johnson</h4>
                      <p className="text-sm text-gray-500">Cardiology</p>
                    </div>
                    <div className="text-sm font-medium text-health-primary">May 12</div>
                  </div>
                  <div className="mt-2 text-sm text-gray-500">10:30 AM - 11:15 AM</div>
                </div>
                
                <div className="border p-3 rounded-lg">
                  <div className="flex justify-between">
                    <div>
                      <h4 className="font-medium">Dr. Michael Chen</h4>
                      <p className="text-sm text-gray-500">General Checkup</p>
                    </div>
                    <div className="text-sm font-medium text-health-primary">May 20</div>
                  </div>
                  <div className="mt-2 text-sm text-gray-500">2:00 PM - 2:45 PM</div>
                </div>
              </div>
              
              <div className="mt-4">
                <Button variant="outline" className="w-full">
                  Schedule New Appointment
                </Button>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-semibold">Health Resources</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="bg-blue-50 p-3 rounded-lg">
                  <h4 className="font-medium text-blue-700">Understanding Your Blood Work</h4>
                  <p className="text-sm text-gray-600 mt-1">
                    Learn what your recent blood test results mean
                  </p>
                </div>
                
                <div className="bg-green-50 p-3 rounded-lg">
                  <h4 className="font-medium text-green-700">Healthy Heart Tips</h4>
                  <p className="text-sm text-gray-600 mt-1">
                    Simple lifestyle changes for heart health
                  </p>
                </div>
                
                <div className="bg-purple-50 p-3 rounded-lg">
                  <h4 className="font-medium text-purple-700">Medication Guide</h4>
                  <p className="text-sm text-gray-600 mt-1">
                    Information about your prescribed medications
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
};

export default Dashboard;
