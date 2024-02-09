import React from "react";
import CardWrapper from "./CardWrapper";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

const ErrorCard = () => {
  return (
    <CardWrapper
      headerLabel="Oops! Something went wrong!"
      backButtonHref="/auth/login"
      backButtonLabel="Back to login"
    >
      <div className="w-full items-center flex justify-center space-x-2">
        <ExclamationTriangleIcon className="text-destructive" />{" "}
        <span className="text-destructive text-sm">Oops!</span>
      </div>
    </CardWrapper>
  );
};

export default ErrorCard;
