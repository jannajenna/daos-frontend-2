import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/create-profile')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/create-profile"!</div>
}
