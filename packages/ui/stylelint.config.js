/** @type {import('stylelint').Config} */
const config = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-css-modules',
    'stylelint-config-prettier'
  ],
  plugins: ['stylelint-order'],
  rules: {
      // 💡 Modern safe rules
      'no-descending-specificity': null, // Useful when layering with BEM or CSS Modules
      'selector-class-pattern': null,    // Let CSS Modules use camelCase
      'value-keyword-case': ['lower', {
        ignoreKeywords: ['currentColor', 'inherit']
      }],
      'function-no-unknown': [true, {
        ignoreFunctions: ['theme', 'token'] // For custom tokens like in Tailwind or DS
      }],
      'order/order': ['custom-properties', 'declarations'],

      // 💡 Custom Ordering rules
      'order/properties-order': [
        // POSITIONING
        {
          groupName: 'Positioning',
          emptyLineBefore: 'always',
          properties: [
            'position',
            'inset',
            'top',
            'right',
            'bottom',
            'left',
            'z-index',
          ],
        },
  
        // DISPLAY & FLEX / GRID
        {
          groupName: 'Layout',
          emptyLineBefore: 'always',
          properties: [
            'display',
            'visibility',
            'flex',
            'flex-grow',
            'flex-shrink',
            'flex-basis',
            'flex-direction',
            'flex-wrap',
            'justify-content',
            'align-items',
            'align-content',
            'order',
            'grid',
            'grid-area',
            'grid-template',
            'grid-template-areas',
            'grid-template-rows',
            'grid-template-columns',
            'grid-row',
            'grid-column',
            'gap',
            'row-gap',
            'column-gap',
            'place-items',
            'place-content',
          ],
        },
  
        // BOX MODEL
        {
          groupName: 'Box Model',
          emptyLineBefore: 'always',
          properties: [
            'box-sizing',
            'width',
            'min-width',
            'max-width',
            'height',
            'min-height',
            'max-height',
            'padding',
            'padding-top',
            'padding-right',
            'padding-bottom',
            'padding-left',
            'margin',
            'margin-top',
            'margin-right',
            'margin-bottom',
            'margin-left',
            'overflow',
            'overflow-x',
            'overflow-y',
          ],
        },
  
        // TYPOGRAPHY
        {
          groupName: 'Typography',
          emptyLineBefore: 'always',
          properties: [
            'font',
            'font-family',
            'font-size',
            'font-style',
            'font-weight',
            'letter-spacing',
            'line-height',
            'text-align',
            'text-transform',
            'text-decoration',
            'white-space',
            'word-break',
          ],
        },
  
        // VISUAL
        {
          groupName: 'Visual',
          emptyLineBefore: 'always',
          properties: [
            'color',
            'background',
            'background-color',
            'background-image',
            'background-position',
            'background-size',
            'background-repeat',
            'border',
            'border-width',
            'border-style',
            'border-color',
            'border-radius',
            'box-shadow',
            'opacity',
          ],
        },
  
        // ANIMATION
        {
          groupName: 'Animation',
          emptyLineBefore: 'always',
          properties: [
            'transition',
            'transition-delay',
            'transition-duration',
            'transition-property',
            'transition-timing-function',
            'transform',
            'will-change',
            'animation',
          ],
        },
  
        // INTERACTION
        {
          groupName: 'Interaction',
          emptyLineBefore: 'always',
          properties: ['cursor', 'pointer-events', 'user-select'],
        },
  
        // MISC
        {
          groupName: 'Misc',
          emptyLineBefore: 'always',
          properties: ['appearance', 'content', 'clip'],
        },
      ],
  
  },
  overrides: [
    {
      files: ['**/*.module.css'],
      customSyntax: 'postcss-scss', // Needed to parse nested rules or `@layer`
    }
  ]
};

export default config;