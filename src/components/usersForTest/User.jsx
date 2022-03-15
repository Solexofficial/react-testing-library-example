import React from 'react';

function User({ user, onDelete }) {
  return (
    <div>
      {user.name}
      <button id='user-delete' onClick={() => onDelete(user.id)}>
        delete
      </button>
    </div>
  );
}

export default User;
