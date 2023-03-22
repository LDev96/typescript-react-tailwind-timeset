import * as React from 'react';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './style.css';

type ownProps = {
  visits: Date[];
  setVisits: React.Dispatch<React.SetStateAction<Date[]>>;
};

export default function VisitList({ visits, setVisits }: ownProps) {

  return (
    <React.Fragment>
      <div className="flex flex-col overflow-y-auto">
        {visits.map((date, index) =>
        <DatePicker
          className="mb-1 rounded-full bg-yellow-600 text-white w-40 py-1 text-center"
          selected={date}
          onChange={(date) => {
            const newVisits = [...visits];
            newVisits.splice(index, 1,  date);
            setVisits(newVisits)
          }}
          showTimeSelect
          showTimeSelectOnly
          timeIntervals={15}
          timeCaption="Time"
          dateFormat="dd/MM/yyyy h:mm aa"
        />
        )}
      </div>
    </React.Fragment>
  );
}
