import DateFormatter from './date-formatter';

type Props = {
  title: string;
  slug: string;
  date: string;
  gradient: string;
};

const PostCard = ({ title, slug, date, gradient }: Props) => {
  return (
    <a
      className={
        'min-h-min w-full transform rounded-xl bg-gradient-to-r p-1 transition-all hover:scale-[1.01] md:w-1/3' +
        gradient
      }
      href={'/posts/' + slug}
    >
      <div className="flex h-full flex-col justify-between rounded-lg bg-white p-4 dark:bg-neutral-900">
        <div className="flex flex-col justify-between md:flex-row">
          <h4 className="mb-6 w-full text-4xl font-medium tracking-tight text-gray-900 dark:text-gray-100 sm:mb-10 lg:text-lg">
            {title}
          </h4>
        </div>
        <DateFormatter dateString={date} className="font-mono text-2xs" />
      </div>
    </a>
  );
};

export default PostCard;
