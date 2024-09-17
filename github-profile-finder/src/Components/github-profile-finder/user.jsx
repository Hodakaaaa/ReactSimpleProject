export default function User({ user }) {
    const {
      avatar_url,
      followers,
      following,
      public_repos,
      name,
      login,
      bio,
      location,
      created_at
    } = user;
  
    const createdData = new Date(created_at);
  
    return (
      <div className="user">
        <div>
          <img src={avatar_url} className="avatar" alt="User Avatar" />
        </div>
        <div>
          <a href={`https://github.com/${login}`} target="_blank" rel="noopener noreferrer">
            {name || login}
          </a>
  
          {bio && <p>{bio}</p>}
          {location && <p>Location: {location}</p>}
          <p>User Joined on {""} 
            {`${createdData.getDate()} ${createdData.toLocaleString("en-us", { month: "short" })}`}
          </p>
          <p>Followers: {followers}</p>
          <p>Following: {following}</p>
          <p>Public Repos: {public_repos}</p>
        </div>
      </div>
    );
  }
  