import { createFileRoute } from '@tanstack/react-router'
import LandingPage from '../pages/LandingPage/LandingPage'
export const Route = createFileRoute('/')({
  component: LandingPage,
})

//function RouteComponent() {
  //return <div>I finnally fucking fixed node.js</div>
//}
