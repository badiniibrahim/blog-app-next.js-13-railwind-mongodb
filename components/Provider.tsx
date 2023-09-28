'use client';

import { Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';
import { ReactNode } from 'react';

const Provider = ({ children, session }: any) => (
  <SessionProvider session={session}>{children}</SessionProvider>
);

export default Provider;
