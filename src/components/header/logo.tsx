export const Logo = () => {
  return (
    <a href="#">
      <img
        className="hidden dark:hidden lg:block"
        src={'/logo-black-mini.png'}
        alt="logo"
      />
      <img className="hidden dark:lg:block" src={'/logo-whit.png'} alt="logo" />
      <img
        className="block lg:hidden "
        src={'/logo-icon-blue.png'}
        alt="logo"
      />
    </a>
  );
};
