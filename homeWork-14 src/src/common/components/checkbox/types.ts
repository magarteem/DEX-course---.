type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export interface PropsСheckbox {
  children: InputProps;
  htmlForId: string;
  textСheckbox?: string;
  errors?: any;
}
