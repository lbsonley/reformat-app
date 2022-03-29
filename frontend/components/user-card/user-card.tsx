import React from 'react';
import LabeledText from '../primitives/labeled-text/labeled-text';

const UserCard: React.FC<UserCardProperties> = ({ name, email, animal }) => {
  return (
    <div>
      <LabeledText label="Name" text={name} />
      <LabeledText label="Email" text={email} />
      {animal ? <LabeledText label="Animal" text={animal} /> : null}
    </div>
  );
};

export interface UserCardProperties {
  name: string;
  email: string;
  animal?: string;
}

export default UserCard;
