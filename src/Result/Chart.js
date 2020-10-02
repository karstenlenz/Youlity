import React, { useEffect, useRef, useState } from 'react'
import Chartjs from 'chart.js'

export default function Chart({ config }) {
  const chartContainer = useRef(null)
  const [chartInstance, setChartInstance] = useState(null)

  useEffect(() => {
    if (chartContainer && chartContainer.current) {
      const newChartInstance = new Chartjs(chartContainer.current, config)
      setChartInstance(newChartInstance)
    }
  }, [chartContainer, config])

  return (
    <div>
      <canvas width="345px" height="345px" ref={chartContainer} />
    </div>
  )
}
