import React from 'react';
import { Link } from 'react-router-dom';

const ChallengeCardGrid = ({ children }) => {
  return (
    <React.Fragment>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 gap-y-4">
        {React.Children.map(children, (child) => (
          <Link to={`/challenge/${child.props.challenge.id}`}>
            {child}
          </Link>
        ))}
      </div>
    </React.Fragment>
  );
};

export default ChallengeCardGrid;