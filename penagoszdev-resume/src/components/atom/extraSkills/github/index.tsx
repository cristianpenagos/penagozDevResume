import React from 'react'

const index = () => {
  return (
    <div className="relative w-4 h-4">
      {/* Cuadrado inferior */}
      <div className="absolute border border-yellow-400 w-3 h-3 top-1 left-1"></div>
      
      {/* Cuadrado superior */}
      <div className="absolute border border-yellow-400 w-3 h-3"></div>
    </div>
  )
}

export default index