import { ImageResponse } from 'next/og'

// Route segment config
export const runtime = 'edge'

// Image metadata
export const size = {
  width: 32,
  height: 32,
}
export const contentType = 'image/png'

// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          fontSize: 22,
          fontWeight: "50px",
          color: 'black',
          background: 'white',
          padding: "2px",
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: "5px",
        }}
      >
        <div style={{
          background: "black",
          borderRadius: "100%",
          height: "20px",
          width: "20px"
        }} />
      </div>
    ),
    {
      ...size,
    }
  )
}