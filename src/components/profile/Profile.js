import './profile.scss'

function Host({host}) {
    return (
        <div className="profile-container">
            <div className="host-name">{host.name}</div>
            <img src={host.picture} alt={host.name} className="host-pic" />
        </div>
    )
}

export default Host
