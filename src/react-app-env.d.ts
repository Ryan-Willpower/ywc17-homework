/// <reference types="react-scripts" />
declare module '*.png'
declare module '*.webp'

export interface BrowserSize {
  [key: string]: number
  laptop: number
  largeTablet: number
  tablet: number
  largePhone: number
  mobile: number
}

export interface MediaQuery {
  [key: string]: string
}

export interface BrowserQuery {
  laptop: string
  largeTablet: string
  tablet: string
  largePhone: string
  mobile: string
}

export interface NavbarItem {
  label: string
  href: string
}

export interface NavbarProps {
  navbarItems: NavbarItem[]
}

export interface Data {
  navbarItems: NavbarItem[]
  duration: string
  detail: string
  condition: string
}

export interface ImageColumnProps {
  imageSrc: string
}

export interface NavbarMainProps {
  isOpen: boolean
}

export interface DurationProps {
  duration: string
}

export interface DetailProps {
  detail: string
}

export interface ConditionProps {
  condition: string
}

export interface HamburgerProps {
  state: {
    isOpen: boolean
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
  }
}
