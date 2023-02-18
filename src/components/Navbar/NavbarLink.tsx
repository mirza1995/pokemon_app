import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';

type NavbarLinkProps = {
  link: string;
  textId: string;
};

export const NavbarLink = ({ link, textId }: NavbarLinkProps) => {
  return (
    <Link to={link} className='nav-link max-md:block'>
      <FormattedMessage id={textId} />
    </Link>
  );
};
