import { readdir } from 'fs/promises';
import path from 'path';

export async function GET() {
  const dirList = await readdir(process.cwd() + '/data/webVitals');
  const childNodes = dirList.map((filename) =>
    path.basename(filename, path.extname(filename)),
  );
  return Response.json(childNodes);
}
