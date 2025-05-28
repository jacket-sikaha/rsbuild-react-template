import { Outlet } from 'react-router-dom';

function Index() {
  return (
    <div className='w-screen h-screen'>
      <Outlet />
    </div>
  );
}

export default Index;
