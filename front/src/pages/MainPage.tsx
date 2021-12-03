import React, { useEffect, useState } from 'react'
import { useHealthCheckAction } from '../stores/hooks/HealthCheckActionHook'

const MainPage = () => {
  const healthCheckAction = useHealthCheckAction()

  useEffect(() => {
    ;(async () => {
      const result = await healthCheckAction()
      console.log('MainPage healthCheck()')
      console.log({
        result,
      })
    })()
  })

  return <div />
}

export default MainPage
