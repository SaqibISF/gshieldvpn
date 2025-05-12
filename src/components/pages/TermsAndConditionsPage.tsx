"use client";

import React, { FC } from "react";
import { ArticleSection } from "../sections";
import { useLegalNotes } from "@/hooks/useLegalNotes";

const TermsAndConditionsPage: FC = () => {
  const { isLegalNotesLoading, errorMessage, termsAndConditions } =
    useLegalNotes();
  return (
    <ArticleSection
      heading="Terms and Conditions"
      htmlContent={termsAndConditions}
      errorMessage={errorMessage}
      isLoading={isLegalNotesLoading}
    />
  );
};

export default TermsAndConditionsPage;
