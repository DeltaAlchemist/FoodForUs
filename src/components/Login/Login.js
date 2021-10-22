import React from 'react';

import { TextField, Button } from '@material-ui/core';
import { useForm, Controller } from 'react-hook-form';

import useStyles from './Login.style';

const Login = ({ handleClose }) => {

	const classes = useStyles();
	
	const { handleSubmit, control } = useForm();

	const onSubmit = data => {
		console.log(data);
	}

	return (
		<form className={classes.root} onSubmit={handleSubmit(onSubmit)}>
			<h2 className="ui center aligned header" style={{ marginTop: '6px' }}>Efetue seu Login!</h2>
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
					Entrar
				</Button>
			</div>
		</form>
	);
};

export default Login;