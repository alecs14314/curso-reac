import { useEffect, useState } from 'react'

const FollowMouse = () => {
  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  useEffect(() => {
    const handlemove = (event) => {
      const { clientX, clientY } = event
      setPosition({ x: clientX, y: clientY })
    }
    if (enabled) {
      window.addEventListener('pointermove', handlemove)
    }

    // CUANDO EL COMPONENTE SE DESMONTA Y CUANDO CAMBIAN LAS DEPENDENCIAS
    return () => {
      window.removeEventListener('pointermove', handlemove)
      setPosition({ x: 0, y: 0 })
    }
  }, [enabled])
  // [] -> Solo se ejecuta una vez cuando se monta el componente
  // [enabled] -> Se ejecuta cuando se monta y cuando cambia enabled
  // undefined -> Seejecuta cada vez que se renderiza el componente

  useEffect(() => {
    document.body.classList.toggle('no-cursor', enabled)
    return () => {
      document.body.classList.remove('no-cursor')
    }
  }, [enabled])

  const handledButton = () => {
    setEnabled(!enabled)
  }
  return (
    <>
      <div style={{
        position: 'absolute',
        backgroundColor: '#09f',
        borderRadius: '50%',
        opacity: 0.8,
        pointerEvents: 'none',
        left: -20,
        top: -20,
        width: 40,
        height: 40,
        transform: `translate(${position.x}px, ${position.y}px)`
      }}
      />
      <button onClick={handledButton}>
        {enabled ? 'Desactivar' : 'Activar'}
      </button>
    </>
  )
}
function App () {
  return (
    <main>
      <FollowMouse />
    </main>
  )
}

export default App
