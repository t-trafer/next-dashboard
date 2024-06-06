import NavLinks from './nav-links';

async function getWebVitalSources() {
  const res = await fetch('http://localhost:3001/api/fs/web-vital-source');
  return res.json();
}

export default async function SideNav() {
  const sources: string[] = await getWebVitalSources();
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2">
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks sources={sources} />
        <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
      </div>
    </div>
  );
}
