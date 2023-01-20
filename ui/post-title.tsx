import { ReactNode } from 'react';

type Props = {
  children?: ReactNode;
};

const PostTitle = ({ children }: Props) => {
  return <h1 className="mb-5 text-5xl lg:text-2xl">{children}</h1>;
};

export default PostTitle;
