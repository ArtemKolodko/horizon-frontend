export const breakpoints = {
  mobile: '375px',
  mobileL: '425px',
  tablet: '768px',
  tabletM: '868px',
  laptop: '1024px',
  desktop: '1378px',
};

export const cutAddress = (address: string, first = 6, last = 4) => {
  if (last > 0) {
    return `${address.substr(0, first)}...${address.substr(-last)}`
  }
  return `${address.substr(0, first)}...`
}

export const isAddressValid = (address: string) => {
  if (!address || address.length != 42) {
    return false
  }
  if (address.slice(0, 2) !== '0x') {
    return false
  }
  return true
}
