import React from 'react';

import ActivityCard from './activity-card';

const UserActivity = (props) => {
  return(
    <div className="user-activity padding-all">
      <h4>
        Recent Activity
      </h4>
      <div className="activity-filter">
        <button href="#" className="big-button">
          All Activity <i className="ion-android-arrow-dropdown"></i>
        </button>
        <button href="#" className="big-button">
          Last Week <i className="ion-android-arrow-dropdown"></i>
        </button>
      </div>
      <div className="clear"></div>
      <ActivityCard activities={props.activities} />
    </div>
  );
}

export default UserActivity;
