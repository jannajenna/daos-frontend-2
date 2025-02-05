import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/edit-profile')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/edit-profile"!</div>
}
