import React, { useState } from "react";

import { MuiThemeProvider } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import InputMask from "react-input-mask";

export const InputMaskComp = () => {

  const [value, setValue] = useState(null)

  return (
    <MuiThemeProvider>
      <InputMask
          onChange={event => setValue(event.target.value)}
          mask="(99) 99999-9999"
          value={value}
          disabled={false}
          maskChar=" "
      >
          {() => <TextField variant="filled" label="Telefone"/>}
      </InputMask>
    </MuiThemeProvider>
  );
  
}
