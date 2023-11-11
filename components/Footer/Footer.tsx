const Footer: React.FunctionComponent = () => {
  return (
    <footer className="w-full">
      <div className=" mx-auto ">
        <div className="py-4 items-center justify-between sm:flex">
          <p className="text-neutral-400 hidden sm:block">
            Juan Carlos Ortiz Drada
          </p>
          <p className="text-neutral-400 hidden sm:block">
            {" "}
            Work in progress | 2023
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
