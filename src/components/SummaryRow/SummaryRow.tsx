import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";

import { Box, Button } from "@mui/material";
import { clearCompletedNotes } from "store/slices/todosSlice";
import { RootState } from "store/store";

import { TabsComponent } from "components/TabsComponent/TabsComponent";

import styles from "./SummaryRow.module.scss";

export const SummaryRow = () => {
  const notes = useSelector((state: RootState) => state.todos.items);
  const dispatch = useDispatch();

  const activeItemsLength = useMemo(
    () => notes.filter((item) => item.isActive).length,
    [notes]
  );

  const { t } = useTranslation();

  return (
    <Box className={styles.summary_container}>
      <Box className={styles.summary_items}>
        {t("itemsLeft", { items: activeItemsLength })}
      </Box>
      <Box className={styles.tabs_container_desktop}>
        <TabsComponent />
      </Box>
      <Button onClick={() => dispatch(clearCompletedNotes())}>
        {t("clearCompleted")}
      </Button>
    </Box>
  );
};
