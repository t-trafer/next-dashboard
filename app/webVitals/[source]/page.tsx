export default function Page({ params }: { params: { source: string } }) {
  const { source } = params;
  console.log(params);
  return source;
}
