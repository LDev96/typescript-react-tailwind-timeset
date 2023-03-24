import * as React from 'react';
import {
  forwardRef,
  useRef,
  MouseEventHandler,
  LegacyRef,
  Fragment,
} from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './style.css';
import { XIcon } from '@heroicons/react/solid';

type ownProps = {
  visits: Date[];
  setVisits: React.Dispatch<React.SetStateAction<Date[]>>;
};

type visitTimeProps = {
  value?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  date: Date;
  handleRemove: () => void;
};

export default function VisitList({ visits, setVisits }: ownProps) {
  const datePicker = useRef(null);
  const newVisits = [...visits];

  const pastDate = new Date();
  pastDate.setUTCHours(0, 0, 0, 0);

  function handleAdd(date: Date, index: number) {
    newVisits.splice(index, 1, date);
    setVisits(newVisits);
  }

  function handleRemove(index: number) {
    newVisits.splice(index, 1);
    setVisits(newVisits);
  }

  const VisitTime = forwardRef(
    (
      { value, onClick, date, handleRemove }: visitTimeProps,
      ref: LegacyRef<HTMLButtonElement>
    ) => (
      <Fragment>
        <div
          className={`text-white select-none flex mb-1 rounded-full items-center justify-center space-x-1 py-1 w-48  ${
            date <= pastDate
              ? 'bg-gray-600 cursor-none'
              : 'bg-yellow-600 cursor-pointer'
          }`}
        >
          <button
            className={`outline-none cursor-none`}
            onClick={onClick}
            ref={ref}
          >
            {value}
          </button>
          <XIcon
            className={'ml-4 h-4 text-white '}
            onClick={() => {
              if (date >= pastDate) handleRemove();
            }}
          />
        </div>
      </Fragment>
    )
  );

  return (
    <Fragment>
      <div className="flex flex-col overflow-y-auto">
        {visits.map((date, index) => (
          <DatePicker
            selected={date}
            onChange={(date) => handleAdd(date, index)}
            showTimeSelect
            showTimeSelectOnly
            timeIntervals={15}
            dateFormat="dd/MM/yyyy h:mm aa"
            disabled={date <= pastDate}
            customInput={
              <VisitTime
                date={date}
                ref={datePicker}
                handleRemove={() => handleRemove(index)}
              />
            }
          />
        ))}
      </div>
    </Fragment>
  );
}
