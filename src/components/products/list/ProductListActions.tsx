import { Button, HStack, Icon, Menu, MenuButton, MenuDivider, MenuItem, MenuList, Text } from "@chakra-ui/react"
import { ChevronDownIcon, DeleteIcon, EditIcon } from "@chakra-ui/icons"
import { FC, useMemo } from "react"

import BulkImport from "@/components/demo/BulkImport"
import ExportToCsv from "@/components/demo/ExportToCsv"
import { TbSpeakerphone } from "react-icons/tb"

interface IProductListActions {
  selected?: string[]
  onBulkPromote: () => void
  onBulkEdit: () => void
  onBulkDelete: () => void
}
// title={`${selected.length} selected product${selected.length === 1 ? "" : "s"}`}
const ProductListActions: FC<IProductListActions> = ({ selected, onBulkPromote, onBulkEdit, onBulkDelete }) => {
  const hasBulkSelection = useMemo(() => {
    return selected && selected.length > 1
  }, [selected])
  return (
    <Menu>
      <MenuButton as={Button} variant="outline" width={"max-content"}>
        <HStack>
          <Text>Actions</Text>
          <ChevronDownIcon />
        </HStack>
      </MenuButton>
      <MenuList>
        <BulkImport variant="menuitem" />
        <ExportToCsv variant="menuitem" />
        <MenuDivider />
        <MenuItem justifyContent="space-between" onClick={onBulkEdit} isDisabled={!hasBulkSelection}>
          Bulk Edit <EditIcon />
        </MenuItem>
        <MenuItem justifyContent="space-between" onClick={onBulkEdit} isDisabled={!hasBulkSelection}>
          Bulk Delete <DeleteIcon />
        </MenuItem>
        <MenuItem
          justifyContent="space-between"
          onClick={onBulkPromote}
          isDisabled={!hasBulkSelection}
        >
          Promote <Icon as={TbSpeakerphone} transform={"rotate(-35deg)"} fontSize="1.15em" stroke-width="1.7" />
        </MenuItem>
      </MenuList>
    </Menu>
  )
}

export default ProductListActions
