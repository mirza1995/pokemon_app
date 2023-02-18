import { useMemo, useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { formatDate } from '@utils/date';
import { Input } from '@components/Input';

type DatePickerProps = {
  name: string;
  labelId: string;
  selectedDate: Date;
  onSelect: (date: Date) => void;
};

export const DatePicker = ({
  name,
  labelId,
  selectedDate,
  onSelect
}: DatePickerProps) => {
  const [showDatePicker, setShowDatePicker] = useState<boolean>(false);
  const formattedDate = useMemo(() => formatDate(selectedDate), [selectedDate]);

  const onValueChange = () => {
    //Does nothing, but is added instead of changing behaviour inside Input component.
  };

  const handleInputClick = () => {
    setShowDatePicker(true);
  };

  const handleDatePickerClose = () => {
    setShowDatePicker(false);
  };

  const handleDateSelect = (newDate: Date | undefined) => {
    if (newDate) {
      onSelect(newDate);
    }

    handleDatePickerClose();
  };

  return (
    <div>
      {showDatePicker && (
        <div className='absolute z-50 w-full'>
          <div
            onClick={handleDatePickerClose}
            className='absolute h-full w-full opacity-0'
          ></div>
          <div className='mt-[60px] w-[320px] rounded-3 border border-gray-2 bg-white'>
            <DayPicker
              mode='single'
              selected={selectedDate}
              onSelect={handleDateSelect}
              fromYear={1950}
              toYear={2015}
              captionLayout='dropdown'
            />
          </div>
        </div>
      )}

      <Input
        name={name}
        value={formattedDate}
        type='text'
        labelId={labelId}
        onValueChange={onValueChange}
        onClick={handleInputClick}
      />
    </div>
  );
};
