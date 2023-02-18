/* eslint-disable @typescript-eslint/no-empty-function */
import { screen, render, fireEvent } from '@testing-library/react';
import { DatePicker } from '@components/DatePicker';
import { AppMock } from '@mocks/AppMock';
beforeEach(() => {
  render(
    <AppMock>
      <DatePicker
        name='birthDate'
        labelId='signup.birthDate'
        selectedDate={new Date()}
        onSelect={() => {}}
      />
    </AppMock>
  );
});

describe('DatePicker component tests', () => {
  test('should be defined', () => {
    const input: HTMLInputElement = screen.getByTestId('birthDate');
    expect(input).toBeDefined();
  });

  test('should show date picker when input is clicked', () => {
    const input: HTMLInputElement = screen.getByTestId('birthDate');
    fireEvent.click(input);

    //FR should be shown in date picker when it is opened
    const datePicker: HTMLElement | null = screen.queryByDisplayValue('FR');
    expect(datePicker).toBeDefined();
  });

  test('should hide date picker when input is clicked again', () => {
    const input: HTMLInputElement = screen.getByTestId('birthDate');
    //First click should open date picker
    fireEvent.click(input);
    //Second click should close it
    fireEvent.click(input);

    //FR should be shown in date picker when it is opened
    const datePicker: HTMLElement | null = screen.queryByDisplayValue('FR');
    expect(datePicker).toBeNull();
  });

  test('should hide date picker when date is selected', () => {
    const input: HTMLInputElement = screen.getByTestId('birthDate');
    //First click should open date picker
    fireEvent.click(input);

    //FR should be shown in date picker when it is opened
    const dateButton: HTMLButtonElement = screen.getByText('1', {
      selector: 'button'
    });

    fireEvent.click(dateButton);

    //FR should be shown in date picker when it is opened
    const datePicker: HTMLElement | null = screen.queryByDisplayValue('FR');
    expect(datePicker).toBeNull();
  });
});
