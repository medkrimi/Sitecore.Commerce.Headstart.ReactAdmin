import {Image, useColorMode} from "@chakra-ui/react"

import {Link} from "../navigation/Link"

const HeaderLogo = () => {
  const {colorMode} = useColorMode()
  return (
    <Link href="/">
      <Image
        w={165}
        src={colorMode === "dark" ? "/vector/iron-mtn--dark.svg" : "/vector/iron-mtn--default.svg"}
        alt="Iron Mountain"
      />
    </Link>
  )
}

export default HeaderLogo
