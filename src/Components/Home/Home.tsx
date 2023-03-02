import React, { useEffect, useState } from 'react';

interface Props {}

const Home: React.FC<Props> = () => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count]);

  const handleClick = () => {
    setCount(count + 1);
  };

  const buttons = [
    {
      label: 'Button 1',
      color: 'red',
      onClick: handleClick,
    },
    {
      label: 'Button 2',
      color: 'blue',
      onClick: handleClick,
    },
    {
      label: 'Button 3',
      color: 'green',
      onClick: handleClick,
    },
  ];

  return (
    <div>
      <h1>Welcome to my React app!</h1>
      <p>This is the home page.</p>
      <p>You clicked the button {count} times.</p>
      <div>
        {buttons.map((button, index) => (
          <button
            key={index}
            style={{ backgroundColor: button.color, color: 'white' }}
            onClick={button.onClick}
          >
            {button.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Home;
