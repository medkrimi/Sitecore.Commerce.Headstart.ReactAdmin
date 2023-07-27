import { Image, useColorMode } from "@chakra-ui/react"

import { Link } from "../navigation/Link"

const HeaderLogo = () => {
  const { colorMode } = useColorMode()
  return (
    <Link href="/">
      <Image w={165} src={colorMode === "dark" ? "/vector/cracker-barrel--dark.svg" : "/vector/cracker-barrel--default.svg"} alt="Cracker Barrel" />
    </Link>
  )
}

export default HeaderLogo
