import type { NitroFetchOptions } from "nitropack"
import { get, omit } from "radash"
import { useAuth } from "~/composables/auth"

export interface JSendBase<T = unknown> {
  data: T
  message?: string
}

export interface MainServiceOpt extends NitroFetchOptions<string> {
  removeAuth?: boolean
}

/**
 * Handle fetch request
 * @param path include leading slash /
 * @param opt
 */
export async function useMainServiceFetch<R, O = MainServiceOpt>(path: string, opt: O = {} as O): Promise<JSendBase<R>> {
  const auth = useAuth()
  const { apiUrl = `${window.location.origin}/api` } = useRuntimeConfig().public
  const headers = new Headers(get(opt, "headers", {}))
  if (!get(opt, "removeAuth", false)) {
    headers.set("Authorization", `Bearer ${auth.jwtToken ?? ""}`)
  }

  return await $fetch<JSendBase<R>>(apiUrl + path, {
    // @ts-expect-error need to find out the correct typing for option
    ...omit(opt, ["headers", "removeAuth"]),
    headers,
  })
}
