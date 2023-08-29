import { Image, useColorMode } from "@chakra-ui/react"

import { Link } from "../navigation/Link"

const HeaderLogo = () => {
  const { colorMode } = useColorMode()
  return (
    <Link href="/">
      <Image w={165} src={colorMode === "dark" ? "/vector/aramark--dark.svg" : "/vector/aramark--default.svg"} alt="aramark" />
    </Link>
  )
}

export default HeaderLogo
