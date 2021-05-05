import { useSession, signIn, signOut } from "next-auth/client";
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  container: {
    color: "#000"
  }
})

export default function Login() {
  const classes = useStyles()

  const [session, loading] = useSession();

  if (loading) {
    return null;
  }

  if (session) {
    return (
      <main className={classes.container}>
        <h1>Signed in as {session.user.email}</h1> <br/>
        <button onClick={() => signOut()}>Sign Out</button>
      </main>
    )
  }
  
  return (
    <main className={classes.container}>
      <h1>Not signed in</h1> <br />
      <button onClick={() => signIn()}>Sign In</button>
    </main>
  )
}