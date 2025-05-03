
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface HealthMetric {
  name: string;
  value: number;
  target: number;
  unit: string;
  status: "normal" | "warning" | "critical";
}

interface HealthSummaryCardProps {
  metrics: HealthMetric[];
  title: string;
}

const HealthSummaryCard: React.FC<HealthSummaryCardProps> = ({ metrics, title }) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "normal":
        return "bg-health-success";
      case "warning":
        return "bg-health-warning";
      case "critical":
        return "bg-health-error";
      default:
        return "bg-gray-300";
    }
  };

  const getProgressValue = (value: number, target: number) => {
    return Math.min(Math.round((value / target) * 100), 100);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-semibold">{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {metrics.map((metric, index) => (
          <div key={index}>
            <div className="flex justify-between items-center mb-1">
              <span className="text-sm font-medium">{metric.name}</span>
              <span className="text-sm text-gray-500">
                {metric.value} {metric.unit} / {metric.target} {metric.unit}
              </span>
            </div>
            <div className="relative">
              <Progress
                value={getProgressValue(metric.value, metric.target)}
                className={`h-2 ${getStatusColor(metric.status)}`}
              />
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default HealthSummaryCard;
