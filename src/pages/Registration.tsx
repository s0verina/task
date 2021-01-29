import React, { useState, } from "react";
import { Button, TextField } from "@material-ui/core";
import { registerUsersAsync } from "../actions";
import { useDispatch, useSelector } from 'react-redux'
import { regesterUserErrorSelector } from '../selectors/user';

const Registration: React.FC = () => {
  const dispatch = useDispatch();
  const { error } = useSelector(regesterUserErrorSelector);
  const [name, setName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)
  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)
  const handleRegistration = () => dispatch(registerUsersAsync.request({ name, password }));

  return (
    <>
      {error && (<p className="error">{error}</p>)}
      <form noValidate autoComplete="off">
        <div className="form-row">
          <TextField
            label="Name"
            type="text"
            onChange={handleName}
            name="name"
            value={name}
          />
        </div>
        <div className="form-row">
          <TextField
            label="Password"
            type="password"
            onChange={handlePassword}
            name="password"
            value={password}
          />
        </div>
        <div className="form-row">
          <Button
            disabled={!name && !password}
            variant="contained"
            color="primary"
            type="button"
            onClick={handleRegistration}
          >
            Register
          </Button>
        </div>
      </form>
    </>
    );
}

export default Registration;