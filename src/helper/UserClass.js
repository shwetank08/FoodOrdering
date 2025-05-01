import React, { useEffect } from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.userInformation);

    const {
      name,
      place,
      bio,
      image,
      company,
      following,
      followers,
      public_repository,
    } = this.props.userInformation;
    return (
      <div className="p-4 flex flex-col items-center">
        {/* Profile Section */}
        <div className="flex flex-col items-center md:flex-row md:items-start md:gap-6">
          <img
            src={image}
            className="w-32 h-32 rounded-full object-cover"
            alt="Profile"
          />
          <div className="text-center md:text-left">
            <h1 className="text-2xl font-bold">{name}</h1>
            <p className="text-gray-600">{bio}</p>
            <div className="flex justify-center md:justify-start gap-2 mt-2 text-sm text-gray-500">
              <span>{place}</span>
              <span>@ {company}</span>
            </div>
            <div className="flex justify-center md:justify-start gap-4 mt-2 text-sm text-gray-500">
              <span>
                Followers:{" "}
                <span className="font-semibold text-black">{followers}</span>
              </span>
              <span className="text-gray-400">•</span>
              <span>
                Following:{" "}
                <span className="font-semibold text-black">{following}</span>
              </span>
            </div>
          </div>
        </div>

        {/* Tech Stack Section */}
        <div className="mt-8 w-full flex flex-col items-center">
          <h2 className="text-xl font-semibold mb-2 text-center">
            🔧 Tech Stack
          </h2>
          <p className="text-gray-700 mb-4 text-center">
            I work on the following technologies:
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-2xl">
            <span className="bg-gray-200 px-3 py-2 rounded-full text-center text-sm w-full">
              HTML
            </span>
            <span className="bg-gray-200 px-3 py-2 rounded-full text-center text-sm w-full">
              CSS
            </span>
            <span className="bg-gray-200 px-3 py-2 rounded-full text-center text-sm w-full">
              JavaScript
            </span>
            <span className="bg-gray-200 px-3 py-2 rounded-full text-center text-sm w-full">
              ReactJS
            </span>
            <span className="bg-gray-200 px-3 py-2 rounded-full text-center text-sm w-full">
              Tailwind
            </span>
            <span className="bg-gray-200 px-3 py-2 rounded-full text-center text-sm w-full">
              MongoDB
            </span>
            <span className="bg-gray-200 px-3 py-2 rounded-full text-center text-sm w-full">
              Express
            </span>
            <span className="bg-gray-200 px-3 py-2 rounded-full text-center text-sm w-full">
              NodeJs
            </span>
          </div>
        </div>

        {/* GitHub Info Section */}
        {/* GitHub Info Section */}
        <div className="mt-8 w-full flex flex-col items-center">
          <h2 className="text-xl font-semibold mb-2">📂 GitHub</h2>
          <p className="text-gray-700 mb-2">
            Total Public Repositories: {public_repository}
          </p>
          <a
            href="https://github.com/shwetank08"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-blue-500 hover:underline text-sm"
          >
            {/* GitHub Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="black"
              viewBox="0 0 24 24"
              className="w-5 h-5"
            >
              <path d="M12 0C5.37 0 0 5.373 0 12a12.006 12.006 0 008.207 11.385c.6.111.793-.26.793-.577v-2.038c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.757-1.333-1.757-1.089-.745.083-.729.083-.729 1.205.085 1.839 1.238 1.839 1.238 1.07 1.834 2.809 1.304 3.495.996.108-.776.418-1.305.76-1.605-2.665-.303-5.467-1.332-5.467-5.931 0-1.31.468-2.381 1.235-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23a11.51 11.51 0 013.004-.404 11.51 11.51 0 013.004.404c2.291-1.552 3.297-1.23 3.297-1.23.654 1.653.243 2.873.119 3.176.77.84 1.233 1.911 1.233 3.221 0 4.609-2.807 5.624-5.479 5.921.43.37.813 1.103.813 2.222v3.293c0 .32.192.694.801.576A12.004 12.004 0 0024 12c0-6.627-5.373-12-12-12z" />
            </svg>
            Visit my GitHub Profile
          </a>
        </div>
      </div>
    );
  }
}

export default UserClass;