type Props = {
  content: string;
};

export default function PostBody({ content }: Props) {
  return (
    <div className="mx-auto mt-16 max-w-2xl border-b-[1px] border-[#e5e8ed] pb-5">
      <div
        className="prose prose-secondary dark:prose-invert"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
}
