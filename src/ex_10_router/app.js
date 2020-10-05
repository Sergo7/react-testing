import React from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

const UserPage = ({ match: { params } }) => (
    <div>
      User #{params.userId} <Link to="/users/6">Next user</Link>
    </div>
  );

export const UserWithRouter = withRouter(UserPage);