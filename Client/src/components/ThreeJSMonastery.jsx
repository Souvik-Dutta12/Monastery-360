import React, { useRef, useEffect, useState } from 'react'
import * as THREE from 'three'

const ThreeJSMonastery = ({ 
  width = 800, 
  height = 600, 
  isInteractive = true, 
  autoRotate = true,
  showControls = true 
}) => {
  const mountRef = useRef(null)
  const sceneRef = useRef(null)
  const rendererRef = useRef(null)
  const cameraRef = useRef(null)
  const animationRef = useRef(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isMouseDown, setIsMouseDown] = useState(false)

  useEffect(() => {
    if (!mountRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    scene.background = new THREE.Color(0x1d1903)
    scene.fog = new THREE.Fog(0x1d1903, 50, 200)
    sceneRef.current = scene

    // Camera setup
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000)
    camera.position.set(0, 5, 15)
    cameraRef.current = camera

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(width, height)
    renderer.shadowMap.enabled = true
    renderer.shadowMap.type = THREE.PCFSoftShadowMap
    renderer.toneMapping = THREE.ACESFilmicToneMapping
    renderer.toneMappingExposure = 1.2
    rendererRef.current = renderer

    mountRef.current.appendChild(renderer.domElement)

    // Lighting setup
    const ambientLight = new THREE.AmbientLight(0x404040, 0.4)
    scene.add(ambientLight)

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1)
    directionalLight.position.set(10, 20, 10)
    directionalLight.castShadow = true
    directionalLight.shadow.mapSize.width = 2048
    directionalLight.shadow.mapSize.height = 2048
    directionalLight.shadow.camera.near = 0.5
    directionalLight.shadow.camera.far = 50
    directionalLight.shadow.camera.left = -20
    directionalLight.shadow.camera.right = 20
    directionalLight.shadow.camera.top = 20
    directionalLight.shadow.camera.bottom = -20
    scene.add(directionalLight)

    // Point lights for atmosphere
    const pointLight1 = new THREE.PointLight(0xffd700, 0.8, 30)
    pointLight1.position.set(-5, 8, 5)
    scene.add(pointLight1)

    const pointLight2 = new THREE.PointLight(0xff6b35, 0.6, 25)
    pointLight2.position.set(5, 6, -5)
    scene.add(pointLight2)

    // Create monastery complex
    const monasteryGroup = new THREE.Group()

    // Main monastery building with more detail
    const mainBuildingGeometry = new THREE.BoxGeometry(8, 6, 6)
    const mainBuildingMaterial = new THREE.MeshLambertMaterial({ 
      color: 0x7F1D1D,
      transparent: true,
      opacity: 0.9
    })
    const mainBuilding = new THREE.Mesh(mainBuildingGeometry, mainBuildingMaterial)
    mainBuilding.position.set(0, 3, 0)
    mainBuilding.castShadow = true
    mainBuilding.receiveShadow = true
    monasteryGroup.add(mainBuilding)

    // Add architectural details
    const detailGeometry = new THREE.BoxGeometry(0.2, 0.2, 6.2)
    const detailMaterial = new THREE.MeshLambertMaterial({ color: 0x991B1B })
    
    // Vertical pillars
    for (let i = 0; i < 4; i++) {
      const pillar = new THREE.Mesh(detailGeometry, detailMaterial)
      pillar.position.set(-3 + i * 2, 3, 3.1)
      pillar.castShadow = true
      monasteryGroup.add(pillar)
    }

    // Horizontal beams
    const beamGeometry = new THREE.BoxGeometry(8.2, 0.2, 0.2)
    for (let i = 0; i < 3; i++) {
      const beam = new THREE.Mesh(beamGeometry, detailMaterial)
      beam.position.set(0, 4.5 + i * 0.5, 3.1)
      beam.castShadow = true
      monasteryGroup.add(beam)
    }

    // Roof
    const roofGeometry = new THREE.ConeGeometry(6, 3, 4)
    const roofMaterial = new THREE.MeshLambertMaterial({ color: 0x991B1B })
    const roof = new THREE.Mesh(roofGeometry, roofMaterial)
    roof.position.set(0, 7.5, 0)
    roof.rotation.y = Math.PI / 4
    roof.castShadow = true
    monasteryGroup.add(roof)

    // Windows with frames
    const windowGeometry = new THREE.PlaneGeometry(1, 1.5)
    const windowMaterial = new THREE.MeshBasicMaterial({ 
      color: 0xFEF3C7,
      transparent: true,
      opacity: 0.8
    })
    
    const windowFrameGeometry = new THREE.PlaneGeometry(1.2, 1.7)
    const windowFrameMaterial = new THREE.MeshLambertMaterial({ color: 0x1d1903 })
    
    const windows = []
    const windowPositions = [
      { x: -2.5, y: 4, z: 3.01 },
      { x: -0.8, y: 4, z: 3.01 },
      { x: 0.8, y: 4, z: 3.01 },
      { x: 2.5, y: 4, z: 3.01 }
    ]
    
    windowPositions.forEach(pos => {
      // Window frame
      const frame = new THREE.Mesh(windowFrameGeometry, windowFrameMaterial)
      frame.position.set(pos.x, pos.y, pos.z - 0.01)
      monasteryGroup.add(frame)
      
      // Window glass
      const window = new THREE.Mesh(windowGeometry, windowMaterial)
      window.position.set(pos.x, pos.y, pos.z)
      monasteryGroup.add(window)
      windows.push(window)
    })

    // Door
    const doorGeometry = new THREE.PlaneGeometry(2, 3)
    const doorMaterial = new THREE.MeshLambertMaterial({ color: 0x1d1903 })
    const door = new THREE.Mesh(doorGeometry, doorMaterial)
    door.position.set(0, 1.5, 3.01)
    monasteryGroup.add(door)

    // Stupa/Tower
    const stupaBaseGeometry = new THREE.CylinderGeometry(1.5, 2, 4, 8)
    const stupaBaseMaterial = new THREE.MeshLambertMaterial({ color: 0xFEF3C7 })
    const stupaBase = new THREE.Mesh(stupaBaseGeometry, stupaBaseMaterial)
    stupaBase.position.set(0, 8, 0)
    stupaBase.castShadow = true
    monasteryGroup.add(stupaBase)

    const stupaTopGeometry = new THREE.SphereGeometry(1.2, 8, 6)
    const stupaTopMaterial = new THREE.MeshLambertMaterial({ color: 0x991B1B })
    const stupaTop = new THREE.Mesh(stupaTopGeometry, stupaTopMaterial)
    stupaTop.position.set(0, 10.5, 0)
    stupaTop.castShadow = true
    monasteryGroup.add(stupaTop)

    // Prayer flags
    const flagGeometry = new THREE.PlaneGeometry(0.1, 2)
    const flagMaterial = new THREE.MeshBasicMaterial({ 
      color: 0xFEF3C7,
      transparent: true,
      opacity: 0.8
    })
    
    for (let i = 0; i < 7; i++) {
      const flag = new THREE.Mesh(flagGeometry, flagMaterial)
      flag.position.set(-3 + i * 1, 6.5, 0)
      flag.rotation.z = Math.sin(i * 0.5) * 0.2
      monasteryGroup.add(flag)
    }

    // Courtyard
    const courtyardGeometry = new THREE.PlaneGeometry(12, 12)
    const courtyardMaterial = new THREE.MeshLambertMaterial({ 
      color: 0xFEF3C7,
      transparent: true,
      opacity: 0.7
    })
    const courtyard = new THREE.Mesh(courtyardGeometry, courtyardMaterial)
    courtyard.rotation.x = -Math.PI / 2
    courtyard.position.set(0, 0.01, 0)
    courtyard.receiveShadow = true
    monasteryGroup.add(courtyard)

    // Trees around monastery
    const treeGeometry = new THREE.ConeGeometry(1, 3, 6)
    const treeMaterial = new THREE.MeshLambertMaterial({ color: 0x166534 })
    
    const treePositions = [
      { x: -8, z: -8 },
      { x: 8, z: -8 },
      { x: -8, z: 8 },
      { x: 8, z: 8 },
      { x: 0, z: -10 },
      { x: -10, z: 0 },
      { x: 10, z: 0 }
    ]
    
    treePositions.forEach(pos => {
      const tree = new THREE.Mesh(treeGeometry, treeMaterial)
      tree.position.set(pos.x, 1.5, pos.z)
      tree.castShadow = true
      monasteryGroup.add(tree)
    })

    // Mountains in background
    const mountainGeometry = new THREE.ConeGeometry(15, 8, 6)
    const mountainMaterial = new THREE.MeshLambertMaterial({ 
      color: 0x374151,
      transparent: true,
      opacity: 0.8
    })
    
    for (let i = 0; i < 3; i++) {
      const mountain = new THREE.Mesh(mountainGeometry, mountainMaterial)
      mountain.position.set(-20 + i * 20, 4, -25)
      mountain.rotation.y = Math.random() * Math.PI
      mountain.scale.set(1 + Math.random() * 0.5, 1 + Math.random() * 0.3, 1 + Math.random() * 0.5)
      monasteryGroup.add(mountain)
    }

    // Floating particles for atmosphere
    const particleGeometry = new THREE.BufferGeometry()
    const particleCount = 200
    const positions = new Float32Array(particleCount * 3)
    const colors = new Float32Array(particleCount * 3)
    
    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3
      positions[i3] = (Math.random() - 0.5) * 100
      positions[i3 + 1] = Math.random() * 50 + 10
      positions[i3 + 2] = (Math.random() - 0.5) * 100
      
      // Color variation
      const color = new THREE.Color()
      color.setHSL(0.1 + Math.random() * 0.1, 0.7, 0.6)
      colors[i3] = color.r
      colors[i3 + 1] = color.g
      colors[i3 + 2] = color.b
    }
    
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    particleGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))
    
    const particleMaterial = new THREE.PointsMaterial({
      size: 0.15,
      transparent: true,
      opacity: 0.7,
      vertexColors: true,
      blending: THREE.AdditiveBlending
    })
    
    const particles = new THREE.Points(particleGeometry, particleMaterial)
    monasteryGroup.add(particles)

    // Add prayer wheel
    const wheelGeometry = new THREE.CylinderGeometry(0.5, 0.5, 0.2, 8)
    const wheelMaterial = new THREE.MeshLambertMaterial({ color: 0x1d1903 })
    const prayerWheel = new THREE.Mesh(wheelGeometry, wheelMaterial)
    prayerWheel.position.set(6, 1, 0)
    prayerWheel.castShadow = true
    monasteryGroup.add(prayerWheel)

    // Add more decorative elements
    const decorationGeometry = new THREE.SphereGeometry(0.3, 8, 6)
    const decorationMaterial = new THREE.MeshLambertMaterial({ color: 0xFFD700 })
    
    for (let i = 0; i < 8; i++) {
      const decoration = new THREE.Mesh(decorationGeometry, decorationMaterial)
      const angle = (i / 8) * Math.PI * 2
      decoration.position.set(
        Math.cos(angle) * 5,
        8 + Math.sin(i) * 0.5,
        Math.sin(angle) * 5
      )
      decoration.castShadow = true
      monasteryGroup.add(decoration)
    }

    scene.add(monasteryGroup)

    // Mouse interaction
    const handleMouseMove = (event) => {
      if (!isInteractive) return
      
      const rect = renderer.domElement.getBoundingClientRect()
      const x = ((event.clientX - rect.left) / rect.width) * 2 - 1
      const y = -((event.clientY - rect.top) / rect.height) * 2 + 1
      
      setMousePosition({ x, y })
      
      if (isMouseDown) {
        monasteryGroup.rotation.y += x * 0.01
        monasteryGroup.rotation.x += y * 0.01
      }
    }

    const handleMouseDown = () => {
      if (isInteractive) setIsMouseDown(true)
    }

    const handleMouseUp = () => {
      setIsMouseDown(false)
    }

    if (isInteractive) {
      renderer.domElement.addEventListener('mousemove', handleMouseMove)
      renderer.domElement.addEventListener('mousedown', handleMouseDown)
      renderer.domElement.addEventListener('mouseup', handleMouseUp)
    }

    // Animation loop
    const animate = () => {
      animationRef.current = requestAnimationFrame(animate)
      
      // Auto rotation
      if (autoRotate && !isMouseDown) {
        monasteryGroup.rotation.y += 0.005
      }
      
      // Gentle floating animation for particles
      const time = Date.now() * 0.001
      particles.rotation.y = time * 0.1
      
      // Animate particle positions
      const positions = particles.geometry.attributes.position.array
      for (let i = 0; i < positions.length; i += 3) {
        positions[i + 1] += Math.sin(time + i * 0.01) * 0.01
      }
      particles.geometry.attributes.position.needsUpdate = true
      
      // Subtle building sway
      mainBuilding.rotation.z = Math.sin(time * 0.5) * 0.02
      
      // Window glow effect
      windows.forEach((window, index) => {
        window.material.opacity = 0.8 + Math.sin(time * 2 + index) * 0.2
      })
      
      // Prayer wheel rotation
      prayerWheel.rotation.y += 0.02
      
      // Decorative elements floating
      monasteryGroup.children.forEach((child, index) => {
        if (child.material && child.material.color.getHex() === 0xFFD700) {
          child.position.y = 8 + Math.sin(time * 0.5 + index) * 0.3
        }
      })
      
      // Camera movement based on mouse
      if (isInteractive) {
        camera.position.x += (mousePosition.x * 2 - camera.position.x) * 0.05
        camera.position.y += (mousePosition.y * 2 + 5 - camera.position.y) * 0.05
        camera.lookAt(monasteryGroup.position)
      }
      
      renderer.render(scene, camera)
    }

    animate()
    setIsLoaded(true)

    // Cleanup
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement)
      }
      if (isInteractive) {
        renderer.domElement.removeEventListener('mousemove', handleMouseMove)
        renderer.domElement.removeEventListener('mousedown', handleMouseDown)
        renderer.domElement.removeEventListener('mouseup', handleMouseUp)
      }
    }
  }, [width, height, isInteractive, autoRotate, mousePosition, isMouseDown])

  return (
    <div className="relative w-full h-full">
      <div 
        ref={mountRef} 
        className="w-full h-full rounded-xl overflow-hidden"
        style={{ 
          background: 'linear-gradient(135deg, #1d1903 0%, #2d1a0a 50%, #1d1903 100%)',
          minHeight: height
        }}
      />
      
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-[#1d1903]/80 backdrop-blur-sm rounded-xl">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-300 mx-auto mb-4"></div>
            <p className="text-amber-200 prata">Loading 3D Monastery...</p>
          </div>
        </div>
      )}
      
      {showControls && isLoaded && (
        <div className="absolute top-4 left-4 bg-[#1d1903]/90 backdrop-blur-sm rounded-lg p-3 border border-amber-200/20">
          <div className="text-amber-300 text-sm font-bold">3D Monastery Model</div>
          <div className="text-amber-100/70 text-xs">
            {isInteractive ? 'Click & drag to rotate' : 'Auto-rotating'}
          </div>
        </div>
      )}
      
      {isLoaded && (
        <div className="absolute bottom-4 right-4 bg-[#1d1903]/90 backdrop-blur-sm rounded-lg p-3 border border-amber-200/20">
          <div className="text-amber-300 text-sm font-bold">Three.js Powered</div>
          <div className="text-amber-100/70 text-xs">Real-time 3D Rendering</div>
        </div>
      )}
    </div>
  )
}

export default ThreeJSMonastery
