
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircle, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

interface Insight {
  id: string;
  title: string;
  description: string;
  priority: "high" | "medium" | "low";
  actionRequired: boolean;
}

interface HealthInsightsCardProps {
  insights: Insight[];
}

const HealthInsightsCard: React.FC<HealthInsightsCardProps> = ({ insights }) => {
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "text-health-error";
      case "medium":
        return "text-health-warning";
      case "low":
        return "text-health-success";
      default:
        return "text-gray-500";
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Health Insights</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {insights.map((insight) => (
            <Link 
              to={`/insights/${insight.id}`} 
              key={insight.id}
              className="block"
            >
              <div className="border rounded-lg p-3 hover:shadow-sm transition-shadow">
                <div className="flex items-start">
                  <AlertCircle className={`h-5 w-5 mr-3 mt-0.5 ${getPriorityColor(insight.priority)}`} />
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <h4 className="font-medium">{insight.title}</h4>
                      <ChevronRight className="h-5 w-5 text-gray-400" />
                    </div>
                    <p className="text-sm text-gray-500 mt-1">
                      {insight.description}
                    </p>
                    {insight.actionRequired && (
                      <div className="mt-2">
                        <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-red-100 text-red-800">
                          Action Required
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          ))}
          
          <Link 
            to="/insights" 
            className="block text-center text-sm font-medium text-health-primary hover:text-health-secondary mt-2"
          >
            View All Insights
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default HealthInsightsCard;
