
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Upload, Plus, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const UploadReportCard = () => {
  const [dragActive, setDragActive] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    // Mock upload success
    setUploadSuccess(true);
    setTimeout(() => setUploadSuccess(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      // Mock upload success
      setUploadSuccess(true);
      setTimeout(() => setUploadSuccess(false), 3000);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Upload Report</CardTitle>
      </CardHeader>
      <CardContent>
        <div
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
          className={`border-2 border-dashed rounded-lg p-6 text-center ${
            dragActive ? "border-health-primary bg-health-secondary/10" : "border-gray-300"
          } ${uploadSuccess ? "bg-green-50 border-green-300" : ""}`}
        >
          <div className="flex flex-col items-center justify-center space-y-3">
            {uploadSuccess ? (
              <>
                <div className="rounded-full bg-green-100 p-3">
                  <Check className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-green-600">Upload successful!</p>
                  <p className="text-xs text-gray-500 mt-1">Processing your report...</p>
                </div>
              </>
            ) : (
              <>
                <div className="rounded-full bg-health-secondary/20 p-3">
                  <Upload className="h-6 w-6 text-health-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium">Drag & drop your report here</p>
                  <p className="text-xs text-gray-500 mt-1">
                    Supports PDF, JPEG, PNG files (up to 10MB)
                  </p>
                </div>
                <div className="pt-4">
                  <label htmlFor="file-upload">
                    <input
                      id="file-upload"
                      name="file-upload"
                      type="file"
                      className="sr-only"
                      accept=".pdf,.jpg,.jpeg,.png"
                      onChange={handleChange}
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
              </>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default UploadReportCard;
