type Props = {
  content: string;
};

export default function PostBody({ content }: Props) {
  return (
    <div className="mx-auto mt-20 max-w-2xl border-[#e5e8ed] pb-5">
      <div
        className="prose prose-secondary dark:prose-invert"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
}
