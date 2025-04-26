import React from "react";

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
    return(
    

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
        </div>
      </div>

      {/* Tech Stack Section */}
      <div className="mt-8 w-full">
        <h2 className="text-xl font-semibold mb-2">🔧 Tech Stack</h2>
        <p className="text-gray-700 mb-4">
          I work on the following technologies:
        </p>
        <div className="flex flex-wrap gap-2">
          <span className="bg-gray-200 px-3 py-1 rounded-full text-sm">
            HTML
          </span>
          <span className="bg-gray-200 px-3 py-1 rounded-full text-sm">
            CSS
          </span>
          <span className="bg-gray-200 px-3 py-1 rounded-full text-sm">
            JavaScript
          </span>
          <span className="bg-gray-200 px-3 py-1 rounded-full text-sm">
            ReactJS
          </span>
          <span className="bg-gray-200 px-3 py-1 rounded-full text-sm">
            Tailwind
          </span>
          <span className="bg-gray-200 px-3 py-1 rounded-full text-sm">
            MongoDB
          </span>
          <span className="bg-gray-200 px-3 py-1 rounded-full text-sm">
            Express
          </span>
          <span className="bg-gray-200 px-3 py-1 rounded-full text-sm">
            NodeJs
          </span>
          {/* continue for C++, MongoDB, etc */}
        </div>
      </div>

      {/* GitHub Info Section */}
      <div className="mt-8 w-full">
        <h2 className="text-xl font-semibold mb-2">📂 GitHub</h2>
        <p className="text-gray-700">
          Total Public Repositories: {public_repository}
        </p>
      </div>
    </div>
  
  )}
}

export default UserClass;
