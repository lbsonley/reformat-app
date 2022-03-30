import React from 'react';
import Link from 'next/link';
import LabeledText from '../primitives/labeled-text/labeled-text';

const UserCard: React.FC<UserCardProperties> = ({
  id,
  name,
  email,
  animal,
}) => {
  return (
    <div>
      <Link href={`/users/${id}`}>
        <a>
          <LabeledText label="Name" text={name} />
          <LabeledText label="Email" text={email} />
          {animal ? <LabeledText label="Animal" text={animal} /> : null}
        </a>
      </Link>
    </div>
  );
};

export interface UserCardProperties {
  id: string;
  name: string;
  email: string;
  animal?: string;
}

export default UserCard;
