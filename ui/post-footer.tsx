import Avatar from './avatar';
import DateFormatter from './date-formatter';
import CoverImage from './cover-image';
import PostTitle from './post-title';
import type Author from '../lib/interfaces/author';

type Props = {
  title: string;
  coverImage: string;
  date: string;
  author: Author;
};

const PostFooter = ({ title, coverImage, date, author }: Props) => {
  return (
    <div className="mx-auto max-w-2xl">
      <div className="border-b-[1px] border-[#e5e8ed] py-4">
        <h3 className="pb-2 text-2xs text-gray-400">Author</h3>
        <p className="text-[16px] text-secondary-600">{author.name}</p>
      </div>

      <div className="border-b-[1px] border-[#e5e8ed] py-4">
        <h3 className="pb-2 text-2xs text-gray-400">Author</h3>
        <DateFormatter
          dateString={date}
          className="text-[16px] text-secondary-600"
        />
      </div>
    </div>
  );
};

export default PostFooter;
