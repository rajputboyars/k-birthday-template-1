"use client";

import { useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
// Import Html along with other necessities from drei
import { useTexture, OrbitControls, Html } from "@react-three/drei";

/**
 * Renders the image planes in a circle (ring) formation and applies continuous rotation.
 * @param {object} props - Component props.
 * @param {string[]} props.images - Array of image URLs to load.
 * @param {number} [props.radius=2.2] - The radius of the ring.
 */
function Ring({ images, radius = 2.2 }) {
  const group = useRef();
  // useTexture handles loading all images safely
  // Note: These image paths must be accessible publicly (e.g., in the Next.js /public folder)
  const textures = useTexture(images);

  // useFrame runs on every frame render, controlling the animation
  useFrame(({ clock }) => {
    // Auto-rotation of the entire group
    if (group.current) group.current.rotation.y = clock.elapsedTime * 0.12;
  });

  return (
    <group ref={group}>
      {textures.map((t, i) => {
        // Calculate position (x, z) and rotation (theta) for placement in a circle
        const theta = (i / textures.length) * Math.PI * 2;
        const x = Math.cos(theta) * radius;
        const z = Math.sin(theta) * radius;

        return (
          <mesh
            key={i}
            position={[x, 0, z]}
            // Rotate the plane to face the center of the ring
            rotation={[0, theta + Math.PI, 0]}
          >
            <planeGeometry args={[1.6, 1.0]} />
            {/* MeshBasicMaterial is sufficient for displaying textures */}
            <meshBasicMaterial map={t} toneMapped={false} />
          </mesh>
        );
      })}
    </group>
  );
}

/**
 * Renders the central text using standard HTML and Tailwind CSS inside the 3D scene.
 */
function CenterText({ centerText }) {
  return (
    <Html
      center
      position={[0, 0, 0]} // Center position in the 3D scene
      distanceFactor={3} // Scales the element based on distance from the camera
    >
      {/* Pink-themed circular text box */}
      <div
        className="bg-white/90 backdrop-blur-sm p-6 rounded-full text-center 
                   shadow-2xl shadow-fuchsia-500/40 border-4 border-pink-400 
                   max-w-[200px] pointer-events-none transform -translate-y-4 select-none"
        style={{ 
          width: '200px', 
          height: '200px', 
          display: 'flex', 
          flexDirection: 'column', 
          justifyContent: 'center', 
          alignItems: 'center' 
        }}
      >
        <p className="text-xl font-extrabold text-fuchsia-700 tracking-wider leading-snug">
          {centerText}
        </p>
        <p className="text-sm text-pink-500 mt-1">
          Explore Memories
        </p>
      </div>
    </Html>
  );
}

/**
 * Main component handling the mobile fallback and desktop Three.js Canvas.
 */
export default function Carousel3D({
  images = ["/carousel/1.jpg", "/carousel/2.jpg", "/carousel/3.jpg"],
  centerText = "Our Memories Together",
}) {
  // Client-side detection for mobile screen width
  const isSmall =
    typeof window !== "undefined" && window.innerWidth < 600;

  // ✅ fallback gallery for mobile (Pink Theme)
  if (isSmall) {
    return (
      <div className="flex overflow-x-auto gap-4 py-4 px-2 bg-pink-50/70 border-t-4 border-pink-300 rounded-xl shadow-lg">
        {images.map((src, i) => (
          <div
            key={i}
            className="min-w-[70%] bg-white rounded-xl shadow-xl border-2 border-pink-300 p-3 flex-shrink-0"
          >
            <img
              src={src}
              alt={`img-${i}`}
              className="w-full h-48 object-cover rounded-lg"
              onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/400x250/FBC7D4/712347?text=Placeholder"; }}
            />
            <div className="mt-2 text-center font-bold text-fuchsia-700">
              Memory {i + 1} 💖
            </div>
          </div>
        ))}
      </div>
    );
  }

  // ✅ main 3D carousel for desktop (Pink Theme)
  return (
    <div
      style={{ height: 420, width: "100%" }}
      // Apply pink theme styling to the canvas container
      className="rounded-3xl shadow-xl shadow-fuchsia-500/30 overflow-hidden border-4 border-pink-400 bg-black/10 transition-all duration-500"
    >
      <Canvas camera={{ position: [0, 0.8, 5], fov: 50 }}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 5, 5]} intensity={0.6} />
        <Suspense fallback={
             // Simple loading text using Html
             <Html center>
                <div className="text-pink-500 text-xl font-bold">Loading Memories...</div>
             </Html>
        }>
          <Ring images={images} />
          {/* Add the center text component */}
          <CenterText centerText={centerText} /> 
        </Suspense>
        <OrbitControls 
            enablePan={false} 
            enableZoom={false} 
            // Allow slight vertical movement for better viewing angle
            maxPolarAngle={Math.PI / 2 + 0.3} 
            minPolarAngle={Math.PI / 2 - 0.3} 
        />
      </Canvas>
    </div>
  );
}