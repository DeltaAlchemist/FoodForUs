import React from 'react';

import { TextField, Button } from '@material-ui/core';
import { useForm, Controller } from 'react-hook-form';

import { InputMask } from '../InputMask';

import useStyles from './Form.style';

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
						value={value}
						onChange={onChange}
						error={!!error}
						helperText={ error ? error.message : null }
					/>
				)}
				rules = {{ required: 'Nome é obrigatório' }}
			/>
			<Controller
				name="birthday"
				control={control}
				defaultValue=""
				render={({ field: { onChange, value }, fieldState: { error } }) => (
					<TextField
						label="Data de Nascimento"
						variant="filled"
						defaultValue=""
						value={value}
						onChange={onChange}
						error={!!error}
						helperText={error ? error.message : null}
						InputLabelProps={{ shrink: true }}
						type="date"
					/>
				)}
				rules={{ required: 'Data de nascimento é obrigatória' }}
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
			<Controller
				name="phone"
				control={control}
				defaultValue=""
				render={() => (
					<InputMask />
				)}
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