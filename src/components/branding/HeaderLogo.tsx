import { Image, useColorMode } from "@chakra-ui/react"

import { Link } from "../navigation/Link"

const HeaderLogo = () => {
  const { colorMode } = useColorMode()
  return (
    <Link href="/">
      <Image w={165} src={colorMode === "dark" ? "/vector/AmericanStandard--dark.svg" : "/vector/AmericanStandard--default.svg"} alt="American Standard Marketplace" />
    </Link>
  )
}

export default HeaderLogo
