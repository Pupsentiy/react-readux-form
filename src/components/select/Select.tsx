import React, {
  useEffect,
  useRef,
  useState,
} from "react";

import arrow from "../../assets/img/arrow.svg";
import { Label, LabelArrow, Li, List, SelectWrapper } from "./Select.styled";

import { ISelect, PopupClick } from "./types";
import { IForm } from "../../store/reducers/form";

const Select: React.FC<ISelect> = ({
  props,
  placeholder,
  fields,
  setFields,
}) => {
  const sortRef = useRef(null);
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const _event = event as PopupClick;
      if (sortRef.current && !_event.path.includes(sortRef.current)) {
        setOpen(false);
      }
    };
    document.body.addEventListener("click", handleClickOutside);
    return () => document.body.removeEventListener("click", handleClickOutside);
  }, []);

  const handleChangeSelect = (innerHTML: string, id: any) => {
    setFields({
      ...fields,
      [id]: innerHTML
    });
  };

  return (
    <>
      <SelectWrapper onClick={() => setOpen(!open)} ref={sortRef} open={open}>
        <Label>
          {!fields[placeholder.name as keyof IForm]
            ? placeholder.placeholder
            : fields[placeholder.name as keyof IForm]}
        </Label>
        <LabelArrow src={arrow} alt="arrow" open={open} />
        {open && (
          <List>
            {props &&
              props.map((item: { name: string }, i: number) => (
                <Li
                  key={i}
                  onClick={() =>
                    handleChangeSelect(item.name, placeholder.name)
                  }
                >
                  {item.name}
                </Li>
              ))}
          </List>
        )}
      </SelectWrapper>
    </>
  );
};

export default Select;
