

import React from 'react';
import './css/plugins.css';
import './css/skin/skin-1.css';
import './css/style.css';
import './css/templete.css'
import './plugins/fontawesome/css/font-awesome.min.css';
import './plugins/slick/slick-theme.min.css';
import './plugins/slick/slick.min.css';
import Routes from 'route/routes/Routes';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';



function App() {

  return (

    <PayPalScriptProvider
      options={{ "client_id": process.env.PAYPAL_CLIENT_ID }}
    >
      <div className="App">
        <Routes />
      </div>
    </PayPalScriptProvider>


  );
}


export default App;
