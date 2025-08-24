import React from "react";
import { Datepicker, DatepickerEvent} from "@meinefinsternis/react-horizontal-date-picker";
import { enUS } from "date-fns/locale";
import { Card, Flex, Select, Text } from "@mantine/core";

const Schedule = () => {
    return (  
        <Card w={"70%"} radius="lg" withBorder shadow='lg'>
            <Flex 
            direction="column"
            >
                <Flex justify="space-between">
                    <Text>Post Schedule</Text>
                    <Select></Select>
                </Flex>
                <Calender />
                
                {/* <Text>02:00 PM</Text> */}
            </Flex>
        </Card>
    )
}

const Calender = () => {
  const [date, setDate] = React.useState<{
    endValue: Date | null;
    startValue: Date | null;
    rangeDates: Date[] | null;
  }>({
    startValue: null,
    endValue: null,
    rangeDates: [],
  });

  const handleChange = (d: DatepickerEvent) => {
    const [startValue, endValue, rangeDates] = d;
    setDate((prev) => ({ ...prev, endValue, startValue, rangeDates }));
  };

  return (
    <Datepicker
      onChange={handleChange}
      locale={enUS}
      startValue={date.startValue}
      endValue={date.endValue}
    />
  );
};

export default Schedule;