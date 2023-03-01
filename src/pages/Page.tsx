import { Navbar } from '@components/Navbar';

type PageProps = {
  children: React.ReactNode;
};

const Page = (props: PageProps) => {
  return (
    <>
      <Navbar />
      {props.children}
    </>
  );
};

export default Page;
