import * as React from 'react';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './style.css';
import VisitList from './VisitList';

export default function TimeSetter() {
  const [startDate, setStartDate] = useState(new Date());
  const [visits, setVisits] = useState<string[]>(null);

  const dateString = `${startDate.toLocaleDateString(
    'en-AU'
  )} ${startDate.toLocaleTimeString('en-AU', {
    hour12: false,
    hour: '2-digit',
    minute: '2-digit',
  })}`;

  function handleSubmit(date: Date) {
    setStartDate(date);
    setVisits([...visits, dateString])
  }

  return (
    <React.Fragment>
      <div className="grid grid-cols-3 gap-4">
        <div className="flex justify-center">
          <DatePicker
            selected={startDate}
            onChange={(date) => handleSubmit(date)}
            timeInputLabel="Time:"
            dateFormat="MM/dd/yyyy h:mm aa"
            inline
          />
        </div>
        <div className="flex flex-col p-2 col-span-2">
          <VisitList visitDates={visits}/>
        </div>
      </div>
    </React.Fragment>
  );
}
