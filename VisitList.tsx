import * as React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './style.css';
import { XIcon } from '@heroicons/react/solid';

type ownProps = {
  visits: Date[];
  setVisits: React.Dispatch<React.SetStateAction<Date[]>>;
};

export default function VisitList({ visits, setVisits }: ownProps) {
  const pastDate = new Date();
  pastDate.setHours(-24);

  return (
    <React.Fragment>
      <div className="flex flex-col overflow-y-auto">
        {visits.map((date, index) => {
          const isValidDate = date <= pastDate;
          return(
          <div className={`flex mb-1 rounded-full items-center space-x-1 py-1 w-48 ${isValidDate? 'bg-gray-600 ': 'bg-yellow-600' }`}>
            <XIcon
              className={'ml-4 h-4 text-white '}
              onClick={() => {
                const newVisits = [...visits];
                newVisits.splice(index, 1);
                setVisits(newVisits);
              }}
            />
            <DatePicker
              className="bg-transparent text-white w-40 outline-none"
              selected={date}
              onChange={(date) => {
                const newVisits = [...visits];
                newVisits.splice(index, 1, date);
                setVisits(newVisits);
              }}
              showTimeSelect
              showTimeSelectOnly
              timeIntervals={15}
              timeCaption="Time"
              dateFormat="dd/MM/yyyy h:mm aa"
              disabled={isValidDate}
            />
          </div>
        )})}
      </div>
    </React.Fragment>
  );
}
