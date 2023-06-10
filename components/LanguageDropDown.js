export const languageSupports = [
  {
    label: "English",
    route: "/",
  },
  {
    label: "Telugu",
    route: "/tl",
  },
];

export const LanguageDropDown = () => {
  return (
    <div className="group inline-block relative">
      <button className="text-gray-800 py-2 px-4 rounded inline-flex items-center">
        <span className="mr-1">
          <img
            className="w-auto h-10 mr-1"
            src="language.svg"
            alt="language selector"
          />
        </span>
        <svg
          className="fill-current h-4 w-3"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
        </svg>
      </button>
      <ul className="absolute text-gray-800 pt-1 origin-top transform-gpu transition-transform scale-y-0 group-hover:scale-y-100 focus-within:scale-y-100">
        {languageSupports.map(({ label, route }, index) => (
          <li key={`${label}_${index}`} className="">
            <a
              className="block w-32 px-4 py-2 whitespace-nowrap bg-gray-200 hover:bg-green-400"
              href={route}
            >
              {label}
            </a>
          </li>
        ))}
        <li className="">
          <a
            className="w-32 bg-gray-200 hover:bg-green-400 text-xs break-words py-2 px-4 block whitespace-nowrap"
            href="https://github.com/kuluruvineeth"
            target="__blank"
          >
            Translation Error
          </a>
        </li>
      </ul>
    </div>
  );
};
