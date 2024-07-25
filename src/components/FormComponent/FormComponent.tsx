import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";

import { Box, TextField } from "@mui/material";
import { Field, FieldProps, Form, Formik } from "formik";
import { addNote } from "store/slices/todosSlice";

import { formInitialValues } from "./constants";
import { IInitialValuesProps } from "./types";
import { validationSchema } from "./validationShema";

import styles from "./FormComponent.module.scss";

export const FormComponent = () => {
  const { t } = useTranslation();

  const dispatch = useDispatch();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = (values: IInitialValuesProps, { resetForm }: any) => {
    dispatch(addNote(values.note));
    resetForm();
  };

  return (
    <Formik
      initialValues={formInitialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form>
        <Box className={styles.input}>
          <Field name="note">
            {({ field, meta }: FieldProps<string>) => (
              <TextField
                {...field}
                error={!!(meta.error && meta.touched)}
                helperText={meta.touched && meta.error}
                placeholder={t("placeholder")}
              />
            )}
          </Field>
        </Box>
      </Form>
    </Formik>
  );
};
