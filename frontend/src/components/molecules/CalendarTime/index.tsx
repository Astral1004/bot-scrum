import { FC } from 'react';
import { CloseButton, ContainerDateTime, Title } from './styles';
import { Calendar } from 'primereact/calendar';
import Moment from 'react-moment';

interface QuestionCalendarTimeProps {
  periodicityPoll: string;
  flagCalendar: boolean;
  setFlag: () => void;
  dateTime?: Date | Date[];
  setDateTime: (value: Date | Date[] | undefined) => void;
}

export const QuestionCalendarTime: FC<QuestionCalendarTimeProps> = ({
  periodicityPoll,
  flagCalendar,
  setFlag,
  dateTime,
  setDateTime
}) => {
  return (
    <>
      {periodicityPoll !== 'Не повторяется' &&
        periodicityPoll !== 'Выбрать периодичность повторений' &&
        flagCalendar && (
        <ContainerDateTime className=" p-shadow-2">
          <CloseButton className="pi pi-times" onClick={() => setFlag()} />
          <div className=" p-d-flex p-jc-start p-ai-center p-flex-column">
            <Title>Дата и время</Title>
            <Calendar
              id="time24"
              hourFormat="24"
              value={dateTime}
              onChange={(e) => setDateTime(e.value)}
              showTime
              showSeconds
              showIcon
            />
            <p>
              {periodicityPoll}
              {dateTime && (
                <Moment format=" c YYYY/MM/DD в HH:mm">
                  {String(dateTime)}
                </Moment>
              )}
            </p>
          </div>
        </ContainerDateTime>
      )}
    </>
  );
};
