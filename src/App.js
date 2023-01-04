import './App.css';
import TypeIt from 'typeit-react';

function App() {



  return (
    <div className="App">
      <header className="App-header">
        <img src="https://images.squarespace-cdn.com/content/v1/5b0efe015cfd793504d5d5ab/1534993905752-5LYTBKUJFBNKH06TCOYR/NFC_HORIZONTAL_LOCKUP_white_lg.png?format=1500w" className="App-logo" alt="logo" />
        <h1>
          <TypeIt>NEWCOMERS REGISTRATION FORM</TypeIt>
        </h1>

        <h3>
          <TypeIt
            getBeforeInit={(instance) => {
              instance
                .type("Hello, New family members. Welcome.")
                .pause(750)
                .delete(8, { delay: 1000 })
                .type("Shalom!")
                .go();

              // Remember to return it!
              return instance;
            }}
          />
        </h3><br></br>
        <p>
          We welcome you in the name of the Lord.<br></br> If you are new to New Frontier Church (NFC), please fill out and submit the form below.
        </p>

        {/* </section>
        </div> */}
      </header>
    </div>
  );
}

export default App;
