import { Box } from "@mui/material";

import { TabPanelProps } from "./types";

export const TabPanel = ({ children, value, index }: TabPanelProps) => {
  return <Box>{value === index && <Box>{children}</Box>}</Box>;
};
