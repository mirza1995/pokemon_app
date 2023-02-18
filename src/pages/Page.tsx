type PageProps = {
  children: React.ReactNode;
};

const Page = (props: PageProps) => {
  return <>{props.children}</>;
};

export default Page;
