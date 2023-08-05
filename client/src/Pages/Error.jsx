import React from 'react'
import { useRouteError } from 'react-router-dom'
import { Line } from 'recharts'

function Error() {
  const error = useRouteError();
  console.log(erro);
  return (
    <div>
      <h1>Error Page</h1>
      <Line to="/">back home</Line>
    </div>
  )
}

export default Error