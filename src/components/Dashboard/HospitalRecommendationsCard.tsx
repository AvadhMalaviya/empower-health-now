
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface Hospital {
  id: string;
  name: string;
  location: string;
  specialty: string;
  rating: number;
  distanceKm: number;
}

interface HospitalRecommendationsCardProps {
  hospitals: Hospital[];
}

const HospitalRecommendationsCard: React.FC<HospitalRecommendationsCardProps> = ({ 
  hospitals 
}) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Recommended Hospitals</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {hospitals.map((hospital) => (
            <div key={hospital.id} className="border rounded-lg p-3">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium">{hospital.name}</h4>
                  <p className="text-sm text-gray-500">{hospital.specialty}</p>
                  <div className="flex items-center mt-1 text-sm text-gray-500">
                    <MapPin className="h-3 w-3 mr-1" />
                    <span>
                      {hospital.location} ({hospital.distanceKm} km)
                    </span>
                  </div>
                </div>
                <div className="flex items-center">
                  <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                  <span className="text-sm ml-1 font-medium">
                    {hospital.rating.toFixed(1)}
                  </span>
                </div>
              </div>
              <div className="mt-3 flex justify-end">
                <Button
                  variant="outline"
                  size="sm"
                  className="text-health-primary border-health-primary hover:bg-health-primary hover:text-white"
                >
                  View Details
                </Button>
              </div>
            </div>
          ))}
          
          <Link 
            to="/hospitals" 
            className="block text-center text-sm font-medium text-health-primary hover:text-health-secondary mt-2"
          >
            Find More Hospitals
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default HospitalRecommendationsCard;
