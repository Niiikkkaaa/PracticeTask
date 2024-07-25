import * as yup from "yup";

export const validationSchema = yup.object({
  note: yup.string().required(),
});
