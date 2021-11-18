const size = {
    mobile: '768px',
    tablet: '1024px',
    desktop: '2024px',
   }
   const device = {
    mobile: `(max-width: ${size.mobile})`,
    tablet: `(max-width: ${size.tablet})`,
    desktop: `(min-width: ${size.desktop})`
   }
   export default {size, device}