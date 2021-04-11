
const Card = props => {
    const { login, name, location, url, followers, following, bio, avatar_url } = props.data;
    return (
        <div className='UserCard'>
            <div style={{display: 'flex', }}>
                <img src={avatar_url}></img>
                <div>
                   <h1>{name}</h1>
                <h2>{login}</h2> 
                </div>
                
            </div>
            
            <p>location: {location}</p>
            <a>profile: {url}</a>
            <p>folowers: {followers}</p>
            <p>following: {bio}</p>
        </div>
    )
}

export default Card;