import { useCallback } from 'react'
import ServiceFactory from '../../modules/ServiceFactory'

/**
 * ヘルスチェックを行う
 */
// eslint-disable-next-line import/prefer-default-export
export function useHealthCheckAction() {
  const healthCheckService = ServiceFactory.getHealthCheckService()

  return useCallback(async (): Promise<boolean> => {
    const result = await healthCheckService.healthCheck()

    return result || false
  }, [healthCheckService])
}
