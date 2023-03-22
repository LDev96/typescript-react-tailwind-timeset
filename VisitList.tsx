import * as React from 'react';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './style.css';

type ownProps = {
  visitDates: string[];
};

export default function VisitList({ visitDates }: ownProps) {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <React.Fragment>
      <div className="overflow-y-auto">
        <DatePicker
          className="rounded-full bg-yellow-600 text-white w-40 py-1 text-center"
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          showTimeSelect
          showTimeSelectOnly
          timeIntervals={15}
          timeCaption="Time"
          dateFormat="dd/MM/yyyy h:mm aa"
        />
      </div>
    </React.Fragment>
  );
}
