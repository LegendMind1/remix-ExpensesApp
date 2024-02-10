import type { LinksFunction } from '@remix-run/node';
import AuthForm from '~/components/auth/AuthForm';
import linkName from '~/styles/auth.css';
export const links: LinksFunction = () => [{ rel:'stylesheet', href: linkName }]

export default function Auth() {
  return (
    <AuthForm />
  )
}
