import {ApiRole, CookieOptions} from "ordercloud-javascript-sdk"

import {appPermissions} from "./app-permissions.config"
import {uniq} from "lodash"

const appRoles = uniq(
  Object.keys(appPermissions)
    .map((permissionName) => appPermissions[permissionName])
    .flat()
)

export interface OcConfig {
  clientId: string
  marketplaceId: string
  scope: ApiRole[]
  baseApiUrl?: string
  allowAnonymous?: boolean
  cookieOptions?: CookieOptions
}

const ocConfig: OcConfig = {
  clientId: process.env.NEXT_PUBLIC_OC_CLIENT_ID || "EF27B826-DFA7-4032-8148-66DB5E505987",
  marketplaceId: process.env.NEXT_PUBLIC_OC_MARKETPLACE_ID,
  baseApiUrl: process.env.NEXT_PUBLIC_OC_API_URL || "https://sandboxapi.ordercloud.io",
  scope: appRoles,
  allowAnonymous: false,
  cookieOptions: null
}

export default ocConfig
