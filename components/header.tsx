export const Header = () => {
  return (
    <header className="px-6 md:px-24">
      <nav className="flex items-center justify-between">
        {/* logo, navigation and mobile menu */}
        <div className="flex items-center justify-center">
          <div>logo</div>
          <div>navigation</div>
        </div>
        {/* clerk user button */}
        <div className="flex items-center justify-end">clerk</div>
      </nav>
      <div>welcome message</div>
    </header>
  );
};
