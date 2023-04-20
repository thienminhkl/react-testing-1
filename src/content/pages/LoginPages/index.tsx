import { Helmet } from 'react-helmet-async';
import { Link as RouterLink } from 'react-router-dom';
// @mui
import { styled } from '@mui/material/styles';
import { Link, Container, Typography, Divider, Stack, Button } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
// components
import Logo from 'src/components/Logo';
// sections
import { LoginForm } from 'src/sections/auth/login';
// ----------------------------------------------------------------------

const StyledRoot = styled('div')(({ theme }) => ({
    [theme.breakpoints.up('md')]: {
        display: 'flex',
    },
}));

const StyledSection = styled('div')(({ theme }) => ({
    width: '100%',
    maxWidth: 480,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: theme.palette.background.default,
}));

const StyledContent = styled('div')(({ theme }) => ({
    maxWidth: 480,
    margin: 'auto',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: theme.spacing(12, 0),
}));

// ----------------------------------------------------------------------

export default function LoginPage() {

    return (
        <>
            <Helmet>
                <title> Login </title>
            </Helmet>

            <StyledRoot>
                <Logo />

                <StyledSection>
                    <Typography variant="h3" sx={{ px: 5, mt: 10, mb: 5 }}>
                        Hi, Welcome Back
                    </Typography>
                    <img src="/assets/illustrations/illustration_login.png" alt="login" />
                </StyledSection>

                <Container maxWidth="sm">
                    <StyledContent>
                        <Typography variant="h4" gutterBottom>
                            Login CyberBugs
                        </Typography>

                        <Typography variant="body2" sx={{ mb: 5 }}>
                            Don’t have an account? {''}
                            <Link variant="subtitle2"
                                component={RouterLink}
                                to="/signup"
                            >Get started</Link>
                        </Typography>

                        <LoginForm />

                        <Divider sx={{ my: 3 }}>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                OR
                            </Typography>
                        </Divider>
                        <Stack direction="row" spacing={2} alignSelf="center">
                            <Button color="inherit">
                                <FacebookIcon />
                            </Button>

                            <Button color="inherit">
                                <TwitterIcon />
                            </Button>
                        </Stack>

                    </StyledContent>
                </Container>
            </StyledRoot>
        </>
    );
}
