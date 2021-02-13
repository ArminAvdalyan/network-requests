import React from "react";

import Header from 'components/Header/Header';
import Layout from 'components/Layout/Layout';
import Posts from 'containers/Posts/Posts';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Layout >
      <Posts />
      </Layout>
    </div>
  );
}

export default App;
