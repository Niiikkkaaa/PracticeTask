import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";

import { Box, Button } from "@mui/material";
import clsx from "clsx";
import { setActiveTab } from "store/slices/tabsSlice";
import { RootState } from "store/store";

import styles from "./TabsComponent.module.scss";

export const TabsComponent = () => {
  const activeTab = useSelector((state: RootState) => state.tabs.activeTab);
  const dispatch = useDispatch();

  const { t } = useTranslation();

  return (
    <Box>
      <Button
        className={clsx(styles.tab, { [styles.active_tab]: activeTab === 0 })}
        onClick={() => dispatch(setActiveTab(0))}
      >
        {t("all")}
      </Button>
      <Button
        className={clsx(styles.tab, { [styles.active_tab]: activeTab === 1 })}
        onClick={() => dispatch(setActiveTab(1))}
      >
        {t("active")}
      </Button>
      <Button
        className={clsx(styles.tab, { [styles.active_tab]: activeTab === 2 })}
        onClick={() => dispatch(setActiveTab(2))}
      >
        {t("completed")}
      </Button>
    </Box>
  );
};
