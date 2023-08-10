import {useEffect, useState} from "react"
import {SupplierAddressForm} from "components/supplieraddresses"
import {Container, Skeleton} from "@chakra-ui/react"
import {Address, SupplierAddresses} from "ordercloud-javascript-sdk"
import ProtectedContent from "components/auth/ProtectedContent"
import {appPermissions} from "config/app-permissions.config"
import {useRouter} from "hooks/useRouter"
import {ISupplierAddress} from "types/ordercloud/ISupplierAddress"

const SupplierAddressListItem = () => {
  const router = useRouter()
  const [supplierAddress, setSupplierAddress] = useState({} as Address)
  useEffect(() => {
    const getSupplierAddress = async () => {
      const address = await SupplierAddresses.Get<ISupplierAddress>(
        router.query.supplierid as string,
        router.query.supplieraddressid as string
      )
      setSupplierAddress(address)
    }
    if (router.query.supplieraddressid) {
      getSupplierAddress()
    }
  }, [router.query.supplierid, router.query.supplieraddressid])
  return (
    <>
      {supplierAddress?.ID ? (
        <SupplierAddressForm address={supplierAddress} supplierId={router.query.supplierid.toString()} />
      ) : (
        <Container maxW="100%" bgColor="st.mainBackgroundColor" flexGrow={1} p={[4, 6, 8]}>
          <Skeleton w="100%" h="544px" borderRadius="md" />
        </Container>
      )}
    </>
  )
}

const ProtectedSupplierAddressListItem = () => {
  return (
    <ProtectedContent hasAccess={appPermissions.SupplierManager}>
      <SupplierAddressListItem />
    </ProtectedContent>
  )
}

export default ProtectedSupplierAddressListItem
