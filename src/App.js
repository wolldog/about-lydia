import React, { useState } from 'react';

function App() {

  return (
    <div>
      <Header />
      <main>
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;
