'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

const rules = [
  "time moves faster after midnight",
  "snacks taste better when nobody is watching",
  "the best songs appear when least expected",
  "sleep becomes urgent exactly when it’s too late",
]

export default function RulesTerminal() {
  const [typedLines, setTypedLines] = useState<string[]>([])
  const [currentLine, setCurrentLine] = useState(0)
  const [currentChar, setCurrentChar] = useState(0)
  const [started, setStarted] = useState(false)

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  // initialize empty lines
  useEffect(() => {
    setTypedLines(new Array(rules.length).fill(""))
  }, [])

  // start typing when visible
  useEffect(() => {
    if (isInView) {
      setStarted(true)
    }
  }, [isInView])

  // typing logic
  useEffect(() => {
    if (!started) return
    if (currentLine >= rules.length) return

    const timeout = setTimeout(() => {
      const line = rules[currentLine]

      if (currentChar < line.length) {
        setTypedLines(prev => {
          const updated = [...prev]
          updated[currentLine] = line.slice(0, currentChar + 1)
          return updated
        })
        setCurrentChar(currentChar + 1)
      } else {
        setCurrentLine(currentLine + 1)
        setCurrentChar(0)
      }
    }, 30)

    return () => clearTimeout(timeout)
  }, [currentChar, currentLine, started])

  return (
    <section ref={ref} className="py-27 flex justify-center px-6 bg-black">
      <div className="w-full max-w-2xl rounded-lg border border-white/10 bg-black/70 p-6 font-mono text-sm text-neutral-300 shadow-xl">

        {/* Terminal header */}
        <div className="mb-4">
          <span className="text-green-400">aisha@portfolio</span>
          <span className="text-neutral-500">:</span>
          <span className="text-blue-400">~</span>
          <span className="text-neutral-500">$ </span>
          <span>rules_of_universe.log</span>
          <span className="animate-pulse">▍</span>
        </div>

        {/* Typed rules */}
        <div className="space-y-2">
          {typedLines.map((line, index) => (
            <p key={index} className="text-amber-300">
              {line && "> "}
              {line}
              {started && index === currentLine && (
                <span className="animate-pulse">▍</span>
              )}
            </p>
          ))}
        </div>

      </div>
    </section>
  )
}
