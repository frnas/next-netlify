import React from "react";
import Box from "ui-box";

export const FullPage: React.FC<{ bgColor?: string }> = ({
  bgColor,
  children,
}) => (
  <Box
    height="100vh"
    width="100vw"
    position="relative"
    backgroundColor={bgColor}
  >
    {children}
  </Box>
);
