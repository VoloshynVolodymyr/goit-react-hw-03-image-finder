import { Wrapper, Input, Icon } from "./SearchBox.styled";

export const SearchBox = ({ value, onChange }) => {
  return (
    <Wrapper>
      <Icon />
      <Input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        autoComplete="off"
        placeholder="Find your course"
      />
    </Wrapper>
  );
};
