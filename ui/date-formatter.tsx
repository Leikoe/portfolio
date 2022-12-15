import { parseISO, format } from 'date-fns';

type Props = {
  dateString: string;
  className?: string;
};

const DateFormatter = ({ dateString, className }: Props) => {
  const date = parseISO(dateString);
  return (
    <time dateTime={dateString} className={className ? className : ''}>
      {format(date, 'LLLL	d, yyyy')}
    </time>
  );
};

export default DateFormatter;
