import React from 'react';
import './ProfileCard.css';

class ProfileCard extends React.Component {
    

    render() {
        const { data, filteredData } = this.props;

        return [
            <h2 className="profile-card-title" key={1.1}>List of Items</h2>,
            <ul className="profile-card-container" key={1.2}>
                {filteredData && filteredData.map(item => {
                    return (<li key={item.id}>
                        {item.title}
                        </li>)
                })}
            </ul>
        ];
    }
}

export default ProfileCard;
