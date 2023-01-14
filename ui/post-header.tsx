import Avatar from './avatar';
import DateFormatter from './date-formatter';
import CoverImage from './cover-image';
import PostTitle from './post-title';

type Props = {
  title: string;
  coverImage: string;
  date: string;
  author: string;
};

const PostHeader = ({ title, coverImage, date, author }: Props) => {
  return (
    <div className="bg-pink-100 dark:bg-[#111]">
      <div className="e-container w-container flex-col justify-between gap-8 pt-24 lg:flex-row">
        {/* left text col */}
        <div className="flex basis-1/3 flex-col justify-center">
          <PostTitle>{title}</PostTitle>
          <DateFormatter dateString={date} className="font-mono text-2xs" />
        </div>

        {/* right img col */}
        <div className="max-h-[500px] overflow-hidden">
          <img
            src={coverImage}
            alt={title}
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default PostHeader;
