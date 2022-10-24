export default interface CheckboxesGroupProps {
    roles: {
      hr: boolean,
      coach: boolean,
      developer: boolean
    };
    onChangeRole: (event: React.ChangeEvent<HTMLInputElement>) => void;
  
  } 