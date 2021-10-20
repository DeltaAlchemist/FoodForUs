import React from 'react';

import { TextField, Button, makeStyles } from '@material-ui/core';
import { useForm, Controller } from 'react-hook-form';

const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		padding: theme.spacing(2),

		'& .MuiTextField-root': {
			margin: theme.spacing(1),
			width: '300px',
		},
		'& .MuiButtonBase-root': {
			margin: theme.spacing(2),
		},
	},
}));

const Form = ({ handleClose }) => {

	const classes = useStyles();
	
	const { handleSubmit, control } = useForm();

	const onSubmit = data => {
		console.log(data);
	}

	return (
		<form className={classes.root} onSubmit={handleSubmit(onSubmit)}>
			<Controller 
				name="firstName"
				control={control}
				defaultValue=""
				render={({ field: { onChange, value }, fieldState: { error } }) => (
					<TextField 
						label="Nome"
						variant="filled"
						value={onChange}
						error={!!error}
						helperText={ error ? error.message : null }
					/>
				)}
				rules = {{ required: 'Nome é obrigatório' }}
			/>
			<Controller
				name="lastName"
				control={control}
				defaultValue=""
				render={({ field: { onChange, value }, fieldState: { error } }) => (
					<TextField
						label="Sobrenome"
						variant="filled"
						value={value}
						onChange={onChange}
						error={!!error}
						helperText={error ? error.message : null}
					/>
				)}
				rules={{ required: 'Sobrenome é obrigatório' }}
			/>
			<Controller
				name="email"
				control={control}
				defaultValue=""
				render={({ field: { onChange, value }, fieldState: { error } }) => (
					<TextField
						label="Email"
						variant="filled"
						value={value}
						onChange={onChange}
						error={!!error}
						helperText={error ? error.message : null}
						type="email"
					/>
				)}
				rules={{ required: 'Email é obrigatório' }}
			/>
			<Controller
				name="password"
				control={control}
				defaultValue=""
				render={({ field: { onChange, value }, fieldState: { error } }) => (
					<TextField
						label="Senha"
						variant="filled"
						value={value}
						onChange={onChange}
						error={!!error}
						helperText={error ? error.message : null}
						type="password"
					/>
				)}
				rules={{ required: 'Senha é obrigatória' }}
			/>
			<div>
				<Button variant="contained" onClick={handleClose}>
					Cancelar
				</Button>
				<Button type="submit" variant="contained" color="primary">
					Registrar
				</Button>
			</div>
		</form>
	);
};

export default Form;