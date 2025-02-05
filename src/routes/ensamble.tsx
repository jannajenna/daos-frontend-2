import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/ensamble')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/ensamble"!</div>
}
