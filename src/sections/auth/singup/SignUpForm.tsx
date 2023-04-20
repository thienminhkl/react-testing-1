import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
// @mui
import { Stack, IconButton, InputAdornment, TextField, Button } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// components
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

// ----------------------------------------------------------------------

export default function SignUpForm() {
    const [showPassword, setShowPassword] = useState(false);


    return (
        <>
            <Stack spacing={3}>
                <TextField name="email" label="Email address" />

                <TextField
                    name="password"
                    label="Password"
                    type={showPassword ? 'text' : 'password'}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                                    {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                    sx={{ my: 2 }}
                />
            </Stack>
            <Stack direction={'row'} sx={{ my:3 }} spacing={5}>
                <LoadingButton
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained">
                    Sign up
                </LoadingButton>

                <Button
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                    component={RouterLink}
                    to="/login">
                    To Login
                </Button>
            </Stack>
        </>
    );
}
