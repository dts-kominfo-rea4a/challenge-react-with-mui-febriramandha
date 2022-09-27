import './App.css';

import Header from './components/Header';
import Contact from './components/Contact';
import ContactForm from './components/ContactForm';
import React, {useState} from 'react';

import {Grid, Typography} from "@mui/material";

// Uncomment untuk memuat daftar kontak
import contactsJSON from './data/contacts.json';
const App = () => {
  // Masukkan Header dan lakukan map untuk Contact ke dalam div App
  // untuk membuat daftar kontak bisa menggunakan MUI list
  // https://mui.com/material-ui/react-list/#folder-list

  // Masukkan contacts yang sudah didapat dalam JSON sebagai initial state
  const [contacts, setContacts] = useState(contactsJSON);
  // Buatlah handler untuk menambahkan kontak baru yang akan dikirim ke ContactForm

  const handleNewContact = (value) => {
    setContacts([...contacts, value]);
  };

  return (
    <div className="App">
      <Header />
        <Grid container spacing={2} columns={12}>
          <Grid md={6}>
            <ContactForm fnTambahKontak={(value) => handleNewContact(value)} />
          </Grid>
          <Grid md={6}>
            <Contact data={contacts} />
          </Grid>
        </Grid>

      <Typography variant="body1"  align="center" sx={{mb:"0.5em"}}>
          {'Copyright © '}
          {new Date().getFullYear()}{' - '}
            Febri Ramandha
        </Typography>
    </div>
  );
};

export default App;
