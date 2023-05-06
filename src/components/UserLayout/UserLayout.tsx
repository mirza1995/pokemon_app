import { Navbar } from '@components/Navbar';

type UserLayoutProps = {
  children: React.ReactNode;
};

const UserLayout = (props: UserLayoutProps) => {
  return (
    <>
      <Navbar />
      {props.children}
    </>
  );
};

export default UserLayout;
