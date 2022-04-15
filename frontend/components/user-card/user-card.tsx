import React from 'react';
import Link from 'next/link';
import LabeledText from '../primitives/labeled-text/labeled-text';

const UserCard: React.FC<UserCardProperties> = ({
  id,
  name,
  activeStudent,
}) => {
  return (
    <div>
      <Link href={`/users/${id}`}>
        <a>
          <LabeledText label="Name" text={name} />
          <LabeledText
            label="Status"
            text={activeStudent ? 'active' : 'inactive'}
          />
        </a>
      </Link>
    </div>
  );
};

export interface UserCardProperties {
  id: string;
  name: string;
  activeStudent: boolean;
  animal?: string;
}

export default UserCard;
