import React from 'react';

interface HelloWorldProps {
  name: string;
}

const HelloWorld: React.FC<HelloWorldProps> = ({ name }) => {
  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h1>Welcome, {name}!</h1>
      <p>This is a simple TypeScript React component.</p>
    </div>
  );
};

export default HelloWorld;
