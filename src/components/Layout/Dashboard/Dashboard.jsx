import React from "react";

export const Dashboard = () => {
  return (
    <div>
      Dashboard page
      <div className="flex gap-4 w-full">
        <BoxWrapper>
          <div className="pl-4">
            <span className="text-sm text-gray-500 font-light">
              Vendor 
               Summary-Residual
            </span>
          </div>
        </BoxWrapper> 
        <BoxWrapper>
          <div className="pl-4">
            <span className="text-sm text-gray-500 font-light">
              Vendor Risk Summary by Risk Area
            </span>
          </div>
        </BoxWrapper>
      </div>
      <div className="flex gap-4 w-full">
        <BoxWrapper>
          <div className="pl-4">
            <span className="text-sm text-gray-500 font-light">
              Assessement
            </span>
          </div>
        </BoxWrapper>
        <BoxWrapper>
          <div className="pl-4">
            <span className="text-sm text-gray-500 font-light">Assessment</span>
          </div>
        </BoxWrapper>
      </div>
    </div>
  );
};

function BoxWrapper({ children }) {
  return (
    <div className="bg-white rounded-sm p-4 flex-1 border border-gray-200 flex items-center w-500">
      {children}
    </div>
  );
}
