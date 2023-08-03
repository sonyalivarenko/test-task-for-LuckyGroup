import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import HeaderNavPopup from './HeaderNavPopup';

function App() {
  
  const [isHeaderPopupOpen, setIsHeaderPopupOpen] = React.useState(false);
  const [width, setWidth] = React.useState(window.innerWidth);

  function handleHeaderNavClick() {
    setIsHeaderPopupOpen(true);
  }

  function closePopup() {
    setIsHeaderPopupOpen(false)
  }

  React.useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);

  return (
    <div className="page">
        <Header onOpenHeaderNav={handleHeaderNavClick}
                onCloseHeaderNav={closePopup} />
        <Main />
        <Footer />
          {width < 1000 && <HeaderNavPopup isOpen={isHeaderPopupOpen} onClose={closePopup} />}
    </div>
  );
}

export default App;