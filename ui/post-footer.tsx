import Avatar from './avatar';
import DateFormatter from './date-formatter';
import CoverImage from './cover-image';
import PostTitle from './post-title';

type Props = {
  title: string;
  coverImage: string;
  date: string;
  authors: string;
};

const PostFooter = ({ title, coverImage, date, authors }: Props) => {
  return (
    <div className="e-container w-container mx-auto mt-20 flex-col">
      <div className="border-t-[1px] border-[#e5e8ed] py-4">
        <h3 className="pb-2 text-2xl text-gray-400 lg:text-2xs">Authors</h3>
        <p className="text-3xl text-secondary-600 dark:text-white lg:text-[16px]">
          {authors}
        </p>
      </div>

      <div className="border-t-[1px] border-[#e5e8ed] py-4">
        <h3 className="pb-2 text-2xl text-gray-400 lg:text-2xs">Published</h3>
        <DateFormatter
          dateString={date}
          className="text-3xl text-secondary-600 dark:text-white lg:text-[16px]"
        />
      </div>
    </div>
  );
};

export default PostFooter;
