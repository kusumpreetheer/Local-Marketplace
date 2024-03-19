import React from 'react';
import { useUser } from '@clerk/nextjs';
import Link from 'next/link';

const ProfileButton = () => {
  const { user } = useUser();
  
  if (!user) {
    return null; // or a placeholder avatar
  }

  return (
    <Link href="/profile">
        <img src={user.imageUrl} alt="User Avatar" style={{ borderRadius: '50%' }} />
    </Link>
  );
};

export default ProfileButton
