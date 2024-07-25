import { useDispatch } from "react-redux";

import { Box, Checkbox } from "@mui/material";
import clsx from "clsx";
import { clearNote, updateNoteStatus } from "store/slices/todosSlice";

import { ReactComponent as CheckIcon } from "assets/svg/icon-check.svg";
import { ReactComponent as CrossIcon } from "assets/svg/icon-cross.svg";

import { IListItemProps } from "./types";

import styles from "./ListItem.module.scss";

export const ListItem = ({ item }: IListItemProps) => {
  const dispatch = useDispatch();

  return (
    <Box className={styles.list_item}>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Box className={styles.checkbox_container}>
          <Checkbox
            checked={!item.isActive}
            onClick={() => dispatch(updateNoteStatus(item.id))}
            icon={
              <Box
                className={clsx(styles.checkbox, styles.checkbox_unchecked)}
              ></Box>
            }
            checkedIcon={
              <Box className={clsx(styles.checkbox, styles.checkbox_checked)}>
                <CheckIcon className={styles.checkbox_icon} />
              </Box>
            }
          />
        </Box>
        <Box className={clsx({ [styles.completed]: !item.isActive })}>
          {item.note}
        </Box>
      </Box>
      <button
        className={styles.button}
        onClick={() => dispatch(clearNote(item.id))}
      >
        <CrossIcon />
      </button>
    </Box>
  );
};
