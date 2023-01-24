// referencia https://aws.amazon.com/pt/blogs/mobile/amplify-uis-new-authenticator-component-makes-it-easy-to-add-customizable-login-pages-to-your-react-angular-or-vue-app/

import './App.css';
import { Amplify } from 'aws-amplify';
import awsConfig from './aws-exports';
import { withAuthenticator } from '@aws-amplify/ui-react'

// novo codigo from aws page
import '@aws-amplify/ui-react/styles.css';
import awsExports from './aws-exports';
import React from 'react';
Amplify.configure(awsExports);

//import {AmplifyAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
Amplify.configure(awsConfig);

// nova funcao do codigo from aws page
function App({ signOut, user }) {
  return (
    <div>
      <h1> Olá {user.username}</h1>
      <h1> Bem vindo ao CareBOX!</h1>
      <button onClick={signOut}>Sign out</button>
      </div>
  );
}

//export default App;
export default withAuthenticator(App);
