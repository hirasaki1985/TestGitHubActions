export default class ObjectUtil {
  /**
   * null, undefined, 空文字を削除する
   */
  public static filterNull(params?: { [key: string]: any }): {
    [key: string]: any
  } {
    if (params == null) return {}

    const copyParams = { ...params }

    const keysForDel: string[] = []
    Object.keys(copyParams).forEach((key: string) => {
      const value = copyParams[key]
      if (value == null || value === '') keysForDel.push(key)
    })

    keysForDel.forEach((k) => {
      delete copyParams[k]
    })

    return copyParams
  }
}
