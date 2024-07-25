import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

import { Box, Typography } from "@mui/material";
import clsx from "clsx";
import { RootState } from "store/store";

import { ReactComponent as MoonIcon } from "assets/svg/icon-moon.svg";

import { FormComponent } from "components/FormComponent/FormComponent";
import { ListItem } from "components/ListItem/ListItem";
import { SummaryRow } from "components/SummaryRow/SummaryRow";
import { TabPanel } from "components/TabPanel/TabPanel";
import { TabsComponent } from "components/TabsComponent/TabsComponent";

import { INoteProps } from "./types";

import styles from "./BaseLayout.module.scss";

export const BaseLayout: React.FC = () => {
  const { t } = useTranslation();
  const notes = useSelector((state: RootState) => state.todos.items);
  const activeTab = useSelector((state: RootState) => state.tabs.activeTab);

  return (
    <Box className={styles.base_layout}>
      <Box className={styles.background_container}></Box>
      <Box className={styles.wrapper}>
        <Box className={styles.header}>
          <Typography variant="h1" className={styles.title}>
            {t("logo")}
          </Typography>
          <MoonIcon />
        </Box>
        <FormComponent />
        <Box className={styles.container}>
          <TabPanel value={activeTab} index={0}>
            {notes.map((item: INoteProps) => (
              <ListItem item={item} key={item.id} />
            ))}
          </TabPanel>
          <TabPanel value={activeTab} index={1}>
            {notes
              .filter((item) => item.isActive)
              .map((item: INoteProps) => (
                <ListItem item={item} key={item.id} />
              ))}
          </TabPanel>
          <TabPanel value={activeTab} index={2}>
            {notes
              .filter((item) => !item.isActive)
              .map((item: INoteProps) => (
                <ListItem item={item} key={item.id} />
              ))}
          </TabPanel>
          <SummaryRow />
        </Box>
        <Box className={clsx(styles.container, styles.tabs_container_mobile)}>
          <TabsComponent />
        </Box>
      </Box>
    </Box>
  );
};
