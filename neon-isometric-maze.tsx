"use client"

import type React from "react"
import { useEffect, useRef } from "react"

const NeonIsometricMaze: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let t = 0
    let animationFrameId: number

    // Define the color palette inspired by the image
    const colors = {
      gold: "rgba(255, 215, 0, 0.8)",
      burgundy: "rgba(128, 0, 32, 0.9)",
      magenta: "rgba(255, 0, 128, 0.8)",
      darkBurgundy: "rgba(80, 0, 20, 0.9)",
    }

    const resize = () => {
      if (!canvas) return
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      draw()
    }

    // Function to draw a chevron pattern
    const drawChevron = (x: number, y: number, size: number, height: number, angle: number) => {
      if (!ctx) return

      ctx.save()
      ctx.translate(x, y)
      ctx.rotate(angle)

      // Draw main chevron shape
      ctx.beginPath()
      ctx.moveTo(0, -height / 2)
      ctx.lineTo(size / 2, 0)
      ctx.lineTo(0, height / 2)
      ctx.lineTo(-size / 2, 0)
      ctx.closePath()

      const gradient = ctx.createLinearGradient(-size / 2, 0, size / 2, 0)
      gradient.addColorStop(0, colors.gold)
      gradient.addColorStop(0.5, colors.magenta)
      gradient.addColorStop(1, colors.gold)

      ctx.fillStyle = gradient
      ctx.fill()
      ctx.strokeStyle = colors.burgundy
      ctx.lineWidth = 2
      ctx.stroke()

      // Draw inner pattern
      const innerSize = size * 0.7
      const innerHeight = height * 0.7

      ctx.beginPath()
      ctx.moveTo(0, -innerHeight / 2)
      ctx.lineTo(innerSize / 2, 0)
      ctx.lineTo(0, innerHeight / 2)
      ctx.lineTo(-innerSize / 2, 0)
      ctx.closePath()

      ctx.strokeStyle = "rgba(255, 255, 255, 0.5)"
      ctx.lineWidth = 1
      ctx.stroke()

      // Add decorative dots
      const dotRadius = size * 0.05
      const dotSpacing = size * 0.15

      for (let i = -2; i <= 2; i++) {
        ctx.beginPath()
        ctx.arc(i * dotSpacing, innerHeight / 2 + dotRadius * 2, dotRadius, 0, Math.PI * 2)
        ctx.fillStyle = colors.gold
        ctx.fill()
      }

      ctx.restore()
    }

    // Function to draw a diamond pattern
    const drawDiamond = (x: number, y: number, size: number, height: number) => {
      if (!ctx) return

      ctx.save()
      ctx.translate(x, y)

      // Draw main diamond
      ctx.beginPath()
      ctx.moveTo(0, -height / 2)
      ctx.lineTo(size / 2, 0)
      ctx.lineTo(0, height / 2)
      ctx.lineTo(-size / 2, 0)
      ctx.closePath()

      const pulseEffect = Math.abs(Math.sin(t + x * 0.01 + y * 0.01))

      const gradient = ctx.createLinearGradient(-size / 2, -height / 2, size / 2, height / 2)
      gradient.addColorStop(0, colors.burgundy)
      gradient.addColorStop(0.5, `rgba(255, 215, 0, ${0.5 + 0.5 * pulseEffect})`)
      gradient.addColorStop(1, colors.magenta)

      ctx.fillStyle = gradient
      ctx.fill()
      ctx.strokeStyle = colors.gold
      ctx.lineWidth = 1.5
      ctx.stroke()

      // Inner diamond
      const innerSize = size * 0.6
      const innerHeight = height * 0.6

      ctx.beginPath()
      ctx.moveTo(0, -innerHeight / 2)
      ctx.lineTo(innerSize / 2, 0)
      ctx.lineTo(0, innerHeight / 2)
      ctx.lineTo(-innerSize / 2, 0)
      ctx.closePath()

      ctx.strokeStyle = "rgba(255, 255, 255, 0.4)"
      ctx.stroke()

      // Cross pattern inside
      ctx.beginPath()
      ctx.moveTo(-innerSize / 2, 0)
      ctx.lineTo(innerSize / 2, 0)
      ctx.moveTo(0, -innerHeight / 2)
      ctx.lineTo(0, innerHeight / 2)
      ctx.strokeStyle = colors.gold
      ctx.lineWidth = 1
      ctx.stroke()

      ctx.restore()
    }

    const draw = () => {
      if (!canvas || !ctx) return

      const cellSize = Math.min(canvas.width, canvas.height) / 12
      const gridWidth = Math.ceil(canvas.width / cellSize) * 2
      const gridHeight = Math.ceil(canvas.height / (cellSize * 0.5)) * 2
      const centerX = canvas.width / 2
      const centerY = canvas.height / 2

      for (let y = -gridHeight; y < gridHeight; y++) {
        for (let x = -gridWidth; x < gridWidth; x++) {
          // Calculate isometric position
          const isoX = centerX + ((x - y) * cellSize) / 2
          const isoY = centerY + ((x + y) * cellSize) / 4

          // Calculate distance from center for pattern variation
          const distanceFromCenter = Math.sqrt(x * x + y * y)
          const maxDistance = Math.sqrt(gridWidth * gridWidth + gridHeight * gridHeight)
          const normalizedDistance = distanceFromCenter / maxDistance

          // Height variation based on sine wave and distance
          const heightFactor = 1 - normalizedDistance * 0.5
          const waveHeight = cellSize * heightFactor * Math.abs(Math.sin(distanceFromCenter * 0.3 + t))

          // Alternate between patterns based on position
          const patternType = (Math.abs(x) + Math.abs(y)) % 3

          if (patternType === 0) {
            // Draw chevron pattern
            drawChevron(
              isoX,
              isoY - waveHeight / 2,
              cellSize,
              cellSize * 0.8 + waveHeight,
              Math.PI / 4 + Math.sin(t * 0.2 + distanceFromCenter * 0.1) * 0.2,
            )
          } else if (patternType === 1) {
            // Draw diamond pattern
            drawDiamond(isoX, isoY - waveHeight / 2, cellSize * 0.9, cellSize * 0.7 + waveHeight)
          } else {
            // Draw isometric cube with African-inspired patterns
            ctx.beginPath()
            ctx.moveTo(isoX, isoY - waveHeight)
            ctx.lineTo(isoX + cellSize / 2, isoY - cellSize / 4 - waveHeight)
            ctx.lineTo(isoX + cellSize, isoY - waveHeight)
            ctx.lineTo(isoX + cellSize, isoY)
            ctx.lineTo(isoX + cellSize / 2, isoY + cellSize / 4)
            ctx.lineTo(isoX, isoY)
            ctx.closePath()

            const gradient = ctx.createLinearGradient(isoX, isoY - waveHeight, isoX + cellSize, isoY)
            gradient.addColorStop(0, colors.gold)
            gradient.addColorStop(0.5, colors.burgundy)
            gradient.addColorStop(1, colors.magenta)

            ctx.fillStyle = gradient
            ctx.fill()
            ctx.strokeStyle = "rgba(255, 215, 0, 0.7)"
            ctx.lineWidth = 1.5
            ctx.stroke()

            // Add decorative lines
            ctx.beginPath()

            // Zigzag pattern on top face
            const zigzagPoints = 5
            const zigzagWidth = cellSize / zigzagPoints

            for (let i = 0; i <= zigzagPoints; i++) {
              const zx = isoX + (i * cellSize) / zigzagPoints
              const zy = isoY - waveHeight * (i % 2 === 0 ? 1 : 0.7)

              if (i === 0) {
                ctx.moveTo(zx, zy)
              } else {
                ctx.lineTo(zx, zy)
              }
            }

            ctx.strokeStyle = "rgba(255, 255, 255, 0.5)"
            ctx.lineWidth = 1
            ctx.stroke()

            // Vertical lines
            ctx.beginPath()
            ctx.moveTo(isoX, isoY)
            ctx.lineTo(isoX, isoY - waveHeight)
            ctx.moveTo(isoX + cellSize, isoY)
            ctx.lineTo(isoX + cellSize, isoY - waveHeight)
            ctx.moveTo(isoX + cellSize / 2, isoY + cellSize / 4)
            ctx.lineTo(isoX + cellSize / 2, isoY - cellSize / 4 - waveHeight)
            ctx.strokeStyle = "rgba(255, 215, 0, 0.4)"
            ctx.stroke()
          }
        }
      }
    }

    const animate = () => {
      if (!canvas || !ctx) return

      // Use a semi-transparent background for trail effect
      ctx.fillStyle = "rgba(80, 0, 20, 0.2)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      draw()
      t += 0.03
      animationFrameId = requestAnimationFrame(animate)
    }

    window.addEventListener("resize", resize)
    resize()
    animate()

    return () => {
      window.removeEventListener("resize", resize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-10" />
}

export default NeonIsometricMaze

