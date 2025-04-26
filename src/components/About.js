import React from 'react'
import UserClass from '../helper/UserClass';

class About extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      userInfo: {
        name: "dummy",
        place: "dummylocation",
        bio: "dummybio",
        image: "https://picsum.photos/200",
        company: "dummycompany",
        following: "dummyfollowing",
        followers: "dummyfollowers",
        public_repository:"dummy repo"
      }
    }
  }

  async componentDidMount(){
    const data = await fetch("https://api.github.com/users/shwetank08");
    const res = await data.json();
    console.log(res);
    this.setState({
      userInfo: {
        name: res.name,
        place: res.location,
        bio: res.bio,
        image: res.avatar_url,
        company: res.company,
        following: res.following,
        followers: res.followers,
        public_repository:res.public_repos
      }
    })
  }

  render(){
    console.log(this.state.userInfo);
    
    const {name, place, bio, avatar_url, image, company, following, followers, public_repository} = this.state?.userInfo;
    // console.log(name, location, bio, avatar_url, company, following, followers, public_repos);
    

    return (
      <UserClass  userInformation={{
        name,
        place,
        bio,
        avatar_url,
        image,
        company,
        following,
        followers,
        public_repository
      }} ></UserClass>
    )
  }
}

export default About