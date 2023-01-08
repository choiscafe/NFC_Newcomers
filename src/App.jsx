import './App.css';
import TypeIt from 'typeit-react';
import FormInput from './components/FormInput';
import Links from './components/Links';

function App() {

  return (
    <div className="App">
      <div className="header-inner">
        <img src="https://images.squarespace-cdn.com/content/v1/5b0efe015cfd793504d5d5ab/1534993905752-5LYTBKUJFBNKH06TCOYR/NFC_HORIZONTAL_LOCKUP_white_lg.png?format=1500w" className="App-logo" alt="logo" />
      </div>
      <header className="App-header">
        <h1>
          NEWCOMERS REGISTRATION FORM
        </h1>

        <h3>
          <TypeIt
            getBeforeInit={(instance) => {
              instance
                .type("Hello, New family members. Welcome!")
                .move(-10, { delay: 300 })
                .type(" ♡", { delay: 300 })
                .move(null, { to: "END" })
                .pause(750)
                .delete(10, { delay: 750 })
                .type(" Shalom!")
                .break({ delay: 10 })
                .type("<em> We welcome you in the name of the </em>")
                .pause(700)
                .type("<em>Lord!</em>")
                .go();

              // Remember to return it!
              return instance;
            }}
          />
        </h3>
        <p>
          If you are new to New Frontier Church (NFC),<br></br> please fill out and submit the form below.
        </p>
        <FormInput />
        <Links />
      </header>
    </div>
  );
}

export default App;
