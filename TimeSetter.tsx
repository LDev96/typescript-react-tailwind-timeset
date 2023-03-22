import * as React from 'react';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './style.css';
import VisitList from './VisitList';

export default function TimeSetter() {
  const [startDate, setStartDate] = useState(new Date());
  const [visits, setVisits] = useState<Date[]>([new Date()]);

  function handleSubmit(date: Date) {
    setStartDate(date);
    setVisits([...visits, date]);
  }

  return (
    <React.Fragment>
      <div className="grid grid-cols-3 gap-4">
        <div className="flex justify-center">
          <DatePicker
            selected={startDate}
            onChange={handleSubmit}
            timeInputLabel="Time:"
            dateFormat="MM/dd/yyyy h:mm aa"
            excludeDates={visits}
            minDate={new Date()}
            inline
          />
        </div>
        <div className="flex flex-col p-2 col-span-2">
          <VisitList
            visits={visits.sort((a, b) => {
              return a - b;
            })}
            setVisits={setVisits}
          />
        </div>
      </div>
    </React.Fragment>
  );
}
