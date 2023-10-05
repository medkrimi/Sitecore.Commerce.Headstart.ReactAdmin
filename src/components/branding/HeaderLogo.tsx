import { Image, useColorMode } from "@chakra-ui/react"

import { Link } from "../navigation/Link"

const HeaderLogo = () => {
  const { colorMode } = useColorMode()
  return (
    <Link href="/">
      <Image w={165} src={colorMode === "dark" ? "/vector/isc2--dark.svg" : "/vector/isc2--default.svg"} alt="ISC2" />
    </Link>
  )
}

export default HeaderLogo
