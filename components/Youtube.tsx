export default function YouTube({ id }: { id: string }) {
  return (
    <iframe
      className="w-full aspect-video"
      src={`https://www.youtube.com/embed/${id}`}
    />
  );
}
