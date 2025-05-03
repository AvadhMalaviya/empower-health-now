
import React from "react";
import MainLayout from "../components/Layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, Clock, File, User, UserPlus, Lock, FileText, AlertCircle } from "lucide-react";

// Mock profile data
const profileData = {
  name: "Alex Johnson",
  email: "alex.johnson@example.com",
  dob: "May 15, 1985",
  gender: "Male",
  phone: "(555) 123-4567",
  bloodType: "A+",
  height: "5'10\" (178 cm)",
  weight: "165 lbs (75 kg)",
  allergies: ["Penicillin", "Peanuts"],
  conditions: ["Hypertension", "Asthma"],
  medications: ["Lisinopril 10mg", "Albuterol inhaler"],
};

const Profile = () => {
  return (
    <MainLayout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold">My Profile</h1>
        <p className="text-gray-500">View and manage your personal health information</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <Card>
            <CardContent className="pt-6 flex flex-col items-center">
              <div className="h-24 w-24 rounded-full bg-health-secondary/20 flex items-center justify-center mb-4">
                <User className="h-12 w-12 text-health-primary" />
              </div>
              
              <h2 className="text-xl font-bold">{profileData.name}</h2>
              <p className="text-gray-500 mb-4">{profileData.email}</p>
              
              <div className="w-full space-y-4 mt-2">
                <div className="grid grid-cols-2 gap-2 text-center">
                  <div className="bg-health-secondary/10 p-2 rounded-lg">
                    <p className="text-sm text-gray-500">Blood Type</p>
                    <p className="font-medium text-health-primary">{profileData.bloodType}</p>
                  </div>
                  <div className="bg-blue-50 p-2 rounded-lg">
                    <p className="text-sm text-gray-500">Reports</p>
                    <p className="font-medium text-blue-600">14</p>
                  </div>
                </div>
                
                <Button className="w-full">Edit Profile</Button>
                <Button variant="outline" className="w-full">
                  <Lock className="h-4 w-4 mr-2" />
                  Change Password
                </Button>
              </div>
            </CardContent>
          </Card>
          
          <Card className="mt-6">
            <CardHeader>
              <CardTitle className="text-lg font-semibold">Emergency Contacts</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="border rounded-lg p-3">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-medium">Sarah Johnson</h4>
                    <p className="text-sm text-gray-500">Spouse</p>
                    <p className="text-sm text-gray-500">(555) 987-6543</p>
                  </div>
                  <Button variant="ghost" size="sm" className="mt-0">Edit</Button>
                </div>
              </div>
              
              <div className="border rounded-lg p-3">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-medium">Robert Johnson</h4>
                    <p className="text-sm text-gray-500">Brother</p>
                    <p className="text-sm text-gray-500">(555) 456-7890</p>
                  </div>
                  <Button variant="ghost" size="sm">Edit</Button>
                </div>
              </div>
              
              <Button variant="outline" className="w-full">
                <UserPlus className="h-4 w-4 mr-2" />
                Add Contact
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-2">
          <Tabs defaultValue="info">
            <TabsList className="mb-6">
              <TabsTrigger value="info">Personal Info</TabsTrigger>
              <TabsTrigger value="medical">Medical History</TabsTrigger>
              <TabsTrigger value="appointments">Appointments</TabsTrigger>
              <TabsTrigger value="preferences">Preferences</TabsTrigger>
            </TabsList>

            <TabsContent value="info" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg font-semibold">Personal Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-1 block">
                        Full Name
                      </label>
                      <Input defaultValue={profileData.name} />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-1 block">
                        Email Address
                      </label>
                      <Input defaultValue={profileData.email} />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-1 block">
                        Date of Birth
                      </label>
                      <Input defaultValue={profileData.dob} />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-1 block">
                        Gender
                      </label>
                      <Input defaultValue={profileData.gender} />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-1 block">
                        Phone Number
                      </label>
                      <Input defaultValue={profileData.phone} />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-1 block">
                        Blood Type
                      </label>
                      <Input defaultValue={profileData.bloodType} />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-1 block">
                        Height
                      </label>
                      <Input defaultValue={profileData.height} />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-1 block">
                        Weight
                      </label>
                      <Input defaultValue={profileData.weight} />
                    </div>
                    <div className="md:col-span-2">
                      <label className="text-sm font-medium text-gray-700 mb-1 block">
                        Address
                      </label>
                      <Textarea placeholder="Enter your address" />
                    </div>
                  </div>

                  <div className="flex justify-end mt-6">
                    <Button variant="outline" className="mr-2">Cancel</Button>
                    <Button>Save Changes</Button>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg font-semibold">Insurance Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-1 block">
                        Insurance Provider
                      </label>
                      <Input defaultValue="HealthPlus Insurance" />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-1 block">
                        Member ID
                      </label>
                      <Input defaultValue="HP123456789" />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-1 block">
                        Group Number
                      </label>
                      <Input defaultValue="GRP9876543" />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-1 block">
                        Plan Type
                      </label>
                      <Input defaultValue="PPO Premium" />
                    </div>
                  </div>

                  <div className="flex justify-end mt-6">
                    <Button variant="outline" className="mr-2">Cancel</Button>
                    <Button>Save Changes</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="medical" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg font-semibold">Medical Conditions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {profileData.conditions.map((condition, index) => (
                      <div key={index} className="flex justify-between items-center border rounded-lg p-3">
                        <div className="flex items-center">
                          <AlertCircle className="h-5 w-5 text-health-warning mr-3" />
                          <div>
                            <h4 className="font-medium">{condition}</h4>
                            <p className="text-sm text-gray-500">Diagnosed: Jan 2022</p>
                          </div>
                        </div>
                        <Button variant="ghost" size="sm">Edit</Button>
                      </div>
                    ))}
                    
                    <Button variant="outline" className="w-full">
                      Add Medical Condition
                    </Button>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg font-semibold">Allergies</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {profileData.allergies.map((allergy, index) => (
                      <div key={index} className="flex justify-between items-center border rounded-lg p-3">
                        <div className="flex items-center">
                          <AlertCircle className="h-5 w-5 text-health-error mr-3" />
                          <div>
                            <h4 className="font-medium">{allergy}</h4>
                            <p className="text-sm text-gray-500">Severity: High</p>
                          </div>
                        </div>
                        <Button variant="ghost" size="sm">Edit</Button>
                      </div>
                    ))}
                    
                    <Button variant="outline" className="w-full">
                      Add Allergy
                    </Button>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg font-semibold">Medications</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {profileData.medications.map((medication, index) => (
                      <div key={index} className="flex justify-between items-center border rounded-lg p-3">
                        <div className="flex items-center">
                          <FileText className="h-5 w-5 text-health-primary mr-3" />
                          <div>
                            <h4 className="font-medium">{medication}</h4>
                            <p className="text-sm text-gray-500">1 tablet daily</p>
                          </div>
                        </div>
                        <Button variant="ghost" size="sm">Edit</Button>
                      </div>
                    ))}
                    
                    <Button variant="outline" className="w-full">
                      Add Medication
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="appointments">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg font-semibold">Upcoming Appointments</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="border rounded-lg p-4">
                      <div className="flex justify-between">
                        <div className="flex">
                          <div className="mr-4 bg-health-secondary/10 p-3 rounded-md">
                            <Calendar className="h-6 w-6 text-health-primary" />
                          </div>
                          <div>
                            <h4 className="font-medium">Dr. Sarah Johnson</h4>
                            <p className="text-sm text-gray-500">Cardiology</p>
                            <div className="flex items-center mt-2 text-sm">
                              <Calendar className="h-3 w-3 mr-1" />
                              <span className="mr-3">May 12, 2025</span>
                              <Clock className="h-3 w-3 mr-1" />
                              <span>10:30 AM</span>
                            </div>
                            <p className="text-sm mt-2">
                              <span className="text-health-primary font-medium">Location:</span> Mercy General Hospital, Suite 302
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-end gap-2 mt-4">
                        <Button variant="outline" size="sm">Cancel</Button>
                        <Button variant="outline" size="sm">Reschedule</Button>
                        <Button size="sm">Confirm</Button>
                      </div>
                    </div>

                    <div className="border rounded-lg p-4">
                      <div className="flex justify-between">
                        <div className="flex">
                          <div className="mr-4 bg-health-secondary/10 p-3 rounded-md">
                            <Calendar className="h-6 w-6 text-health-primary" />
                          </div>
                          <div>
                            <h4 className="font-medium">Dr. Michael Chen</h4>
                            <p className="text-sm text-gray-500">General Checkup</p>
                            <div className="flex items-center mt-2 text-sm">
                              <Calendar className="h-3 w-3 mr-1" />
                              <span className="mr-3">May 20, 2025</span>
                              <Clock className="h-3 w-3 mr-1" />
                              <span>2:00 PM</span>
                            </div>
                            <p className="text-sm mt-2">
                              <span className="text-health-primary font-medium">Location:</span> Downtown Health Clinic, Room 105
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-end gap-2 mt-4">
                        <Button variant="outline" size="sm">Cancel</Button>
                        <Button variant="outline" size="sm">Reschedule</Button>
                        <Button size="sm">Confirm</Button>
                      </div>
                    </div>
                    
                    <Button className="w-full">Schedule New Appointment</Button>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="mt-6">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold">Past Appointments</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="border rounded-lg p-4">
                      <div className="flex">
                        <div className="mr-4 bg-gray-100 p-3 rounded-md">
                          <File className="h-6 w-6 text-gray-500" />
                        </div>
                        <div>
                          <h4 className="font-medium">Dr. Emily Rodriguez</h4>
                          <p className="text-sm text-gray-500">Annual Physical</p>
                          <div className="flex items-center mt-2 text-sm">
                            <Calendar className="h-3 w-3 mr-1" />
                            <span className="mr-3">April 10, 2025</span>
                            <Clock className="h-3 w-3 mr-1" />
                            <span>9:15 AM</span>
                          </div>
                          <div className="mt-2">
                            <Button variant="outline" size="sm">View Summary</Button>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="border rounded-lg p-4">
                      <div className="flex">
                        <div className="mr-4 bg-gray-100 p-3 rounded-md">
                          <File className="h-6 w-6 text-gray-500" />
                        </div>
                        <div>
                          <h4 className="font-medium">Dr. Robert Williams</h4>
                          <p className="text-sm text-gray-500">ECG Test</p>
                          <div className="flex items-center mt-2 text-sm">
                            <Calendar className="h-3 w-3 mr-1" />
                            <span className="mr-3">February 28, 2025</span>
                            <Clock className="h-3 w-3 mr-1" />
                            <span>11:00 AM</span>
                          </div>
                          <div className="mt-2">
                            <Button variant="outline" size="sm">View Summary</Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="preferences">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg font-semibold">Communication Preferences</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Email Notifications</h4>
                        <p className="text-sm text-gray-500">Receive updates and reports via email</p>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="email-notifications"
                          defaultChecked
                          className="h-4 w-4 text-health-primary rounded border-gray-300"
                        />
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">SMS Notifications</h4>
                        <p className="text-sm text-gray-500">Receive text updates for appointments</p>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="sms-notifications"
                          defaultChecked
                          className="h-4 w-4 text-health-primary rounded border-gray-300"
                        />
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Health Insights</h4>
                        <p className="text-sm text-gray-500">Receive personalized health recommendations</p>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="health-insights"
                          defaultChecked
                          className="h-4 w-4 text-health-primary rounded border-gray-300"
                        />
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Report Sharing</h4>
                        <p className="text-sm text-gray-500">Automatically share reports with your doctors</p>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="report-sharing"
                          defaultChecked
                          className="h-4 w-4 text-health-primary rounded border-gray-300"
                        />
                      </div>
                    </div>
                    
                    <div className="pt-4">
                      <Button className="w-full">Save Preferences</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="mt-6">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold">Privacy Settings</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Data Sharing for Research</h4>
                        <p className="text-sm text-gray-500">Allow anonymized data to be used for medical research</p>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="data-sharing"
                          className="h-4 w-4 text-health-primary rounded border-gray-300"
                        />
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Public Profile</h4>
                        <p className="text-sm text-gray-500">Allow healthcare providers to find your profile</p>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="public-profile"
                          defaultChecked
                          className="h-4 w-4 text-health-primary rounded border-gray-300"
                        />
                      </div>
                    </div>
                    
                    <div className="pt-4">
                      <Button className="w-full">Save Privacy Settings</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </MainLayout>
  );
};

export default Profile;
