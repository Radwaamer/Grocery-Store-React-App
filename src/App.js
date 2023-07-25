import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css';
import './assets/styles/main.css';
import '../node_modules/@fortawesome/fontawesome-free/js/fontawesome.min';

import Header from './layouts/header/Header';
import Footer from './layouts/footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Footer />
    </div>
  );
}

export default App;
