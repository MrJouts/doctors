import './Login.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export default function Login(props) {
  return (
    <section class="login-layout">
      <div class="login">
        <form action="">
          <TextField label="Email" variant="outlined" fullWidth margin="normal" />
          <TextField label="Password" variant="outlined" fullWidth margin="normal" />
          <Button variant="contained" color="primary" disableElevation fullWidth >
            Ingresar
          </Button>
        </form>
      </div>
    </section>
  )
}
