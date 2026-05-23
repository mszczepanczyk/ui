import { compact, getSlotCompoundVariant, memo, splitProps } from '../helpers.mjs';
import { createRecipe } from './create-recipe.mjs';

const layoutDefaultVariants = {
  "sidebar": "none"
}
const layoutCompoundVariants = []

const layoutSlotNames = [
  [
    "root",
    "layout__root"
  ],
  [
    "header",
    "layout__header"
  ],
  [
    "body",
    "layout__body"
  ],
  [
    "sidebar",
    "layout__sidebar"
  ],
  [
    "main",
    "layout__main"
  ],
  [
    "footer",
    "layout__footer"
  ]
]
const layoutSlotFns = /* @__PURE__ */ layoutSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, layoutDefaultVariants, getSlotCompoundVariant(layoutCompoundVariants, slotName))])

const layoutFn = memo((props = {}) => {
  return Object.fromEntries(layoutSlotFns.map(([slotName, slotFn]) => [slotName, slotFn.recipeFn(props)]))
})

const layoutVariantKeys = [
  "sidebar"
]
const getVariantProps = (variants) => ({ ...layoutDefaultVariants, ...compact(variants) })

export const layout = /* @__PURE__ */ Object.assign(layoutFn, {
  __recipe__: false,
  __name__: 'layout',
  raw: (props) => props,
  classNameMap: {},
  variantKeys: layoutVariantKeys,
  variantMap: {
  "sidebar": [
    "none",
    "left",
    "right"
  ]
},
  splitVariantProps(props) {
    return splitProps(props, layoutVariantKeys)
  },
  getVariantProps
})