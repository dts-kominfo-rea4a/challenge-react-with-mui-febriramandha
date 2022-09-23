// Terima props lalu tampilkan dalam Contact component
// Contact component dapat berupa MUI ListItem
// https://mui.com/material-ui/react-list/#folder-list
import React from 'react';

import {List, ListItem, ListItemText, ListItemAvatar, Avatar, Typography} from "@mui/material";

// Kalian bisa membuat CSS sendiri di src/components/Contact.css
// atau langsung tambahkan dengan sx={{}}
const Contact = ({ data }) => {
    // Contact berisi foto, nama, telepon, dan email
    return (
        <>
            <List sx={{ width: '100%', maxWidth: 400, backgroundColor: 'rgb(206 234 227 / 75%)', margin:"5em", }}>
                {data.map((kontak, key) => {
                    return(
                        <ListItem key={key}>
                            <ListItemAvatar sx={{paddingRight:"2em"}}>
                                <Avatar src={kontak.photo} sx={{ width: 56, height: 56 }} />
                            </ListItemAvatar>
                            <ListItemText
                                primary={kontak.name}
                                secondary={
                                    <React.Fragment>
                                        <Typography sx={{ display: 'inline' }} component="span" variant="body2" color="text.primary">
                                            {kontak.phone}
                                        </Typography>
                                        <Typography sx={{ display: 'flex' }} component="span" variant="body2" color="text.primary">
                                            {kontak.email}
                                        </Typography>
                                    </React.Fragment>
                                }
                            />
                        </ListItem>
                    )
                })}
                
                





                {/* <Divider component="li" />

                <ListItem>
                    <ListItemAvatar sx={{paddingRight:"2em"}}>
                        <Avatar src="http://placekitten.com/400" sx={{ width: 56, height: 56 }} />
                    </ListItemAvatar>
                    <ListItemText
                        primary="Summer BBQ"
                        secondary={
                            <React.Fragment>
                                <Typography sx={{ display: 'inline' }} component="span" variant="body2" color="text.primary">
                                    081234567890
                                </Typography>
                                <Typography sx={{ display: 'flex' }} component="span" variant="body2" color="text.primary">
                                    example@mail.com
                                </Typography>
                            </React.Fragment>
                        }
                    />
                </ListItem>
                <Divider component="li" />
                <ListItem>
                    <ListItemAvatar sx={{paddingRight:"2em"}}>
                        <Avatar src="http://placekitten.com/200" sx={{ width: 56, height: 56 }} />
                    </ListItemAvatar>
                    <ListItemText
                        primary="Oui Oui"
                        secondary={
                            <React.Fragment>
                                <Typography sx={{ display: 'inline' }} component="span" variant="body2" color="text.primary">
                                    087577588432
                                </Typography>
                                <Typography sx={{ display: 'flex' }} component="span" variant="body2" color="text.primary">
                                    withered@email.com
                                </Typography>
                            </React.Fragment>
                        }
                    />
                </ListItem> */}

            </List>
        </>
    );
};

export default Contact;
