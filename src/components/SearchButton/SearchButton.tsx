import { BiSearch } from 'react-icons/bi';

type SearchButtonProps = {
  placeholder: string;
  name: string;
};

export const SearchButton = ({ placeholder, name }: SearchButtonProps) => {
  return (
    <div className='relative w-full'>
      <span className='absolute inset-y-0 right-0 flex items-center pr-5'>
        <button
          type='submit'
          className='p-1 text-lg text-primary hover:text-primary-dark focus:outline-none'
        >
          <BiSearch />
        </button>
      </span>
      <input
        type='text'
        name={name}
        placeholder={placeholder}
        className='
          w-full rounded-3 bg-white py-[26px]
          pl-5 pr-14 text-base font-light
          text-primary-dark placeholder:font-light 
          placeholder:text-gray focus:border-primary
          focus:outline-none md:text-title
        '
      />
    </div>
  );
};
