import { useState } from "react";
import styled from "styled-components";
import color from "../../styles/color";
import { Flex } from "../common";
import DateSelector from "./DateSelector";
import DropDown from "./Dropdown";

const Date = () => {
  const [yearDropdownOpen, setYearDropdownOpen] = useState(false);
  const [monthDropdownOpen, setMonthDropdownOpen] = useState(false);

  const [year, setYear] = useState(2023);
  const [month, setMonth] = useState(3);

  const onYearDropdownClick = (value: number) => {
    setYear(value);
    setYearDropdownOpen(false);
  };

  const onMonthDropdownClick = (value: number) => {
    setMonth(value);
    setMonthDropdownOpen(false);
  };

  return (
    <>
      <Flex>
        <DateSelector onClick={() => setYearDropdownOpen(!yearDropdownOpen)}>
          {year}
        </DateSelector>
        <Text style={{ paddingRight: 20 }}>년</Text>
        <DateSelector onClick={() => setMonthDropdownOpen(!monthDropdownOpen)}>
          {month}
        </DateSelector>
        <Text>월의 일기</Text>
      </Flex>
      {yearDropdownOpen && (
        <DropDown values={years} onValueClick={onYearDropdownClick} />
      )}
      {monthDropdownOpen && (
        <DropDown
          style={{ left: "110px" }}
          values={months}
          onValueClick={onMonthDropdownClick}
        />
      )}
    </>
  );
};

export default Date;

const Text = styled.span`
  padding-left: 5px;
  height: 31px;
  line-height: 31px;
  color: ${color.base4};
  font-size: 16px;
  font-weight: 700;
`;

const years = [2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015];

const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
