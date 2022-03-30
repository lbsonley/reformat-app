import React from 'react';
import { useRouter } from 'next/router';
import ClientOnly from '../../components/client-only';
import UserDetail from '../../components/user-detail/user-detail';

const UserDetailPage: React.FC = () => {
  const router = useRouter();
  const { 'user-id': userId } = router.query;

  return (
    <ClientOnly>
      <UserDetail userId={userId as string} />
    </ClientOnly>
  );
};

export default UserDetailPage;
