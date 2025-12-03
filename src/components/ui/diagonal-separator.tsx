interface DiagonalSeparatorProps {
  topColor: string
  bottomColor: string
  barColor?: string
  reverse?: boolean
}

export function DiagonalSeparator({
  topColor,
  bottomColor,
  barColor = "#364AA0",
  reverse = false
}: DiagonalSeparatorProps) {
  return (
    <div className="absolute bottom-0 left-0 w-full h-[30px] overflow-hidden z-10">
      <svg
        viewBox="0 0 1200 30"
        preserveAspectRatio="none"
        className="w-full h-full"
      >
        {/* Section du haut */}
        <polygon
          points={reverse
            ? "0,0 1200,30 1200,0"
            : "0,0 1200,0 0,30"
          }
          fill={topColor}
        />

        {/* Barre bleue diagonale */}
        <polygon
          points={reverse
            ? "0,0 1200,30 1200,20 0,0"
            : "0,20 1200,0 1200,10 0,30"
          }
          fill={barColor}
        />

        {/* Section du bas */}
        <polygon
          points={reverse
            ? "0,0 1200,20 1200,30 0,30"
            : "0,30 1200,10 1200,30"
          }
          fill={bottomColor}
        />
      </svg>
    </div>
  )
}
