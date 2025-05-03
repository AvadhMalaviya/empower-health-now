
import React from "react";
import MainLayout from "../components/Layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search, MapPin, Star, Calendar, Phone, Circle } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Mock hospital data
const hospitals = [
  {
    id: "1",
    name: "Mercy General Hospital",
    location: "123 Main St, Downtown",
    distance: 2.3,
    rating: 4.8,
    specialties: ["Cardiology", "Neurology", "Orthopedics"],
    insurance: ["HealthPlus", "Medicare", "Blue Shield"],
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=200&h=100&auto=format&fit=crop",
  },
  {
    id: "2",
    name: "University Medical Center",
    location: "456 College Ave, Midtown",
    distance: 5.1,
    rating: 4.5,
    specialties: ["Oncology", "Gastroenterology", "Pulmonology"],
    insurance: ["Medicare", "Aetna", "Blue Shield"],
    image: "https://images.unsplash.com/photo-1626315869436-d6781ba69d6e?q=80&w=200&h=100&auto=format&fit=crop",
  },
  {
    id: "3",
    name: "East Side Health Center",
    location: "789 River Rd, Eastside",
    distance: 3.7,
    rating: 4.2,
    specialties: ["Family Medicine", "Pediatrics", "OB/GYN"],
    insurance: ["HealthPlus", "Cigna", "Medicaid"],
    image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=200&h=100&auto=format&fit=crop",
  },
  {
    id: "4",
    name: "North Valley Medical Group",
    location: "321 Valley Blvd, Northside",
    distance: 7.2,
    rating: 4.6,
    specialties: ["Sports Medicine", "Rheumatology", "Dermatology"],
    insurance: ["Blue Shield", "UnitedHealth", "Kaiser"],
    image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=200&h=100&auto=format&fit=crop",
  },
];

const Hospitals = () => {
  return (
    <MainLayout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Hospital Finder</h1>
        <p className="text-gray-500">Find and compare hospitals based on your health needs</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <Card className="sticky top-6">
            <CardContent className="pt-6">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-3">Search</h3>
                  <div className="relative">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                    <Input placeholder="Search hospitals..." className="pl-9" />
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="text-lg font-medium">Filters</h3>
                  
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-1 block">
                      Distance
                    </label>
                    <Select defaultValue="10">
                      <SelectTrigger>
                        <SelectValue placeholder="Select distance" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="5">5 miles</SelectItem>
                        <SelectItem value="10">10 miles</SelectItem>
                        <SelectItem value="25">25 miles</SelectItem>
                        <SelectItem value="50">50 miles</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-1 block">
                      Specialty
                    </label>
                    <Select defaultValue="all">
                      <SelectTrigger>
                        <SelectValue placeholder="Select specialty" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Specialties</SelectItem>
                        <SelectItem value="cardiology">Cardiology</SelectItem>
                        <SelectItem value="neurology">Neurology</SelectItem>
                        <SelectItem value="orthopedics">Orthopedics</SelectItem>
                        <SelectItem value="oncology">Oncology</SelectItem>
                        <SelectItem value="gastroenterology">Gastroenterology</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-1 block">
                      Insurance
                    </label>
                    <Select defaultValue="all">
                      <SelectTrigger>
                        <SelectValue placeholder="Select insurance" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Insurance</SelectItem>
                        <SelectItem value="healthplus">HealthPlus</SelectItem>
                        <SelectItem value="medicare">Medicare</SelectItem>
                        <SelectItem value="blueshield">Blue Shield</SelectItem>
                        <SelectItem value="aetna">Aetna</SelectItem>
                        <SelectItem value="cigna">Cigna</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-1 block">
                      Rating
                    </label>
                    <Select defaultValue="all">
                      <SelectTrigger>
                        <SelectValue placeholder="Select rating" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">Any Rating</SelectItem>
                        <SelectItem value="4.5">4.5+ stars</SelectItem>
                        <SelectItem value="4.0">4.0+ stars</SelectItem>
                        <SelectItem value="3.5">3.5+ stars</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <Button className="w-full">Apply Filters</Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-lg font-medium mb-4">Hospital Recommendations</h3>
              
              <p className="text-sm text-gray-500 mb-4">
                Based on your recent health data and reports, we recommend these hospitals that specialize in cardiology and have your insurance coverage.
              </p>
              
              <div className="space-y-6">
                {hospitals.map((hospital) => (
                  <div
                    key={hospital.id}
                    className="flex flex-col md:flex-row gap-4 border rounded-lg p-4 hover:shadow-sm transition-shadow"
                  >
                    <div className="h-[100px] md:w-[200px] rounded-md overflow-hidden bg-gray-100">
                      <img 
                        src={hospital.image} 
                        alt={hospital.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <div className="flex-1 space-y-3">
                      <div>
                        <div className="flex items-start justify-between">
                          <h4 className="font-medium text-lg">{hospital.name}</h4>
                          <div className="flex items-center bg-yellow-50 px-2 py-1 rounded">
                            <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                            <span className="text-sm ml-1 font-medium">
                              {hospital.rating.toFixed(1)}
                            </span>
                          </div>
                        </div>
                        
                        <div className="flex items-center text-sm text-gray-500 mt-1">
                          <MapPin className="h-3 w-3 mr-1" />
                          <span>
                            {hospital.location} ({hospital.distance} km)
                          </span>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        {hospital.specialties.map((specialty, index) => (
                          <span 
                            key={index}
                            className="bg-health-secondary/10 text-health-primary text-xs px-2 py-1 rounded-full"
                          >
                            {specialty}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex items-center text-sm text-gray-500">
                        <Circle className="h-3 w-3 mr-1 fill-green-500 text-green-500" />
                        <span>Accepts {hospital.insurance.join(", ")}</span>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 pt-2">
                        <Button 
                          variant="outline"
                          size="sm" 
                          className="text-health-primary border-health-primary hover:bg-health-primary hover:text-white"
                        >
                          <Phone className="h-4 w-4 mr-1" />
                          Contact
                        </Button>
                        <Button 
                          variant="outline"
                          size="sm" 
                          className="text-health-primary border-health-primary hover:bg-health-primary hover:text-white"
                        >
                          <Calendar className="h-4 w-4 mr-1" />
                          Schedule Visit
                        </Button>
                        <Button size="sm">
                          View Details
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
};

export default Hospitals;
