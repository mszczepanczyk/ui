import { compact, getSlotCompoundVariant, memo, splitProps } from '../helpers.mjs';
import { createRecipe } from './create-recipe.mjs';

const navbarDefaultVariants = {
  "size": "md",
  "variant": "default"
}
const navbarCompoundVariants = []

const navbarSlotNames = [
  [
    "root",
    "navbar__root"
  ],
  [
    "brand",
    "navbar__brand"
  ],
  [
    "content",
    "navbar__content"
  ],
  [
    "links",
    "navbar__links"
  ],
  [
    "item",
    "navbar__item"
  ],
  [
    "actions",
    "navbar__actions"
  ]
]
const navbarSlotFns = /* @__PURE__ */ navbarSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, navbarDefaultVariants, getSlotCompoundVariant(navbarCompoundVariants, slotName))])

const navbarFn = memo((props = {}) => {
  return Object.fromEntries(navbarSlotFns.map(([slotName, slotFn]) => [slotName, slotFn.recipeFn(props)]))
})

const navbarVariantKeys = [
  "variant",
  "size"
]
const getVariantProps = (variants) => ({ ...navbarDefaultVariants, ...compact(variants) })

export const navbar = /* @__PURE__ */ Object.assign(navbarFn, {
  __recipe__: false,
  __name__: 'navbar',
  raw: (props) => props,
  classNameMap: {},
  variantKeys: navbarVariantKeys,
  variantMap: {
  "variant": [
    "default",
    "transparent",
    "ghost"
  ],
  "size": [
    "sm",
    "md",
    "lg"
  ]
},
  splitVariantProps(props) {
    return splitProps(props, navbarVariantKeys)
  },
  getVariantProps
})