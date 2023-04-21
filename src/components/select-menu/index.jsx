import React, {useState} from "react";
import {
  Body,
  Select,
  LanguageIcon,
  OptionList,
  Option,
  DownArrowIcon,
} from "./styles/select-menu";

export default function SelectMenu({optionList, ...restProps}) {
  const [value, setValue] = useState(optionList[0].text);
  const [showOptions, setShowOptions] = useState(false);

  return (
    <Body {...restProps} onMouseLeave={() => setShowOptions(false)}>
      <Select onClick={() => setShowOptions(!showOptions)} tabIndex="1">
        <LanguageIcon src="images/icons/language.png" />
        <span>{value}</span>
        {showOptions && (
          <OptionList>
            {optionList.map((option) => (
              <Option key={option.id} onClick={() => setValue(option.text)}>
                {option.text}
              </Option>
            ))}
          </OptionList>
        )}

        <DownArrowIcon src="images/icons/up-arrow.png" />
      </Select>
    </Body>
  );
}
