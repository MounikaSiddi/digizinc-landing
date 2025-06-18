// app/(connect)/layout.tsx

import React from 'react';

export const metadata = {
  title: 'Connect With Bhargava Raj',
  description: 'Founder of the Digizinc AI Digital Marketing Agency',
};

export default function ConnectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        
        {children}
       
      </body>
    </html>
  );
}