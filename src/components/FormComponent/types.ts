export interface IInitialValuesProps {
  note: string;
}

export interface IFormComponentProps {
  onSubmit: (values: IInitialValuesProps, { resetForm }: any) => void;
}