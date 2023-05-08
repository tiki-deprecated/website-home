import * as TikiSdk from '@mytiki/tiki-sdk-js'

export default defineNuxtPlugin(async (nuxtApp) => {
  await TikiSdk.config().initialize(
    'f3dbd181-1273-4be7-8a56-a9d258feccda',
    '072bb394-6a4a-4e03-9573-2df52f902d14'
  )
  return {
    provide: {
      license: (
        ptr: string,
        uses: Array<TikiSdk.LicenseUse>,
        terms: string,
        tags?: Array<TikiSdk.TitleTag>,
        description?: string
      ) => TikiSdk.license(ptr, uses, terms, tags, description),
    },
  }
})
