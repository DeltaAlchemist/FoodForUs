import React, { useState } from "react";
import MaskedInput from "react-text-mask";
import PropTypes from "prop-types";
import { useStyles } from "./InputMask.style";
import { FormControl, InputLabel, Input } from "@material-ui/core";

function TextMaskCustom(props) {
    const { inputRef, ...other } = props;

    return(
        <MaskedInput 
            {...other}
            ref={(ref) => {
                inputRef(ref ? ref.inputElement : null);
            }}
            mask={['(', /[1-9]/, /[1-9]/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
            placeholderChar={'\u2000'}
            showMask
        />
    );
}

TextMaskCustom.propTypes = {
    inputRef: PropTypes.func.isRequired,
};

export const InputMask = () => {
    const classes = useStyles();
    const [values, setValues] = useState({
        textmask: '(  )     -    ',
        numberformat: '1320',
    });

    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        });
    };

    return(
        <div className={classes.root}>
            <FormControl>
                <InputLabel htmlFor="telefone">Telefone</InputLabel>
                <Input 
                    value={values.textmask}
                    onChange={handleChange}
                    name="textmask"
                    id="telefone"
                    inputComponent={TextMaskCustom}
                />
            </FormControl>
        </div>
    );
}

