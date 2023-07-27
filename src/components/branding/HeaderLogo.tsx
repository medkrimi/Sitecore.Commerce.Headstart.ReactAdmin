import { Image, useColorMode } from "@chakra-ui/react"

import { Link } from "../navigation/Link"

const HeaderLogo = () => {
  const { colorMode } = useColorMode()
  return (
    <Link href="/">
      <Image w={165} src={colorMode === "dark" ? "/vector/hilton-logo--dark.svg" : "/vector/hilton-logo--default.svg"} alt="Hilton & Sitecore" />
    </Link>
  )
}

export default HeaderLogo
