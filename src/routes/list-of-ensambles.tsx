import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/list-of-ensambles')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/list-of-ensambles"!</div>
}
