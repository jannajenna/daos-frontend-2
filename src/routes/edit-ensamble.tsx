import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/edit-ensamble')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/edit-ensamble"!</div>
}
