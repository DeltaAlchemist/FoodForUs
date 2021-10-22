import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import Form from '../Form';
import Login from '../Login';

export const ModalDialog = ({ open, handleClose }) => {
	return (
		<Dialog open={open} onClose={handleClose}>
			<Form handleClose={handleClose} />
		</Dialog>
	);
};

export const ModalLogin = ({ open, handleClose }) => {
	return (
		<Dialog open={open} onClose={handleClose}>
			<Login handleClose={handleClose} />
		</Dialog>
	);
};

// export default ModalDialog;