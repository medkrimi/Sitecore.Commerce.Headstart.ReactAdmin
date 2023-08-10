import ProtectedContent from "components/auth/ProtectedContent"
import {appPermissions} from "config/app-permissions.config"
import ProductFacetList from "@/components/productfacets/list/ProductFacetList"

const ProtectedProductFacets = () => {
  return (
    <ProtectedContent hasAccess={appPermissions.ProductManager}>
      <ProductFacetList />
    </ProtectedContent>
  )
}

export default ProtectedProductFacets
