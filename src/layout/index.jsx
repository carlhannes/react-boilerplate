import React from 'react';

function Layout({ sidebar, children }) {
  return (
    <React.Fragment>
      <div className="sidebar">
        {sidebar}
      </div>
      <main>
        {children}
      </main>
    </React.Fragment>
  );
}

export default Layout;
