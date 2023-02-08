import { ImageResizeMode, ViewStyle, ImageSourcePropType } from 'react-native'

export type ImageViewerProps = {
    isLocal: Boolean,
    url: ImageSourcePropType,
    containerStyles: ViewStyle,
    resizeMode: ImageResizeMode,
} 

export type ImageViewSource = {
    uri: string
}