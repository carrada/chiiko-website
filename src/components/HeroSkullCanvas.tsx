/// <reference types="@react-three/fiber" />
import { Suspense, memo, useEffect, useMemo, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Center, OrbitControls, useGLTF } from "@react-three/drei";
import { motion } from "framer-motion";
import * as THREE from "three";

/** Huichol skull GLB — CC-BY-NC-SA-4.0, SBCVL_UCSF (Sketchfab) */

const MODEL_URL = "/models/huichol-skull.glb";

function scaleForViewport(width: number): [number, number, number] {
  if (width < 640) return [0.007, 0.007, 0.007];
  if (width < 1024) return [0.0092, 0.0092, 0.0092];
  return [0.0108, 0.0108, 0.0108];
}

type Hero3DLayout = {
  scale: [number, number, number];
  cameraZ: number;
  fov: number;
  modelY: number;
};

function layoutForContainer(width: number, height: number): Hero3DLayout {
  if (width < 640) {
    const s = 0.0062;
    let cameraZ = 2.55 + s * 12;
    if (height < 260) {
      cameraZ += (260 - height) / 320;
    }
    return {
      scale: [s, s, s],
      cameraZ: Math.min(2.95, Math.max(2.45, cameraZ)),
      fov: 32,
      modelY: 0.08,
    };
  }
  if (width < 1024) {
    return { scale: scaleForViewport(width), cameraZ: 2, fov: 30, modelY: 0.13 };
  }

  const baseScale = 0.0108;
  const refHeight = 560;
  const heightRatio = Math.max(0.65, height / refHeight);
  const scaleBoost = Math.min(1.04, Math.max(0.96, 0.98 + heightRatio * 0.04));
  const s = baseScale * scaleBoost;

  let cameraZ = 3.05 + s * 20;
  if (heightRatio < 0.95) {
    cameraZ += (0.95 - heightRatio) * 1.1;
  }

  return {
    scale: [s, s, s],
    cameraZ: Math.min(3.4, Math.max(2.85, cameraZ)),
    fov: 33,
    modelY: 0.28,
  };
}

const HuicholSkullModel = memo(function HuicholSkullModel({
  scale,
  modelY,
}: {
  scale: [number, number, number];
  modelY: number;
}) {
  const { scene } = useGLTF(MODEL_URL);
  const clone = useMemo(() => {
    const next = scene.clone(true);
    next.traverse((child) => {
      const mesh = child as THREE.Mesh;
      if (!mesh.isMesh || !mesh.material) return;
      const materials = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
      for (const material of materials) {
        if ("roughness" in material && typeof material.roughness === "number") {
          material.roughness = Math.min(material.roughness, 0.72);
        }
        if ("metalness" in material && typeof material.metalness === "number") {
          material.metalness = Math.min(material.metalness, 0.15);
        }
        material.needsUpdate = true;
      }
    });
    return next;
  }, [scene]);

  return (
    <Center>
      <primitive object={clone} scale={scale} position={[0, modelY, 0]} />
    </Center>
  );
});

function LoadingFallback() {
  return (
    <div className="flex h-full w-full items-center justify-center bg-white text-sm text-neutral-500">
      Cargando modelo 3D...
    </div>
  );
}

export default function HeroSkullCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [layout, setLayout] = useState<Hero3DLayout>(() =>
    layoutForContainer(
      typeof window !== "undefined" ? window.innerWidth : 1024,
      560,
    ),
  );
  const [loaded, setLoaded] = useState(false);
  const controlsRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const update = () => {
      setLayout(layoutForContainer(window.innerWidth, el.clientHeight));
    };

    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    window.addEventListener("resize", update);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: loaded ? 1 : 0 }}
      transition={{ duration: 1 }}
      className="relative flex h-full min-h-0 w-full max-sm:translate-y-1 max-sm:items-center max-sm:justify-center sm:-translate-y-5 sm:items-center lg:-translate-y-12 lg:bg-white"
    >
      {!loaded && (
        <div className="pointer-events-none absolute inset-0 z-10">
          <LoadingFallback />
        </div>
      )}
      <Suspense fallback={null}>
        <Canvas
          dpr={1}
          camera={{ position: [0, 0, layout.cameraZ], fov: layout.fov }}
          className="h-full w-full"
          style={{ width: "100%", height: "100%", background: "#ffffff" }}
          onCreated={({ gl }) => {
            gl.toneMapping = THREE.ACESFilmicToneMapping;
            gl.toneMappingExposure = 1.45;
            gl.outputColorSpace = THREE.SRGBColorSpace;
            setLoaded(true);
          }}
        >
          <color attach="background" args={["#ffffff"]} />
          <hemisphereLight intensity={0.55} color="#ffffff" groundColor="#f5f5f5" />
          <ambientLight intensity={0.95} />
          <directionalLight position={[2, 4, 2]} intensity={2.1} />
          <directionalLight position={[-3, 2, 4]} intensity={1.35} />
          <pointLight position={[0, 0.5, 2.5]} intensity={1.1} color="#fff8f0" />
          <HuicholSkullModel scale={layout.scale} modelY={layout.modelY} />
          <OrbitControls
            ref={controlsRef}
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.8}
            enableDamping
            dampingFactor={0.08}
            maxPolarAngle={Math.PI / 1.7}
            minPolarAngle={Math.PI / 2.5}
          />
        </Canvas>
      </Suspense>
    </motion.div>
  );
}

useGLTF.preload(MODEL_URL);
