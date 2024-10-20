import React, { useEffect, useRef } from 'react';

const Badge = ({ children, type }) => {
  const badgeWrapper = useRef(null);

  useEffect(() => {
    if (badgeWrapper.current) {
      const width = badgeWrapper.current.querySelector('.poke_badge').offsetWidth;
      badgeWrapper.current.style.width = `${width + 100}px`;
    }
  }, []);

  return (
    <div className="badge-wrapper" ref={badgeWrapper}>
      <div className={`poke_badge badge-shiny badge-${type}`}>{children}</div>
    </div>
  );
};

export default Badge;