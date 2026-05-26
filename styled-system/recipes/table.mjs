import { compact, getSlotCompoundVariant, memo, splitProps } from '../helpers.mjs';
import { createRecipe } from './create-recipe.mjs';

const tableDefaultVariants = {}
const tableCompoundVariants = []

const tableSlotNames = [
  [
    "root",
    "table__root"
  ],
  [
    "header",
    "table__header"
  ],
  [
    "body",
    "table__body"
  ],
  [
    "row",
    "table__row"
  ],
  [
    "head",
    "table__head"
  ],
  [
    "cell",
    "table__cell"
  ]
]
const tableSlotFns = /* @__PURE__ */ tableSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, tableDefaultVariants, getSlotCompoundVariant(tableCompoundVariants, slotName))])

const tableFn = memo((props = {}) => {
  return Object.fromEntries(tableSlotFns.map(([slotName, slotFn]) => [slotName, slotFn.recipeFn(props)]))
})

const tableVariantKeys = []
const getVariantProps = (variants) => ({ ...tableDefaultVariants, ...compact(variants) })

export const table = /* @__PURE__ */ Object.assign(tableFn, {
  __recipe__: false,
  __name__: 'table',
  raw: (props) => props,
  classNameMap: {},
  variantKeys: tableVariantKeys,
  variantMap: {},
  splitVariantProps(props) {
    return splitProps(props, tableVariantKeys)
  },
  getVariantProps
})