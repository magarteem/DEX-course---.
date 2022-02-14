type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export interface PropsInput {
  children: InputProps;
  eye?: boolean;
  pass?: boolean;
  inputLabel?: string;
  passWatchFu?: () => void;
  errors?: any;
}
