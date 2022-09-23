// Form dapat dibuat dengan TextField
// https://mui.com/material-ui/react-text-field/#basic-textfield
// dan Card
// https://mui.com/material-ui/react-card/#basic-card

import React, {useState} from "react";
import {Card, CardContent, CardActions, Button, TextField} from "@mui/material";

const ContactForm = ({fnTambahKontak}) => {
    // Form berisi name, phone, email, dan photo url
    // Buatlah state newContact berupa objek sesuai dengan data yang ada
    const [inputName, setName] = useState("");
    const [inputPhone, setPhone] = useState("");
    const [inputEmail, setEmail] = useState("");
    const [inputPhoto, setPhoto] = useState("");

    // fungsi untuk menghandle perubahan dari si input
    const InputOnChangeName = (event) => {
        setName(event.target.value);
    };
    const InputOnChangePhone = (event) => {
        setPhone(event.target.value);
    }
    const InputOnChangeEmail = (event) => {
        setEmail(event.target.value);
    }
    const InputOnChangePhoto = (event) => {
        setPhoto(event.target.value);
    }

    const formOnSubmitHandler = (event) => {
        // supaya tidak refresh
        event.preventDefault();

        const newContact = {
            name : inputName,
            phone : inputPhone,
            email : inputEmail,
            photo : inputPhoto,
        };

        fnTambahKontak(newContact);

        // kosongkan isi dari input data
        setName("");
        setPhone("");
        setEmail("");
        setPhoto("");
    };

    return (
        <> 
            <Card sx={{ minWidth: 400, backgroundColor: 'rgb(227 213 173 / 28%)', margin:"5em", }}>
                <CardContent>
                    <form style={{margin: "0.5em 0"}} onSubmit={formOnSubmitHandler}>
                        <TextField fullWidth label="Name *" variant="filled" value={inputName} onChange={InputOnChangeName} />
                        <TextField fullWidth label="Phone *" variant="filled" margin="normal" value={inputPhone} onChange={InputOnChangePhone} />
                        <TextField fullWidth label="Email *" variant="filled" margin="normal" value={inputEmail} onChange={InputOnChangeEmail} />
                        <TextField fullWidth label="Photo URL *" variant="filled" margin="normal" value={inputPhoto} onChange={InputOnChangePhoto} />
                    </form>
                </CardContent>
                <CardActions>
                    <Button variant="text" type="submit" color="success">ADD NEW</Button>
                </CardActions>
            </Card>

        </>
    );
};

export default ContactForm;