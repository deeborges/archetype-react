import React, { useCallback } from 'react';

const TabTitle = ({ title, setSelectedTab, index }) => {
  const onClick = useCallback(() => {
    setSelectedTab(index);
  }, [setSelectedTab, index]);

  return (
    <li>
      <button onClick={onClick}>{title}</button>
    </li>
  );
};

export default TabTitle;
